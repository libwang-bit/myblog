var sqlMap = {
  addArticle: 'INSERT INTO article(title, content, markdown) VALUES (?, ?, ?)',
  editArticle: 'UPDATE article set title = ?, content = ?, markdown = ? WHERE id = ?',
  getArticle: 'SELECT id, title, content, markdown FROM article WHERE id = ?',
  getCatalog: 'SELECT id, create_time, update_time, title FROM article ORDER BY update_time DESC'
};

module.exports = sqlMap;
