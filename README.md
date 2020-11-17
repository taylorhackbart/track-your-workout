# TRACK YOUR WORKOUT

I created a workout tracker that allows the user to post resistance or cardio workouts and view their workouts for the week

## Description

For this app, the user will be prompted with a welcome screen that will display the last workout they have done. This will give them the option to continue that workout, or create a new workout. If they choose to continue or create a new workout, they will be prompted to the next page, asking whether the workout will be Cardio or Resistance training. Depending on which type of workout was chosen, they user will be prompted to fill in a list of parameters for said workout. Once the workout has been added, they can go to the stats screen and see their workout progression for the current week. The live site is deployed on Heroku and can be accessed <a href="https://arcane-atoll-81567.herokuapp.com/?id=5fb441383572d60017478a7c">here. </a>

## Usage

Upon opening this app, the homepage will display the last workout that was been logged:

<img src="https://github.com/taylorhackbart/track-your-workout/blob/master/readmeimages/homepage.png">

They will see an option to Continue their workout, or start a new workout:

<img src="https://github.com/taylorhackbart/track-your-workout/blob/master/readmeimages/welcome.png">

Upon pressing either button, the user will be prompted to choose the type of workout:

<img src="https://github.com/taylorhackbart/track-your-workout/blob/master/readmeimages/addexercise.png">

Once the type has been chosen, the will be asked to input the information corresponding to the workout type chosen:

Cardio:
<img src="https://github.com/taylorhackbart/track-your-workout/blob/master/readmeimages/cardio.png">

Resistance: 
<img src="https://github.com/taylorhackbart/track-your-workout/blob/master/readmeimages/resistance.png">

To return to the homepage and view the last workout entered, click the "Fitness Tracker" button in the top left:

<img src="https://github.com/taylorhackbart/track-your-workout/blob/master/readmeimages/addworkout.png">

Or, to view the stats that have been inputted for the week, press the "Dashboard" button:

<img src="https://github.com/taylorhackbart/track-your-workout/blob/master/readmeimages/statsbutton.png">

This will lead you to the stats page:

<img src="https://github.com/taylorhackbart/track-your-workout/blob/master/readmeimages/statspage.png">

## Installation

To run this app, fork the repository and clone it into your own folder. Packages to be installed are "express", "mongoose", and "morgan". "morgan" is an optional package, but it will display the status of each route in the command line as the app is running locally, which I have found useful during the building process. Once these have been installed, run <node server> in the command line, and navigate to localhost/8080 to see the magic!

## Technologies Used

I primarily used Mongoose, Express, and JavaScript to develop this app.

## Credits

My classmates were very helpful during the debugging process!
