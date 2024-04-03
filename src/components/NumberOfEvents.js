import React, { useState } from 'react';

const NumberOfEvents = () => {
	const [eventsNumber, setEventsNumber] = useState('32');
	return (
		<div id="number-of-events">
			<input
				type="text"
				value={eventsNumber}
				placeholder="Number of Event"
				className="numberOfEvents"
			/>
			;
		</div>
	);
};
export default NumberOfEvents;
