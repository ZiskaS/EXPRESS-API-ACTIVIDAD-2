const express = require('express');
const router = express.Router();
const postsController = require('../controllers/post.controller');

// Create a new post
router.post('/', postsController.createPost);

// Get all posts
router.get('/', postsController.getAllPosts);

// Get a post by ID
router.get('/:id', postsController.getPostById);

// Update a post by ID
router.patch('/:id', postsController.updatePostById);

// Delete a post by ID
router.delete('/:id', postsController.deletePostById);

module.exports = router;
