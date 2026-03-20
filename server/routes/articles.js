const express = require('express');
const router = express.Router();
const { getAllArticles, getArticleBySlug, createArticle, updateArticle, deleteArticle } = require('../controllers/articleController');

router.get('/', getAllArticles);
router.get('/:slug', getArticleBySlug);
router.post('/', createArticle);
router.put('/:id', updateArticle);
router.delete('/:id', deleteArticle);

module.exports = router;
