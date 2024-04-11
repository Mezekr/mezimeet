/**
 * @jest-environment jsdom
 */

import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
import App from '../App.jsx';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
	test('When the user hasn’t specified a number, 32 events are shown by default.', ({
		given,
		when,
		then,
	}) => {
		given(
			'user has opened the app and has not set a number of events to display;',
			() => {}
		);
		let AppComponent;
		when('the events list is opened', () => {
			AppComponent = render(<App />);
			const AppDOM = AppComponent.container.firstChild;
			const EventListDOM = AppDOM.querySelector('#event-list');
			expect(EventListDOM).toBeInTheDocument();
		});

		then(/^(\d+) events should be displayed by default$/, async (arg0) => {
			const AppDOM = AppComponent.container.firstChild;
			const EventListDOM = AppDOM.querySelector('#event-list');
			await waitFor(() => {
				const EventListItems =
					within(EventListDOM).queryAllByRole('listitem');
				expect(EventListItems.length).toBe(32);
			});
		});
	});

	test('User can change the number of events displayed.', ({
		given,
		when,
		then,
	}) => {
		let AppComponent;
		given('a user has specified the number of events', async () => {
			const user = userEvent.setup();
			AppComponent = render(<App />);
			const AppDOM = AppComponent.container.firstChild;
			const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
			const numberOfEventsInput =
				within(NumberOfEventsDOM).queryByRole('textbox');
			await user.type(numberOfEventsInput, '{backspace}{backspace}10');
		});

		when('the user views the events section', () => {
			const AppDOM = AppComponent.container.firstChild;
			const EventListDOM = AppDOM.querySelector('#event-list');
			expect(EventListDOM).toBeInTheDocument();
		});

		then(
			'the number of events should match the number set by the user',
			() => {
				const AppDOM = AppComponent.container.firstChild;
				const EventListDOM = AppDOM.querySelector('#event-list');
				const allRenderedEventItems =
					within(EventListDOM).queryAllByRole('listitem');
				expect(allRenderedEventItems.length).toEqual(10);
			}
		);
	});
});
