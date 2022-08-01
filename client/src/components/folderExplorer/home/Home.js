import React from "react";
import { useSelector } from "react-redux";

// img
import documentsFolder from "../../../assets/folder/folder-adwaita.svg";
import picturesfolder from "../../../assets/folder/folder-adwaita-pictures.svg";
import musicFolder from "../../../assets/folder/folder-adwaita-music.svg";
import videoFolder from "../../../assets/folder/folder-adwaita-video.svg";
import gamesVolder from "../../../assets/folder/folder-adwaita-games.svg";
import winesFolder from "../../../assets/folder/folder-adwaita-wine.svg";
import presentationFile from "../../../assets/folder/text-x-authors.svg";

const Home = ({ path }) => {
	const lang = useSelector((state) => state.globalVariablesReducer.language);

	const handleProjectsPath = (e) => {
		path(e);
	};

	return (
		<div className="container">
			<div className="folder" onDoubleClick={(e) => handleProjectsPath(e)} id="projects">
				<img src={documentsFolder} alt="projects" className="folder-pic" />
				<p>{lang === "Fr" ? "Projets" : "Projects"}</p>
			</div>
			<div className="folder" onDoubleClick={(e) => handleProjectsPath(e)} id="pictures">
				<img src={picturesfolder} alt="pictures" className="folder-pic" />
				<p>{lang === "Fr" ? "Images" : "Pictures"}</p>
			</div>
			<div className="folder" onDoubleClick={(e) => handleProjectsPath(e)} id="music">
				<img src={musicFolder} alt="projects" className="folder-pic" />
				<p>{lang === "Fr" ? "Musique" : "Music"}</p>
			</div>
			<div className="folder" onDoubleClick={(e) => handleProjectsPath(e)} id="videos">
				<img src={videoFolder} alt="projects" className="folder-pic" />
				<p>{lang === "Fr" ? "Vidéos" : "Videos"}</p>
			</div>
			<div className="folder" onDoubleClick={(e) => handleProjectsPath(e)} id="games">
				<img src={gamesVolder} alt="projects" className="folder-pic" />
				<p>{lang === "Fr" ? "Jeux" : "Games"}</p>
			</div>
			<div className="folder" onDoubleClick={(e) => handleProjectsPath(e)} id="wine">
				<img src={winesFolder} alt="projects" className="folder-pic" />
				<p>{lang === "Fr" ? "Vin" : "Wine"}</p>
			</div>
			<div className="folder">
				<img src={presentationFile} alt="presentation" className="folder-pic" />
				<p>Hello.html</p>
			</div>
		</div>
	);
};

export default Home;