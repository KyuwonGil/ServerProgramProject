const express = require('express')
const router = express.Router()
const oracledb = require('oracledb')
const dbConfig = require('../../DataBase/DBMS/DBConfig.js')

router.post('/up', (req, res) => {
    const USERS = {
        id : req.body.id,
        pw : req.body.pw,
        name : req.body.name,
        birthday : req.body.year + req.body.month + req.body.day,
        gender : req.body.gender == '남' ? 0 : 1,
        phoneNumber : req.body.pnum,
        email : req.body.email
    }
    console.log(USERS)
    oracledb.getConnection(
        {
            user: dbConfig.user,
            password: dbConfig.password,
            connectString: dbConfig.connectString
        },
        (err, connection) => {
            if(err){
                console.log(err.message)
                return
            }

            var query = `INSERT INTO USERS VALUES(${USERS.id},${USERS.pw},${USERS.name},${USERS.birthday},${USERS.gender},${USERS.phoneNumber},${USERS.email})`
            connection.execute(query, err => {
                if (err) {
                    console.error(err.message)
                    return
                }

                connection.close(err => {
                    if (err) {
                        console.error(err.message)
                        return
                    }
                    res.redirect('/')
                })
            })
        }
    )
})
router.get('/in', (req, res) => {
    res.json({
        type: 'input',
        form: {
            name: 'Login'
        }
    })
})

router.post('/in', (req, res) => {
    var id = req.body.id
    var pw = req.body.pw

    oracledb.getConnection(
        {
            user : dbConfig.user,
            password : dbConfig.password,
            connectString : dbConfig.connectString
        },
        (err, connection) => {
            if (err) {
                console.error(err.message)
                return
            }
        
            var query = `SELECT ID FROM USERS WHERE ID = ${id} AND PW = ${pw}`
            connection.execute(query, (err, result) => {
                if (err) {
                    console.error(err.message)
                    return
                }
                req.session.regenerate(() => {
                    req.session.isLogined = result.rows[0].length === 0
                    req.session.id = id
                })
                connection.close(err => {
                    if (err) {
                        console.error(err.message)
                        return
                    }
                    res.redirect('/')
                })
            })
        }
    )
})

module.exports = router