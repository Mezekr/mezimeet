import React, { useEffect, useState } from 'react';
import './App.css';
import { getEvents } from './api';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';

const App = () => {
	const [events, setEvents] = useState([]);
	const [currentNOE, setCurrentNOE] = useState(32);

	const fetchData = async () => {
		const allEvents = await getEvents();
		setEvents(allEvents.slice(0, currentNOE));
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="App">
			<CitySearch />
			<NumberOfEvents />
			<EventList events={events} />
		</div>
	);
};

export default App;
