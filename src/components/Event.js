import React from 'react';

const Event = ({ event }) => {
	return (
		<li>
			<h2>{event.summary}</h2>
		</li>
	);
};

export default Event;
