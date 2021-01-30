import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { propTypes } from "react-bootstrap/esm/Image";

export const Board = () => {
	const [player, setPlayer] = useState(true);
	const [board, setBoard] = useState([
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null
	]);

	const handleClick = e => {
		if (board[e.target.id] === null) {
			if (player == true) {
				board.splice(e.target.id, 1, "X");
			} else {
				board.splice(e.target.id, 1, "O");
			}
			setPlayer(!player);
		}
	};

	const reset = e => {
		setBoard([null, null, null, null, null, null, null, null, null]);
	};

	const calculateWinner = squares => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return squares[a];
			}
		}
		return null;
	};

	const winner = calculateWinner(board);
	return (
		<>
			<div class="alert alert-success" role="alert">
				WINNER IS {winner}
			</div>
			<div className="board">
				<div className="row rowBoard">
					<div
						id="0"
						className="square"
						onClick={e => handleClick(e)}>
						{board[0]}
					</div>
					<div
						id="1"
						className="square"
						onClick={e => handleClick(e)}>
						{board[1]}
					</div>
					<div
						id="2"
						className="square"
						onClick={e => handleClick(e)}>
						{board[2]}
					</div>
				</div>
				<div className="row rowBoard">
					<div
						id="3"
						className="square"
						onClick={e => handleClick(e)}>
						{board[3]}
					</div>
					<div
						id="4"
						className="square"
						onClick={e => handleClick(e)}>
						{board[4]}
					</div>
					<div
						id="5"
						className="square"
						onClick={e => handleClick(e)}>
						{board[5]}
					</div>
				</div>
				<div className="row rowBoard">
					<div
						id="6"
						className="square"
						onClick={e => handleClick(e)}>
						{board[6]}
					</div>
					<div
						id="7"
						className="square"
						onClick={e => handleClick(e)}>
						{board[7]}
					</div>
					<div
						id="8"
						className="square"
						onClick={e => handleClick(e)}>
						{board[8]}
					</div>
				</div>
				<button onClick={e => reset(e)}>RESET</button>
			</div>
		</>
	);
};
