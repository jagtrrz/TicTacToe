import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

export const Modaltemplate = props => {
	const [show, setShow] = useState(false);
	const [firstPlayer, setFirstPlayer] = useState("");
	const [secondPlayer, setSecondPlayer] = useState("");

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<div className="row d.flex">
				<h5 className="col-6 d-flex justify-content-center">
					First Player {firstPlayer}
				</h5>
				<h5 className="col-6 d-flex justify-content-center">
					{secondPlayer} Second Player
				</h5>
			</div>
			<div className="row d-flex justify-content-center">
				<Button variant="primary" onClick={handleShow}>
					LET´S PLAY
				</Button>
				<Modal show={show} onHide={handleClose}>
					<Modal.Header className="d-flex justify-content-center">
						<Modal.Title>TicTacToc</Modal.Title>
					</Modal.Header>
					<div className="row d-flex justify-content-center">
						<div className="col-5 d-flex flex-column">
							<input
								type="text"
								onChange={e => {
									setFirstPlayer(e.target.value);
								}}
								value={firstPlayer}
								placeholder="Please type your name"
							/>
							<i className="fas fa-times fa-4x d-flex justify-content-center" />
						</div>
						<div className="col-5 d-flex flex-column">
							<input
								type="text"
								onChange={e => setSecondPlayer(e.target.value)}
								value={secondPlayer}
								placeholder="Please type your name"
							/>
							<i className="fas fa-circle fa-4x d-flex justify-content-center" />
						</div>
					</div>
					<Modal.Footer className="d-flex justify-content-center">
						<Button variant="success" onClick={handleClose}>
							GO
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</>
	);
};
