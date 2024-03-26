# Project Description

-   An app which enables users to view and explore events, view event details, and visualize cities events as charts.
-   The application implements serverless, progressive web application (PWA) concepts with React using a test-driven development (TDD) technique.
-   The application uses the Google Calendar API to retrieve upcoming events.

## Features and user stories

-   Feature 1: Filter Events by City.

    As a user,
    I should be able to filter events by city
    So that I can see a list of events taking place in that city.

-   Feature 2: Show/Hide Event Details

    As a user,
    I should be able to show or hide event details,
    so that I can see more or less information about an event.

-   Feature 3: Specify Number of Events

    As a user,
    I should be able to specify the number of events.
    So that I can limit or extend the number of events I want to see or attend.

-   Feature 4: Use the App When Offline

    As a user,
    I should be able to use the app when offline.
    So that I can search and track events without an Internet connection.

-   Feature 5: Add an App Shortcut to the Home Screen

    As a user,
    I should be able to add the app shortcut to the home screen.
    So that I can find it and open it quickly in the future.

-   Feature 6: Display Charts Visualizing Event Details

    As a user,
    I should be able to view charts that visualize event details.
    So that I can summarize and infer events details/data more quickly.

## Scenarios for each of the features

1. Filter Events by City.

-   Scenario 1: When user hasn’t searched for a specific city, show upcoming events from all cities.

        Given user hasn’t searched for any city;
        When the user opens the app;
        Then the user should see a list of upcoming events.

-   Scenario 2: User should see a list of suggestions when they search for a city.
-              Given the main page is open;
               When user starts typing in the city textbox;
               Then the user should receive a list of cities (suggestions) that match what they’ve typed.

-   Scenario 3: User can select a city from the suggested list.

        Given user was typing “Berlin” in the city textbox AND the list of
        suggested cities is showing;
        When the user selects a city (e.g., “Berlin, Germany”) from the list;
        Then their city should be changed to that city (i.e., “Berlin, Germany”)
        AND the user should receive a list of upcoming events in that city.

1. Feature 2: Show/Hide Event Details

-   Scenario 1: An event element is collapsed by default.

        Given the user has not selected or filtered any events;
        When the user opens the app;
        Then the event element should be collapsed by default.

-   Scenario 2: User can expand an event to see details.

        Given the app is loaded with events data;
        When the user opens the events list and selects an event;
        Then, the selected event should be expanded and its details will be displayed.

*   Scenario 3: User can collapse an event to hide details.

        Given an event is expanded and its details displayed;
        When the user selects the expanded event;
        Then the event should collapse and hide the additional details.

1. Feature 3: Specify Number of Events

-   Scenario 1: When user hasn’t specified a number, 32 events are shown by default.

           Given user has opened the app and has not set a number of events to display;
           When the events list is opened;
           Then 32 events should be displayed by default.

-   Scenario 2: User can change the number of events displayed.

           Given that the user has not specified a number of events to be displayed;
           When the user opens the app and wants to set a specific number of events to be
           displayed;
           The number of events should match the number set by the user.

1. Feature 4: Use the App When Offline

-   Scenario 1: Show cached data when there’s no internet connection.

        Given the application previously loaded the event data while it was open with an
        Internet connection and the device is offline;
        when the user opens the app with out internet connection;
        Then cached event data should be displayed.

-   Scenario 2: Show error when user changes search settings (city, number of events).

        Given the app has cached event data and the device is offline;
        When the user tries to changes search settings (city, number of events);
        Then an error should be displayed.

1. Feature 5: Add an App Shortcut to the Home Screen

-   Scenario 1: User can install the meet app as a shortcut on their device home screen.

        Given the user opens the app;
        When the user selects the "Add to Home Screen" option;
        Then a shortcut should be added to the home screen.

1. Feature 6: Display Charts Visualizing Event Details

-   Scenario 1: Show a chart with the number of upcoming events in each city.

        Given the events data for the cities has loaded;
        When the user opens the app;
        Then a chart should be displayed with the number of upcoming events in each city.

## Serverless functions implementation

The App uses Google Calendar API which isprotected APIs. To access it, you’ll need a valid OAuth2 token.

-   Requires users to sign up for Open Authorisation (OAuth) from Google
-   An AWS Lambda serverless function authorization service will authenticate users and provide OAuth2 tokens.
-   Users with a valid token are authorised to access the app.
    The Google Calendar API you will use in your Meet app is also one of these protected APIs. To access it, you’ll need a valid OAuth2 token.
    In order for users to be authorized to have access the Google Calendar API, user is given the option to sign up the open authorization(OAuth).
