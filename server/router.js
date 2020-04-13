const express = require('express');
const router = express.Router();
const api = require('./api');

router.get('/getValue', (req, res, next) => {
  api.getValue(req, res, next);
});

router.post('/setValue', (req, res, next) => {
  api.setValue(req, res, next);
});

router.post('/article/add', (req, res, next) => {
  api.addArticle(req, res, next);
});

router.post('/article/edit', (req, res, next) => {
  api.editArticle(req, res, next);
});

router.post('/article/get', (req, res, next) => {
  api.getArticle(req, res, next);
});

router.post('/catalog', (req, res, next) => {
  api.getCatalog(req, res, next);
});

router.post('/pic/upload', (req, res, next) => {
  api.uploadPic(req, res, next);
});
module.exports = router;
