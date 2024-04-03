import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import NumberOfEvents from '../components/NumberOfEvents';
describe('<NumberOfEvents/> component', () => {
	let NumberOfEventsComponent;
	beforeEach(() => {
		NumberOfEventsComponent = render(<NumberOfEvents />);
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
