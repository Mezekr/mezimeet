import React, { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE }) => {
	const [eventsNumber, setEventsNumber] = useState('32');

	const handleInputChange = (event) => {
		const value = event.target.value;
		setEventsNumber(value);
		setCurrentNOE(value);
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
