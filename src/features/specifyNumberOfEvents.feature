Feature: Specify Number of Events

    Scenario: When the user hasn’t specified a number, 32 events are shown by default.
        Given user has opened the app and has not set a number of events to display;
        When  the events list is opened
        Then 32 events should be displayed by default

    Scenario: User can change the number of events displayed.
        Given a user has specified the number of events
        When the user views the events section
        Then the number of events should match the number set by the user