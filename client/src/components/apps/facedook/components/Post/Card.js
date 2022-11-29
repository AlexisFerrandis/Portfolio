import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { updatePost } from "../../actions/post.actions";
import { dateParser, isEmpty } from "../Utils";
import CardComments from "./CardComments";
import DeleteCard from "./DeleteCard";
import PostInteractions from "./PostInteractions";

// img 
import spinnerPicto from "../../assets/picto/spinner.svg"
import postLike from "../../assets/picto/post-like.svg"

const Card = ({ post }) => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);

	// const [isUpdated, setIsUpdated] = useState(false);
	// const [textUpdate, setTextUpdate] = useState(null);

	const [displayDeletePost, setDisplayDeletePost] = useState(false);
	const [showComments, setShowComments] = useState(false);

	const usersData = useSelector((state) => state.usersReducer);
	const userData = useSelector((state) => state.userReducer);
	// const dispatch = useDispatch();

	// const updateItem = () => {
	// 	if (textUpdate) {
	// 		dispatch(updatePost(post._id, textUpdate));
	// 	}
	// 	setIsUpdated(false);
	// };

	useEffect(() => {
		!isEmpty(usersData[0]) && setIsLoading(false);
	}, [usersData]);

	// useEffect(() => {
	// 	if (post.message.length > 320) {
	// 		post.message = post.message.substring(0, 320) + "...";
	// 	}
	// }, [post]);

	const handleHashtag = (message) => {
		const array = message.split(" ");
		for (let i = 0; i < array.length; i++) {
			array[i] = array[i] + " ";
			if (array[i].startsWith("#")) {
				array[i] = (
					<span className="hashtag" key={array[i]}>
						{array[i]}{" "}
					</span>
				);
			}
		}
		return array;
	};

	const deletePostDisplay = () => {
		setDisplayDeletePost(!displayDeletePost);
	};

	const displayUsersProfilPage = (id) => {
		dispatch({ type: "ACTIVE_USER_PROFIL", payload: id });
		dispatch({ type: "ACTIVE_PAGE", payload: "usersProfilPage" });
	}

	return (
		<li className="card-container window-container" key={post._id}>
			{isLoading ? (
				<div className="spinner-container">
					<img className="spinner" src={spinnerPicto} alt="spinner" />
				</div>
			) : (
				<>
					<div className="card-header">
						<div className="poster-info">
							<div onClick={() => displayUsersProfilPage(post.posterId)}>
								<img
									crossOrigin="anonymous"
									src={
										!isEmpty(usersData[0]) &&
										usersData
											.map((user) => {
												if (user._id === post.posterId) return process.env.REACT_APP_API_URL + user.picture;
												else return null;
											})
											.join("")
									}
									alt="poster-pic"
								/>
							</div>
							<div className="post-info">
								<h3 onClick={() => displayUsersProfilPage(post.posterId)}>
									{!isEmpty(usersData[0]) &&
										usersData.map((user) => {
											if (user._id === post.posterId) return user.pseudo;
											else return null;
										})}
								</h3>
								<span className="created-at">{dateParser(post.createdAt)}</span>
							</div>
						</div>
						{userData._id === post.posterId && (
							<div className="delete-btn-container">
								<div className="delete-btn" onClick={deletePostDisplay}>
									...
								</div>
								{displayDeletePost && <DeleteCard id={post._id} />}
							</div>
						)}
					</div>
					<div className="card-content">
						<p className="post-message">{handleHashtag(post.message)}</p>
						{/*{isUpdated === false && <p>{post.message}</p>}
						{isUpdated && (
							<div className="update-post">
								<textarea defaultValue={post.message} onChange={(e) => setTextUpdate(e.target.value)} />
								<div className="button-container">
									<button className="btn" onClick={updateItem}>
										Valider modification
									</button>
								</div>
							</div>
						)} */}
						{post.picture && <img crossOrigin="anonymous" src={process.env.REACT_APP_API_URL + post.picture} alt="card-pic" className="card-pic" />}
						{post.video && <iframe src={post.video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={post._id}></iframe>}
						{/* {!post.picture && !post.video && <div className="grey-separator"></div>} */}
					</div>

					<div className="card-footer">
						<div className="post-like-comment">
							<div className="post-like">
								{post.likers.length > 0 && (
									<>
										<img src={postLike} alt="likes" />
										<span>{post.likers.length}</span>
									</>
								)}
							</div>
							<div className="post-comment">
								{post.comments.length > 0 && (
									<>
										<span onClick={() => setShowComments(!showComments)}>
											{post.comments.length} {post.comments.length === 1 ? "commentaire" : "commentaires"}
										</span>
									</>
								)}
							</div>
						</div>
						<PostInteractions post={post} showComments={setShowComments} />
						{/* <div className="comment-icon">
							<img onClick={() => setShowComments(!showComments)} src="./assets/pictos/comment.svg" alt="comment" />
							<span>{post.comments.length}</span>
						</div>
						<LikeButton post={post} />
						<img src="./assets/pictos/share.svg" alt="share" /> */}
					</div>
					{showComments && <CardComments post={post} />}
				</>
			)}
		</li>
	);
};

export default Card;
