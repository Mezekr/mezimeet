import { render } from '@testing-library/react';
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
});
