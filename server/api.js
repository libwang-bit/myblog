const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true    // 多语句查询
});

module.exports = {
  addArticle(req, res, next) {
    const title = req.body.title, content = req.body.content, markdown = req.body.markdown;
    pool.getConnection((err, connection) => {
      if (err) {
        console.log("create mysql connection error: " + err.message);
      }
      const sql = sqlMap.addArticle;
      connection.query(sql, [title, content, markdown], (err, result) => {
        res.json(result);
        connection.release();

        if (err) {
          console.log("add article error: " + err.message);
        }
      })
    })
  },
  editArticle(req, res, next) {
    const id = req.body.id, title = req.body.title, content = req.body.content, markdown = req.body.markdown;
    pool.getConnection((err, connection) => {
      if (err) {
        console.log("create mysql connection error: " + err.message);
      }
      const sql = sqlMap.editArticle;
      connection.query(sql, [title, content, markdown, id], (err, result) => {
        res.json(result);
        connection.release();

        if (err) {
          console.log("edit article error: " + err.message);
        }
      })
    })
  },
  getArticle(req, res, next) {
    const id = req.body.id;
    pool.getConnection((err, connection) => {
      const sql = sqlMap.getArticle;
      connection.query(sql, [id], (err, result) => {
        res.json(result);
        connection.release();
      })
    })
  },
  getCatalog(req, res, next) {
    pool.getConnection((err, connection) => {
      const sql = sqlMap.getCatalog;
      connection.query(sql, [], (err, result) => {
        res.json(result);
        connection.release();
      })
    })
  }
};
