# Hourly Planner

## Description

This project adds functionality to a daily planner that allows the user to add tasks to the hours 9AM-5PM,
which will be saved to local storage to allow users to return to and update their tasks throughout the day.
The functionality added included dynamically adding styling to the hours of the day to color-code them for 
the past present and future, as well as adding logic to the save button to save the user's input to local
storage. 

The biggest issue I had with this project was with the event listeners for the save buttons. Because they were
all under separate divs, I could not just query select to batch get them all because it would only select one
of the buttons. I could only think of the options of iterating through the hours and adding a listener for every
individual button, or selecting the entire container and only having the click event do something if it were a 
save button. I am still unsure if this is the most efficient way to delegate the events for the separate buttons.

## Installation

N/A

## Usage

Opening the GitHub Pages link should have the local storage functionality, but for a reason I do not understand it
will not implement any of the styling. Locally opening the index.html page will show the fully working and styled app,
but for the basic functionality - minus the color coding - simply opening the GitHub Pages link will allow the user to
save their entries into local storage.
