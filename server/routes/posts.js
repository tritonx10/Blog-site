const express = require('express');
const router = express.Router();
const { getAllPosts, getPostBySlug, createPost, updatePost, deletePost } = require('../controllers/postController');

router.get('/', getAllPosts);
router.get('/:slug', getPostBySlug);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;
