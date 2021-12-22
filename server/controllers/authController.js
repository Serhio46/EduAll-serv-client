const User = require("../models/User");
const Role = require("../models/Role");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const config = require('config');

const { validationResult } = require("express-validator");

class authController {
	async registration(req, res) {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ message: "Uncorrect request" })
			}

			const { email, password, roles, userName } = req.body;
			const candidate = await User.findOne({ email });

			if (candidate) {
				return res.status(400).json({ message: `User with email ${email} already exist` })
			}

			const hashPassword = await bcrypt.hash(password, 8);
			const userRole = await Role.findOne({ value: roles });

			if (!userName) userName = email;
			const user = new User({ email, password: hashPassword, roles: [userRole.value], userName });
			await user.save();
			const token = jwt.sign({ id: user._id }, config.get('secretKey'), { expiresIn: "1h" });
			const { password: pass, __v, ...other } = user._doc;
			return res.json({
				token,
				user: other
			})

		} catch (error) {
			console.log(error);
			res.send({ message: "Server error" });
		}
	}

	async logIn(req, res) {
		try {
			const { email, password } = req.body;
			const user = await User.findOne({ email });
			if (!user) {
				return res.status(404).json({ message: `User with email ${email} not found` })
			}

			const isPassValid = bcrypt.compareSync(password, user.password);
			if (!isPassValid) {
				return res.status(400).json({ message: `Wrong email or password` })
			}
			const token = jwt.sign({ id: user._id }, config.get('secretKey'), { expiresIn: "1h" });
			const { password: pass, __v, ...other } = user._doc;
			return res.json({
				token,
				user: other
			})

		} catch (error) {
			console.log(error);
			res.send({ message: "Server error" });
		}
	}
	//if we use cookies, we can clear cookies here
	async logOut(req, res) {
		try {
		} catch (error) {
			console.log(error);
			res.send({ message: "Server error" });
		}
	}

	async auth(req, res) {
		try {
			const user = await User.findOne({ _id: req.user.id });
			const token = jwt.sign({ id: user._id }, config.get('secretKey'), { expiresIn: "1h" });
			const { password: pass, __v, ...other } = user._doc;
			return res.json({
				token,
				user: other,
			})
		} catch (error) {
			res.send({ message: "Server error" });
		}
	}

}

module.exports = new authController();