const PostModel = require("../models/post.model");
const UserModel = require("../models/user.model");
const ObjectId = require("mongoose").Types.ObjectId;
const { uploadErrors } = require("../utils/errors.utils");
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);

module.exports.readPost = (req, res) => {
	PostModel.find((err, data) => {
		if (!err) res.send(data);
		else console.log("Error to get data : " + err);
	}).sort({ createdAt: -1 });
};

module.exports.createPost = async (req, res) => {
	let fileName;

	if (req.file !== undefined) {
		try {
			if (req.file.mimetype != "image/jpg" && req.file.mimetype != "image/png" && req.file.mimetype != "image/jpeg") throw Error("invalid file :" + req.file.mimetype);
			if (req.file.size > 3000000) throw Error("max size");
		} catch (err) {
			const errors = uploadErrors(err);
			return res.status(201).json({ errors });
		}
		fileName = req.body.posterId + Date.now() + ".jpg";

		// await pipeline(req.file.stream, fs.createWriteStream(`${__dirname}/../../client/public/uploads/posts/${fileName}`));
		const buffer = Buffer.from(req.file.buffer);
		fs.writeFile(`./uploads/posts/${fileName}`, buffer, function (err) {
			if (err) {
				return res.status(400).send(err);
			}
		});
	}

	const newPost = new PostModel({
		posterId: req.body.posterId,
		message: req.body.message,
		picture: req.file === undefined ? ""  : "./uploads/posts/" + fileName,
		video: req.body.video,
		likers: [],
		comments: [],
	});

	try {
		const post = await newPost.save();
		return res.status(201).json(post);
	} catch (err) {
		return res.status(400).send(err);
	}
};

module.exports.updatePost = (req, res) => {
	if (!ObjectId.isValid(req.params.id)) return res.status(400).send("ID unknown : " + req.params.id);

	const updatedRecord = {
		message: req.body.message,
	};

	PostModel.findByIdAndUpdate(req.params.id, { $set: updatedRecord }, { new: true }, (err, data) => {
		if (!err) res.send(data);
		else console.log("Update err : " + err);
	});
};

module.exports.deletePost = (req, res) => {
	if (!ObjectId.isValid(req.params.id)) return res.status(400).send("ID unknown : " + req.params.id);

	PostModel.findByIdAndRemove(req.params.id, (err, data) => {
		if (!err) res.send(data);
		else console.log("Delete err : " + err);
	});
};

module.exports.likePost = async (req, res) => {
	if (!ObjectId.isValid(req.params.id)) return res.status(400).send("ID unknown : " + req.params.id);

	try {
		await PostModel.findByIdAndUpdate(
			req.params.id,
			{
				$addToSet: { likers: req.body.id },
			},
			{ new: true }
		)
			.then((data) => res.send(data))
			.catch((err) => res.status(500).send({ message: err }));
		await UserModel.findByIdAndUpdate(
			req.body.id,
			{
				$addToSet: { likes: req.params.id },
			},
			{ new: true }
		);
	} catch (err) {
		return res.status(400).send(err);
	}
};

module.exports.unlikePost = async (req, res) => {
	if (!ObjectId.isValid(req.params.id)) return res.status(400).send("ID unknown : " + req.params.id);

	try {
		await PostModel.findByIdAndUpdate(
			req.params.id,
			{
				$pull: { likers: req.body.id },
			},
			{ new: true }
		)
			.then((data) => res.send(data))
			.catch((err) => res.status(500).send({ message: err }));
		await UserModel.findByIdAndUpdate(
			req.body.id,
			{
				$pull: { likes: req.params.id },
			},
			{ new: true }
		);
	} catch (err) {
		return res.status(400).send(err);
	}
};

module.exports.commentPost = (req, res) => {
	if (!ObjectId.isValid(req.params.id)) return res.status(400).send("ID unknown : " + req.params.id);

	try {
		return PostModel.findByIdAndUpdate(
			req.params.id,
			{
				$push: {
					comments: {
						commenterId: req.body.commenterId,
						commenterPseudo: req.body.commenterPseudo,
						text: req.body.text,
						timestamp: new Date().getTime(),
					},
				},
			},
			{ new: true },
			(err, data) => {
				if (!err) return res.send(data);
				else return res.status(400).send(err);
			}
		);
	} catch (err) {
		return res.status(400).send(err);
	}
};

module.exports.editCommentPost = (req, res) => {
	if (!ObjectId.isValid(req.params.id)) return res.status(400).send("ID unknown : " + req.params.id);

	try {
		return PostModel.findById(req.params.id, (err, data) => {
			const theComment = data.comments.find((comment) => comment._id.equals(req.body.commentId));
			if (!theComment) return res.status(404).send("Comment not found");
			theComment.text = req.body.text;
			theComment.asBeenModified = true;

			return data.save((err) => {
				if (!err) return res.status(200).send(data);
				return res.status(500).send(err);
			});
		});
	} catch (err) {
		return res.status(400).send(err);
	}
};

module.exports.likeCommentPost = async (req, res) => {
	if (!ObjectId.isValid(req.params.id)) return res.status(400).send("ID unknown : " + req.params.id);

	try {
		await PostModel.findById(req.params.id, (err, data) => {
			const theComment = data.comments.find((comment) => comment._id.equals(req.body.commentId));
			if (!theComment) return res.status(404).send("Comment not found");

			if (!theComment.likers.includes(req.body.likerId)) {
				theComment.likers.push(req.body.likerId);
			} else {
				theComment.likers.remove(req.body.likerId);
			}

			return data.save((err) => {
				if (!err) return res.status(200).send(data);
				return res.status(500).send(err);
			});
		});
	} catch (err) {
		console.log("well...");
	}
};

module.exports.deleteCommentPost = (req, res) => {
	if (!ObjectId.isValid(req.params.id)) return res.status(400).send("ID unknown : " + req.params.id);

	try {
		return PostModel.findByIdAndUpdate(
			req.params.id,
			{
				$pull: {
					comments: {
						_id: req.body.commentId,
					},
				},
			},
			{ new: true },
			(err, data) => {
				if (!err) return res.send(data);
				else return res.status(400).send(err);
			}
		);
	} catch (err) {
		return res.status(400).send(err);
	}
};
