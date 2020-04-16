var sqlMap = {
  addArticle: 'INSERT INTO article(title, content, markdown) VALUES (?, ?, ?)',
  editArticle: 'UPDATE article set title = ?, content = ?, markdown = ? WHERE id = ?',
  getArticle: 'SELECT id, title, content, markdown FROM article WHERE id = ?',
  getCatalog: 'SELECT id, create_time, update_time, title, view_count FROM article ORDER BY update_time DESC',
  updateView: 'UPDATE article set view_count = view_count + 1 where id = ?'
};

module.exports = sqlMap;
