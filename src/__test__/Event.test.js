import { render } from '@testing-library/react';
import React from 'react';
import { getEvents } from '../api';
import Event from '../components/Event';

describe('<Event/>', () => {
	let EventComponent;
	let allEvents;

	beforeAll(async () => {
		allEvents = await getEvents();
	});
	beforeEach(() => {
		EventComponent = render(<Event event={allEvents[0]} />);
	});

	test('render event title', () => {
		expect(
			EventComponent.queryByText(allEvents[0].summary)
		).toBeInTheDocument();
	});
	test('render event start time', () => {
		expect(
			EventComponent.queryByText(allEvents[0].created)
		).toBeInTheDocument();
	});
	test('render event location', () => {
		expect(
			EventComponent.queryByText(allEvents[0].location)
		).toBeInTheDocument();
	});
	test('render event details button with title (show details)', () => {
		expect(EventComponent.queryByText(/show details/i)).toBeInTheDocument();
	});
});
