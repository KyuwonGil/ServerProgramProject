const express = require('express')
const router = express.Router()
const oracledb = require('oracledb')
const dbConfig = require('../../DataBase/DBMS/DBConfig.js')

router.get('/', (req, res) => {
    const paging = require('../../DataBase/DTO/Paging')

    oracledb.getConnection(
        {
            user: dbConfig.user,
            password: dbConfig.password,
            connectString: dbConfig.connectString
        },
        (err, connection) => {
            if (err) {
                console.error(err.message)
                return
            }

            var query = 'SELECT COUNT(NO) FROM POST';
            connection.execute(query, (err, result) => {
                if (err) {
                    console.error(err.message)
                    return
                }
                paging.setPaging(result.rows[0][0], req.query.currentPage == undefined ? 1 : parseInt(req.query.currentPage), 10, 10)

                query = `SELECT NO, TITLE, WRITER_ID, DAY, NUM_OF_HIT FROM 
                    (SELECT ROW_NUMBER() OVER(ORDER BY NO DESC) AS ROW_NO, NO, TITLE, WRITER_ID, DAY, NUM_OF_HIT FROM POST) 
                    WHERE ${paging.startNo - 1} < ROW_NO AND ROW_NO < ${paging.lastNo + 1} ORDER BY NO DESC`

                connection.execute(query, (err, result) => {
                    if (err) {
                        console.error(err.message)
                        return
                    }

                    connection.close(err => {
                        if (err) {
                            console.error(err.message)
                            return
                        }

                        res.json({
                            type: 'main',
                            form: {
                                name: 'Board',
                                value: result.rows
                            }
                        })
                    })
                })
            })
        }
    )
})

module.exports = router