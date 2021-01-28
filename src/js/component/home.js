import React, { Fragment, useEffect, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
//include images into your bundle

import { Modaltemplate } from "./modal.jsx";
import { Board } from "./board.jsx";
import { Square } from "./square.jsx";
import "/workspace/react-hello/src/styles/index.scss";
//create your first component

export function Home() {
	const [player, setPlayer] = useState(true);
	const [symbol, setSymbol] = useState("x");

	useEffect(
		() => {
			player ? setSymbol("x") : setSymbol("o");
		},
		[player]
	);

	const handleClick = () => {
		setPlayer(!player);
	};

	let board = [null, null, null, null, null, null, null, null, null];
	let drawSquare = board.map((value, i) => {
		//console.log(board);
		return (
			<Square onMyClick={() => handleClick()} symbol={symbol} key={i} />
		);
	});
	console.log(drawSquare[0]);
	console.log(drawSquare[1]);

	return (
		<Fragment>
			<div className="row bg-danger fila">
				<div className=" square">{drawSquare[0]}</div>
				<div className=" square">{drawSquare[1]}</div>
				<div className=" square">{drawSquare[2]}</div>
			</div>
			<div className="row bg-primary fila">
				<div className=" square">{drawSquare[3]}</div>
				<div className=" square">{drawSquare[4]}</div>
				<div className="square">{drawSquare[5]}</div>
			</div>
			<div className="row bg-success fila">
				<div className=" square">{drawSquare[6]}</div>
				<div className=" square">{drawSquare[7]}</div>
				<div className=" square">{drawSquare[8]}</div>
			</div>
		</Fragment>
	);
}
