import React from "react";
import PropTypes from "prop-types";

//create your first component
export const SimpleCounter = props => {
	return (
		<div className="timer">
			<div className="clock">
				<i className="far fa-hourglass"></i>
			</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.hour % 10}</div>
			<div className="two">{props.minutes % 10}</div>
			<div className="one">{props.seconds % 10}</div>
		</div>
	);
};

SimpleCounter.propTypes = {
	digitFour: PropTypes.number,
	hour: PropTypes.number,
	minutes: PropTypes.number,
	seconds: PropTypes.number
};
