import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UIdContext } from "../components/AppContext";
import { isEmpty } from "./Utils";

// img 
import bellPicto from "./../assets/picto/bell-regular.svg"
import bullhornPicto from "./../assets/picto/bullhorn-solid.svg"

const RightNavBar = () => {
	const dispatch = useDispatch();
	const uid = useContext(UIdContext);
	const userData = useSelector((state) => state.userReducer);
	const usersData = useSelector((state) => state.usersReducer);

	const [userFriendsList, setUserFriendsList] = React.useState([]);
	const [playOnce, setPlayOnce] = useState(true);

	useEffect(() => {
		const notFriendList = () => {
			let array = [];
			usersData.map((user) => {
				if (user._id !== userData._id && user.followers.includes(userData._id)) return array.push(user._id);
				return true;
			});
			array.sort(() => 0.5 - Math.random());
			array.length = 15;

			setUserFriendsList(array);
		};

		if (playOnce && !isEmpty(usersData[0]) && !isEmpty(userData._id)) {
			notFriendList();
			setPlayOnce(false);
		}
	}, [usersData, userFriendsList, userData, playOnce]);

	const displayProfilPage = (id) => {
		dispatch({ type: "ACTIVE_PAGE", payload: "profilPage" });
	}
	const displayUsersProfilPage = (id) => {
		dispatch({ type: "ACTIVE_USER_PROFIL", payload: id });
		dispatch({ type: "ACTIVE_PAGE", payload: "usersProfilPage" });
	}

	return (
		<>
			{uid && (
				<div className="right-nav-container">
					<div className="fixed-nav">
						<div className="right-nav-block">
							<h4>Vos Pages et profils</h4>
							<div className="profil-link" onClick={displayProfilPage}>
								<img className="profil-pic" crossOrigin="anonymous" src={process.env.REACT_APP_API_URL + userData.picture} alt="profil" />
								<h6>{userData.pseudo}</h6>
							</div>
							<div className="user-notifications">
								<div className="notification">
									<img src={bellPicto} alt="notification" />
									<p>Notifications</p>
								</div>
								<div className="notification">
									<img src={bullhornPicto} alt="promotion" />
									<p>Créer une promotion</p>
								</div>
							</div>
							<div className="grey-separator"></div>
						</div>
						<div className="right-nav-block">
							<h4>Contacts</h4>
							<div className="user-contacts">
								<ul>
									{userFriendsList.map((user) => {
										for (let i = 0; i < usersData.length; i++) {
											if (user === usersData[i]._id) {
												return (
													<li key={usersData[i]._id} className="friend-container">
														<div onClick={() => displayUsersProfilPage(usersData[i]._id)} className="profil-link friend-link">
															<img crossOrigin="anonymous" src={process.env.REACT_APP_API_URL + usersData[i].picture} alt="friend-pic" />
															<h6 className="friend-name">{usersData[i].pseudo}</h6>
														</div>
													</li>
												);
											}
										}
										return true;
									})}
								</ul>
								<div className="grey-separator"></div>
							</div>
						</div>
						<div className="right-nav-block">
							<h4>Conversations de groupe</h4>
							<div to="/profil" className="profil-link">
								<div className="add-group">+</div>
								<h6>Créer un nouveau groupe</h6>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default RightNavBar;
