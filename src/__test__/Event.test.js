/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
		const date = new Date(allEvents[0].created).toUTCString();
		expect(EventComponent.queryByText(date)).toBeInTheDocument();
	});

	test('render event location', () => {
		expect(
			EventComponent.queryByText(allEvents[0].location)
		).toBeInTheDocument();
	});

	test('render event details button with title (show details)', () => {
		expect(EventComponent.queryByText(/show details/i)).toBeInTheDocument();
	});

	test('by default, the Events Details section should be hidden', () => {
		expect(
			EventComponent.container.querySelector('.details')
		).not.toBeInTheDocument();
	});

	test('shows details details section when the user clicks the "Show details" button', async () => {
		const user = userEvent.setup();
		const detailsBtn = EventComponent.queryByRole('button');
		await user.click(detailsBtn, 'Show Details');
		const details = EventComponent.container.querySelector('.details');
		expect(details).toBeInTheDocument();
	});

	test('hide details section when user clicks "hide details" button', async () => {
		const user = userEvent.setup();
		const hideBtn = EventComponent.queryByRole('button');
		const details = EventComponent.container.querySelector('.details');
		await user.click(hideBtn, /Hide Details/i);
		expect(details).not.toBeInTheDocument();
	});
});
