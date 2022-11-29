import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../actions/user.actions";
import { isEmpty } from "./Utils";

//img 
import userPlus from "./../assets/picto/user-plus-solid.svg"
import userMinus from "./../assets/picto/user-minus-solid.svg"

const FollowHandler = ({ idToFollow, type }) => {
	const userData = useSelector((state) => state.userReducer);
	const [isFollowed, setIsFollowed] = useState(false);
	const dispatch = useDispatch();

	const handleFollow = () => {
		dispatch(followUser(userData._id, idToFollow));
		setIsFollowed(true);
	};

	const handleUnfollow = () => {
		dispatch(unfollowUser(userData._id, idToFollow));
		setIsFollowed(false);
	};

	useEffect(() => {
		if (!isEmpty(userData.following)) {
			if (userData.following.includes(idToFollow)) {
				setIsFollowed(true);
			} else setIsFollowed(false);
		}
	}, [userData, idToFollow]);

	return (
		<>
			{isFollowed && !isEmpty(userData) && (
				<span onClick={handleUnfollow}>
					{type === "suggestion" && (
						<button className="add-friend-btn">
							<img src={userMinus} alt="remove-friend" />
							Annuler
						</button>
					)}
					{/* {type === "card" && <img src="./assets/pictos/checked.svg" alt="checked" />} */}
				</span>
			)}
			{isFollowed === false && !isEmpty(userData) && (
				<span onClick={handleFollow}>
					{type === "suggestion" && (
						<button className="add-friend-btn">
							<img src={userPlus} alt="add-friend" />
							Ajouter
						</button>
					)}
					{/* {type === "card" && <img src="./assets/pictos/check.svg" alt="check" />} */}
				</span>
			)}
		</>
	);
};

export default FollowHandler;
