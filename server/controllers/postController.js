const { urlencoded } = require('express');
const Post = require('../models/Post');
const User = require("../models/User");

class postController {

	async createPost(req, res) {
		try {
			const newPost = new Post(req.body);
			await newPost.save();
			return res.status(200).json(newPost);

		} catch (error) {
			res.status(500).json(error)
		}
	}

	async updatePost(req, res) {
		try {
			const { userId } = req.body;
			const updatedPost = await Post.findById(req.params.id);
			if (updatedPost.userId !== userId) {
				res.status(403).json("You cant change this post")
			}
			await updatedPost.updateOne({ $set: req.body });
			res.status(200).json("the Post has been updated")
		} catch (error) {
			res.status(500).json(error)
		}
	}

	async deletePost(req, res) {
		try {
			const { userId } = req.body;
			const updatedPost = await Post.findById(req.params.id);
			if (updatedPost.userId !== userId) {
				res.status(403).json("You cant delete this post")
			}
			await updatedPost.deleteOne();
			res.status(200).json("the Post has been deleted")
		} catch (error) {
			res.status(500).json(error)
		}
	}

	async likePost(req, res) {
		try {
			const likedPost = await Post.findById(req.params.id);
			if (!likedPost.likes.includes(req.body.userId)) {
				await likedPost.updateOne({ $push: { likes: req.body.userId } });
				res.status(200).json({ message: 'The post has been added in favorite' });
			} else {
				await likedPost.updateOne({ $pull: { likes: req.body.userId } });
				res.status(200).json({ message: 'The post has been deleted in favorite' });
			}
		} catch (error) {
			res.status(500).json(error);
		}
	}

	async getOnePost(req, res) {
		try {
			const post = await Post.findById(req.params.id);
			res.status(200).json(post);
		} catch (error) {
			res.status(500).json(error);
		}
	}

	async getFollowingsPosts(req, res) {
		try {
			let totalPosts = [];
			const { userId } = req.body;
			const currentUser = await User.findById(userId);
			const followings = currentUser.followings;
			followings.forEach(async followingId => {
				const { data } = await Post.findAll({ userId: followingId });
				totalPosts = [...totalPosts, ...data];
			});
			res.status(200).json(totalPosts);
		} catch (error) {
			res.status(500).json(error);
		}
	}

}

module.exports = new postController();