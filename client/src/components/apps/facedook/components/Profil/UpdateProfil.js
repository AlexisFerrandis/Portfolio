import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import UploadBannerPic from "./UploadBannerPic";
import UploadProfilPic from "./UploadProfilPic";

import FriendsRecommandation from "../FriendsRecommandation";
import Intro from "./Intro";

import cookie from "js-cookie";
import NewPostForm from "../Post/NewPostForm";

import Thread from "../Thread";


// img 
import camera from "../../assets/picto/camera-solid.svg"
import bracket from "../../assets/picto/right-from-bracket-solid.svg"

const UpdateProfil = () => {
	const dispatch = useDispatch();
	const userData = useSelector((state) => state.userReducer);

	const [profilPicModification, setProfilPicModification] = useState(false);
	const [bannerPicModification, setBannerPicModification] = useState(false);

	const handleProfilPicModification = (e) => {
		e.preventDefault();
		setProfilPicModification(true);
	};

	const handleBannerPicModification = (e) => {
		e.preventDefault();
		setBannerPicModification(true);
	};

	const removeCookie = (key) => {
		if (window !== "undefined") {
			cookie.remove(key, { expires: 1 });
		}
	};

	const logout = async () => {
		await axios({
			method: "get",
			url: `${process.env.REACT_APP_API_URL}api/user/logout`,
			withCredentials: true,
		})
			.then(() => removeCookie("jwt"))
			.catch((err) => console.log(err));

			dispatch({ type: "ACTIVE_PAGE", payload: "fullLogPage" })
	};

	return (
		<>
			{profilPicModification ? <UploadProfilPic profilPicModification={setProfilPicModification} /> : null}
			{bannerPicModification ? <UploadBannerPic bannerPicModification={setBannerPicModification} /> : null}
			<section className="update-profil-page">
				<div className="pictures-modifications">
					<div className="banner-container" onClick={handleBannerPicModification}>
						{userData.bannerPicture ? <img className="banner-pic-container" crossOrigin="anonymous" src={process.env.REACT_APP_API_URL + userData.bannerPicture} alt="banner-pic" /> : null}
						<div className="banner-modificator">
							<button>
								<img className="camera-picto" src={camera} alt="camera" />
								<p>Ajouter une photo de couverture</p>
							</button>
						</div>
					</div>
					<div className="profil-pic-container">
						<div className="profil-pic-modificator">
							<div className="pic-container" onClick={handleProfilPicModification}>
								<img className="profil-pic" crossOrigin="anonymous" src={process.env.REACT_APP_API_URL + userData.picture} alt="profil-pic" />
							</div>
							<div className="camera-picto-container" onClick={handleProfilPicModification}>
								<img className="camera-picto" src={camera} alt="camera" />
							</div>
						</div>
						<div className="name-and-logout">
							<div>
								<h1>{userData.pseudo}</h1>
								{userData.following && userData.following.length > 0 ? (
										<h5>{userData.following.length === 1 ? "1 ami" : userData.following.length + " amis"}</h5>
								) : (
									""
								)}
							</div>
							<div className="logout">
								<button onClick={logout}>
									<img className="logout-pic" src={bracket} alt="logout" />
									Se déconnecter
								</button>
							</div>
						</div>
						<div className="grey-separator"></div>
					</div>
				</div>
				<div className="user-informations">
					<div className="user-informations-container">
						<ul>
							<li className="is-active">Publications</li>
							<li className="tablet-display-none">À propos</li>
								<li className="mobile-display-none">Amis</li>
							<li className="mobile-display-none">Photos</li>
							<li className="mobile-display-none">Vidéos</li>
							<li className="tablet-display-none">Lieux</li>
							<li className="tablet-display-none">Plus &#9207;</li>
						</ul>
					</div>
					<div className="fake-btn">
						<button>...</button>
					</div>
				</div>
			</section>
			<div className="shadow-separator"></div>

			<section className="user-firends-bio-thread">
				<div className="friends-recommendations">
					<FriendsRecommandation />
				</div>

				<div className="profil-thread">
					<div className="informations-container">
						<Intro />
					</div>
					<div className="thread-container">
						<div className="post-container">
							<NewPostForm />
						</div>
						{/* <div className="publications-settings">Publications list</div> */}
						<div className="user-thread">
							<div className="user-thread-container">
								<Thread context={userData._id} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default UpdateProfil;
