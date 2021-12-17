const Router = require('express');
const postController = require('../controllers/postController')

const router = new Router();

//create a post
router.post('/', postController.createPost);
//update a post
router.put('/:id', postController.updatePost);
//delete a post
router.delete('/:id', postController.deletePost);
//like a post
router.put('/:id/like', postController.likePost);
//get a post
router.get('/:id', postController.getOnePost);
//get all followings posts 
router.get('/', postController.getFollowingsPosts);
module.exports = router;