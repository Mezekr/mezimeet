/**
 * @jest-environment jsdom
 */
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App.jsx';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents/> component', () => {
	let NumberOfEventsComponent;
	beforeEach(() => {
		NumberOfEventsComponent = render(
			<NumberOfEvents setCurrentNOE={() => {}} />
		);
	});

	test('has an element with "textbox" role', () => {
		expect(
			NumberOfEventsComponent.queryByRole('textbox')
		).toBeInTheDocument();
	});

	test('By default, 32 events are shown', () => {
		expect(NumberOfEventsComponent.queryByRole('textbox')).toHaveValue(
			'32'
		);
	});

	test('value of number of events updates correctly when user types in textbox', async () => {
		const numberOfEvents = NumberOfEventsComponent.queryByRole('textbox');
		const user = userEvent.setup();
		await user.type(numberOfEvents, '{backspace}{backspace}10');
		expect(numberOfEvents).toHaveValue('10');
	});
});

describe('<NumberOfEvents/> integration', () => {
	test('number of events updated correctly to user specified number of events', async () => {
		const user = userEvent.setup();
		const AppComponent = render(<App />);
		const AppDOM = AppComponent.container.firstChild;

		const NumberOfEventsComponent =
			AppDOM.querySelector('#number-of-events');
		const numberOfEventsTextBox = within(
			NumberOfEventsComponent
		).queryByRole('textbox');
		await user.type(numberOfEventsTextBox, '{backspace}{backspace}10');
		expect(numberOfEventsTextBox).toHaveValue('10');
		const EventListDOM = AppDOM.querySelector('#event-list');
		await waitFor(() => {
			const EventListItems =
				within(EventListDOM).queryAllByRole('listitem');
			expect(EventListItems.length).toBe(10);
		});
	});
});
