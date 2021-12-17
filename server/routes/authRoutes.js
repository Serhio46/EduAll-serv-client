const Router = require("express");
const { check } = require("express-validator");
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/auth.middleware');

const router = new Router();

//create a user
router.post('/registration',
	[
		check('email', 'Uncorrect email').isEmail(),
		check('password', 'Password should be longer than 3 and shorter than 12').isLength({ min: 3, max: 12 })
	], authController.registration);
//login user
router.post("/login", authController.logIn);
//logout user
router.post("/logout", authController.logOut);
//auth user
router.get("/auth", authMiddleware, authController.auth);

module.exports = router;