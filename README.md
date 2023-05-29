# Chronometer ⌛
Start, pause, and track time effortlessly. Measure milliseconds, seconds, and minutes precisely. Perfect for accurate timekeeping!

* [Demo](https://chronometer.esleiter.com/): https://chronometer.esleiter.com

## Table of Contents
1. [General Info](#general-info)
2. [Screenshot](#screenshot)
***

## General Info

The code you provided is a simple JavaScript implementation of a chronometer (or stopwatch) functionality. It uses HTML elements to display the elapsed time in milliseconds, seconds, and minutes. Here's a breakdown of the code:

The variables ms, s, and m are initialized to 0. These variables will keep track of the milliseconds, seconds, and minutes, respectively.

The variable chronometer is declared to store the interval ID returned by setInterval(). This ID is used to later clear the interval when necessary.

The Start() function is called when you want to start the chronometer. It sets the chronometer variable to the result of setInterval(Increase, 10), which calls the Increase() function every 10 milliseconds. This function updates the time display and increments the milliseconds.

The Pause() function is called to pause the chronometer. It clears the interval using clearInterval(chronometer). The "Play" button's disabled state is updated to allow resuming.

The Stop() function is called to stop the chronometer and reset the time. It clears the interval, resets the ms, s, and m variables to 0, and enables the "Play" button.

The Increase() function is the main logic for updating the time display. It increments the ms variable by 1 and calculates the corresponding milliseconds to display using mseg = Math.trunc(((ms / 100) - s) * 100). It then updates the HTML elements with the new values for milliseconds, seconds, and minutes.

If the seconds (s) reach 60, it resets ms to 0 and increments the minutes (m) by 1.
Finally, it updates the corresponding HTML elements for seconds and minutes.

## Screenshot
![Image text](https://raw.githubusercontent.com/EsleiterChronometer/codespace-esleiter-studious-meme-xpxwg44g4q6f64j7/screenShot/screenShot.png)

