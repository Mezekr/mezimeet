import React, { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
	const [eventsNumber, setEventsNumber] = useState('32');

	const handleInputChange = (event) => {
		const value = event.target.value;

		let errMsg = '';
		if (isNaN(value) || value < 0) {
			errMsg = 'Number of events must be greater than zero.';
		} else {
			errMsg = '';
			setEventsNumber(value);
			setCurrentNOE(value);
		}
		setErrorAlert(errMsg);
	};

	return (
		<div id="number-of-events">
			<label htmlFor="events-input">Number of Events </label>
			<input
				id="events-input"
				type="text"
				value={eventsNumber}
				placeholder="Number of Event"
				className="numberOfEvents"
				onChange={handleInputChange}
			/>
		</div>
	);
};
export default NumberOfEvents;
