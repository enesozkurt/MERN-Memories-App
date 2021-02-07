const express = require('express');

const posts = require('../controllers/posts');

const router = express.Router();

router.get('/', posts.getPosts);
router.post('/', posts.createPost);



module.exports = router;
