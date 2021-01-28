import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "/workspace/react-hello/src/styles/border.scss";
import { propTypes } from "react-bootstrap/esm/Image";

// const squareStyle = {
// 	heigth: "5rem",
// 	width: "5rem",
// 	backgroundColor: "red"
// };

export const Square = props => {
	const [isEmpty, setEmpty] = useState(true);

	// if (isEmpty) {
	// 	// setEmpty(false);
	return <div onClick={() => props.onMyClick()}>{props.symbol}</div>;
	// } else {
	// 	return null;
	// }
};
Square.propTypes = {
	symbol: PropTypes.string,
	onMyClick: PropTypes.any
};
