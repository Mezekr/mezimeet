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
});
