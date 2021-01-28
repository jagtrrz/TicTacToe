import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "/workspace/react-hello/src/styles/border.scss";
import { propTypes } from "react-bootstrap/esm/Image";
import { Square } from "./square.jsx";

export const Board = () => {
	const [symbol, setSymbol] = useState("");
	const [plays, setPlays] = useState(true);

	useEffect(() => (plays ? setSymbol("X") : setSymbol("O")), [plays]);

	return <Square symbol={symbol} />;
};

Board.propTypes = {
	symbol: PropTypes.string
};
