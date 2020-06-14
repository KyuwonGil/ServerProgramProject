const express = require('express')
const router = express.Router()
const oracledb = require('oracledb')
const dbConfig = require('../../DataBase/DBMS/DBConfig.js')

router.get('/write', (req, res) => {
    res.json({
        type: 'post',
        form: {
            name: 'WriteForm'
        }
    })
})

router.post('/write', (req, res) => {
    oracledb.getConnection(
        {
            user : dbConfig.user,
            password : dbConfig.password,
            connectString : dbConfig.connectString
        },
        (err, connection) => {
            if(err){
                console.error(err.message)
                return
            }
            
            var query = `INSERT INTO POST VALUES(${req.body.no},${req.session.id},${req.body.title},${req.body.contents},${req.body.day})`
            connection.execute(query, (err, result) => {
                if(err){
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

router.get('/read', (req, res) => {
    oracledb.getConnection(
        {
            user : dbConfig.user,
            password : dbConfig.password,
            connectString : dbConfig.connectString
        },
        (err, connection) => {
            if(err){
                console.error(err.message)
                return
            }
            var query = `SELECT * FROM POST WHERE NO = ${req.query.no}`
            connection.execute(query, (err, result) => {
                if(err){
                    console.error(err.message)
                    return
                }
                connection.close(err => {
                    if(err){
                        console.error(err.message)
                        return
                    }
                    res.json({
                        type : 'post',
                        form : {
                            name : 'ReadForm',
                            value : result.rows[0]
                        }
                    })
                })
            })
        }
    )
})

router.get('/modify', (req, res) => {
    res.json({
        type : 'post',
        form : {
            name : 'ModifyForm'
        }
    })
})

router.post('/modify', (req, res) => {
    var post = {
        no : req.body.no,
        writerId : req.body.writerId,
        title : req.body.title,
        contents : req.body.contents,
        day : req.body.day
    }
    oracledb.getConnection(
        {
            user : dbConfig.user,
            password : dbConfig.password,
            connectString : dbConfig.connectString
        },
        (err, connection) => {
            if(err){
                console.error(err.message)
                return
            }

            var query = 'UPDATE POST SET '
            if(post.title !== undefined) query += 'TITLE = ' + post.title + ','
            if(post.contents !== undefined) query += 'CONTENTS = ' + post.contents
            query += 'WHERE NO = ' + post.no
            connection.execute(query, (err, result) => {
                if(err){
                    console.error(err.message)
                    return
                }

                connection.close(err => {
                    if(err){
                        console.error(err.message)
                        return
                    }
                })
            })
        }
    )
})

router.get('/delete', (req, res) => {
    var no = req.query.no

    oracledb.getConnection(
        {
            user : dbConfig.user,
            password : dbConfig.password,
            connectString : dbConfig.connectString
        },
        (err, connection) => {
            if(err){
                console.error(err.message)
                return
            }

            var query = `DELETE FROM POST WHERE NO = ${no}`

            connection.execute(query, (err, result) => {
                if(err){
                    console.error(err.message)
                    return
                }

                connection.close(err => {
                    if(err){
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