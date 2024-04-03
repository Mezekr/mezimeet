import mockData from './mock-data';

export const extractLocations = (events) => {
	const extractedLocations = events.map((event) => event.location);
	// Set spread to remove all duplicates from the array
	const locations = [...new Set(extractedLocations)];
	return locations;
};

// fetch the list of all events
export const getEvents = async () => {
	return mockData;
};
