import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

export const Modaltemplate = () => {
	const [show, setShow] = useState(false);
	const [currentFirstPlayValue, setValueFirst] = useState("");
	const [currentSecondPlayValue, setValueSecond] = useState("");

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
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
							onChange={e => setValueFirst(e.target.value)}
							value={currentFirstPlayValue}
							placeholder="Please type your name"
						/>
						<i className="fas fa-times fa-4x d-flex justify-content-center" />
					</div>
					<div className="col-5 d-flex flex-column">
						<input
							type="text"
							onChange={e => setValueSecond(e.target.value)}
							value={currentSecondPlayValue}
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
		</>
	);
};
Modaltemplate.propTypes = {
	firstPlayer: PropTypes.string,
	secondPlayer: PropTypes.string,
	onMyClick: PropTypes.any
};
