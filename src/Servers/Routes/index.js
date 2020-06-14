const express = require('express')
const router = express.Router()
const oracledb = require('oracledb')
const dbConfig = require('../../DataBase/DBMS/DBConfig.js')

router.get('/board', (req, res) => {
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
// sign up process
router.post('/signup', (req, res) => {
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
router.get('/login', (req, res) => {
    res.json({
        type: 'input',
        form: {
            name: 'Login'
        }
    })
})

router.post('/login', (req, res) => {
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
// posting form
router.get('/post/write', (req, res) => {
    res.json({
        type: 'post',
        form: {
            name: 'WriteForm'
        }
    })
})
// posting process
router.post('/post/write', (req, res) => {
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
// show post
router.get('/post/read', (req, res) => {
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

router.get('/post/modify', (req, res) => {
    res.json({
        type : 'post',
        form : {
            name : 'ModifyForm'
        }
    })
})

router.post('/post/modify', (req, res) => {
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

router.get('/post/delete', (req, res) => {
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

router.get('/comment', (req, res) => {
    res.json({

    })
})

router.post('/comment', (req, res) => {
    res.json({

    })
})

module.exports = router