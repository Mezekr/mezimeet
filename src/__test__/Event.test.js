import { render } from '@testing-library/react';
import React from 'react';
import { getEvents } from '../api';
import Event from '../components/Event';

describe('<Event/>', () => {
	let EventComponent;
	beforeEach(() => {
		EventComponent = render('< Event />');
	});

	test('render event title', async () => {
		const allEvents = await getEvents();
		EventComponent.rerender(<Event event={allEvents[0]} />);
		expect(
			EventComponent.queryByText(allEvents[0].summary)
		).toBeInTheDocument();
	});
	test('render event start time', async () => {
		const allEvents = await getEvents();
		EventComponent.rerender(<Event event={allEvents[0]} />);
		expect(
			EventComponent.queryByText(allEvents[0].created)
		).toBeInTheDocument();
	});
	test('render event location', async () => {
		const allEvents = await getEvents();
		EventComponent.rerender(<Event event={allEvents[0]} />);
		expect(
			EventComponent.queryByText(allEvents[0].location)
		).toBeInTheDocument();
	});
	test('render event details button with title (show details)', async () => {
		const allEvents = await getEvents();
		EventComponent.rerender(<Event event={allEvents[0]} />);
		expect(EventComponent.queryByText(/show details/i)).toBeInTheDocument();
	});
});
