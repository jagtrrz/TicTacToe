import React, { Fragment, useEffect, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
//include images into your bundle

import { Modaltemplate } from "./modal.jsx";
import { Board } from "./board.jsx";

import "/workspace/TicTacToe/src/styles/index.scss";

export const Home = () => {
	return (
		<Fragment>
			<div className="row d-flex justify-content-center title">
				<h1>TicTacToe React JSX</h1>
			</div>
			<Modaltemplate />
			<Board />
		</Fragment>
	);
};
