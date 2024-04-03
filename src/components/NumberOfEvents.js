import React, { useState } from 'react';

const NumberOfEvents = () => {
	const [eventsNumber, setEventsNumber] = useState('32');

	const handleInputChange = (event) => {
		const value = event.target.value;
		setEventsNumber(value);
	};

	return (
		<div id="number-of-events">
			<input
				type="text"
				value={eventsNumber}
				placeholder="Number of Event"
				className="numberOfEvents"
				onChange={handleInputChange}
			/>
			;
		</div>
	);
};
export default NumberOfEvents;
