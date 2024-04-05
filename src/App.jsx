import React, { useEffect, useState } from 'react';
import './App.css';
import { extractLocations, getEvents } from './api';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';

const App = () => {
	const [events, setEvents] = useState([]);
	const [currentNOE, setCurrentNOE] = useState(32);
	const [allLocations, setAllLocations] = useState([]);

	const fetchData = async () => {
		const allEvents = await getEvents();
		setEvents(allEvents.slice(0, currentNOE));
		setAllLocations(extractLocations(allEvents));
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="App">
			<CitySearch allLocations={allLocations} />
			<NumberOfEvents />
			<EventList events={events} />
		</div>
	);
};

export default App;
