const Router = require("express");
const userController = require('../controllers/userController');


const router = new Router();

//update user
router.put('/:id', userController.updateUser);
//delete user
router.delete('/:id', userController.deleteUser);
//get user
router.get('/:id', userController.getUser);
//fallaw a user
router.put('/:id/follow', userController.followUser)
//unfollow a user
router.put('/:id/unfollow', userController.unFollowUser);

module.exports = router;