import React, { useState } from 'react';

const Event = ({ event }) => {
	const [showDetails, setShowDetails] = useState(false);
	return (
		<li className="event" key={event.id}>
			<h2>{event.summary}</h2>
			<p>{new Date(event.created).toUTCString()}</p>
			<p>{event.location}</p>
			<button
				className="showDetailsBtn"
				onClick={() => setShowDetails(!showDetails)}
			>
				{showDetails ? 'Hide Details' : 'Show Details'}
			</button>

			{/* details section */}
			{showDetails ? (
				<div className="details">
					<h3>Event Details</h3>
					<p> {event.kind}</p>
					<p> {event.description}</p>
					<p> {event.status}</p>
				</div>
			) : null}
		</li>
	);
};

export default Event;
