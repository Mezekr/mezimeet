import React, { useEffect, useState } from 'react';
import './App.css';
import { extractLocations, getEvents } from './api';
import { ErrorAlert, InfoAlert, WarningAlert } from './components/Alert';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';

const App = () => {
	const [events, setEvents] = useState([]);
	const [currentNOE, setCurrentNOE] = useState(32);
	const [allLocations, setAllLocations] = useState([]);
	const [currentCity, setCurrentCity] = useState('See all cities');
	const [infoAlert, setInfoAlert] = useState('');
	const [errorAlert, setErrorAlert] = useState('');
	const [warningAlert, setWarningAlert] = useState('');

	const fetchData = async () => {
		const allEvents = await getEvents();
		const filteredEvents =
			currentCity === 'See all cities'
				? allEvents
				: allEvents.filter((event) => event.location === currentCity);

		setEvents(filteredEvents.slice(0, currentNOE));
		setAllLocations(extractLocations(allEvents));
	};

	useEffect(() => {
		setWarningAlert(
			!navigator.onLine
				? "You're offline. The list has been loaded from the cache, so it's not up to date."
				: ''
		);
		fetchData();
	}, [currentCity, currentNOE]);

	return (
		<div className="App">
			<h1>MeziMeet App</h1>
			<div className="alerts-container">
				{infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
				{errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
				{warningAlert.length ? (
					<WarningAlert text={warningAlert} />
				) : null}
			</div>
			<CitySearch
				allLocations={allLocations}
				setCurrentCity={setCurrentCity}
				setInfoAlert={setInfoAlert}
			/>
			<NumberOfEvents
				setCurrentNOE={setCurrentNOE}
				setErrorAlert={setErrorAlert}
			/>
			<EventList events={events} />
		</div>
	);
};

export default App;
