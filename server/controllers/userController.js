const User = require("../models/User");
const bcrypt = require('bcryptjs')

class userController {
	async updateUser(req, res) {
		try {
			if (!req.body.userId === req.params.id) {
				return res.status(403).json('You cant update this profile')
			};
			if (req.body.password) {
				const hashPassword = await bcrypt.hash(req.body.password, 8);
				req.body.password = hashPassword;
			};
			await User.findByIdAndUpdate(req.body.userId, {
				$set: req.body,
			});
			res.status(200).json("Account has been updated");
		} catch (error) {
			res.send({ message: 'Server error' })
		}
	}

	async deleteUser(req, res) {
		try {
			if (!req.body.userId === req.params.id) {
				return res.status(403).json('You cant delete this profile')
			}
			await User.findByIdAndDelete(req.body.userId);
			res.status(200).json("Account has been deleted");
		} catch (error) {
			res.send({ message: 'Server error' })
		}
	}

	async getUser(req, res) {
		try {
			const user = await User.findById(req.params.userId);
			if (!user) {
				res.status(404).json({ message: 'User not found' });
			}
			const { password, __v, ...other } = user;
			res.status(200).json(other);
		} catch (error) {
			res.send({ message: 'Server error' })
		}
	}

	async followUser(req, res) {
		try {
			if (req.body.userId === req.params.id) {
				res.status(403).json("You cant follow yourself");
			};
			const userToFollow = await User.findById(req.params.id);
			const currentUser = await User.findById(req.body.userId);
			if (userToFollow.followers.includes(req.body.userId)) {
				res.status(403).json("you allready follow this user");
			};
			await userToFollow.updateOne({ $push: { followers: currentUser._id } });
			await user.updateOne({ $push: { followings: userToFollow._id } });
			res.status(200).json({ message: "user has been foolwed" });
		} catch (error) {
			res.send({ message: 'Server error' });
		}
	}

	async unFollowUser(req, res) {
		try {
			if (req.body.userId === req.params.id) {
				res.status(403).json("You cant unfollow yourself");
			};
			const userToUnfollow = await User.findById(req.params.id);
			const currentUser = await User.findById(req.body.userId);
			if (!userToUnfollow.followers.includes(req.body.userId)) {
				res.status(403).json("you dont follow this user");
			};
			await userToUnfollow.updateOne({ $pull: { followers: currentUser._id } });
			await currentUser.updateOne({ $pull: { followings: userToUnfollow._id } });
		} catch {
			res.send({ message: 'Server error' });
		}
	}
}

module.exports = new userController();