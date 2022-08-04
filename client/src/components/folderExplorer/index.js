import React, { useRef } from "react";
import { Rnd } from "react-rnd";
import { useSelector } from "react-redux";

import Header from "./Header";
import CloseWindow from "../buttons/CloseWindow";
import Content from "./Content";
import NavBar from "./NavBar";

const FolderExplorer = ({ closeWindow }) => {
	const nodeRef = useRef(null);
	const darkMode = useSelector((state) => state.globalVariablesReducer.darkMode);

	return (
		<Rnd
			default={{
				x: document.documentElement.clientWidth / 2 - 610 / 2,
				y: 100,
				width: 610,
				height: 350,
			}}
			minWidth={375}
			minHeight={300}
			disableDragging={false}
			bounds={".app-delimitation"}
			enableResizing={{ bottomRight: true, bottomLeft: true }}
			dragHandleClassName={"folder-explorer__header"}
		>
			<div ref={nodeRef} className="window-template folder-explorer">
				<div className="folder-explorer__header">
					<Header />
					<CloseWindow closeWindow={closeWindow} />
				</div>

				<div className="folder-explorer__body">
					<div className="folder-explorer__body--navbar">
						<NavBar />
					</div>

					<div className={darkMode ? "folder-explorer__body--content dark-mode" : "folder-explorer__body--content"}>
						<Content />
					</div>
				</div>
			</div>
		</Rnd>
	);
};

export default FolderExplorer;
