<img src="https://i.gyazo.com/c5236947602e1ffb8b3acd149237fef2.png">

An app that streamlines and enhances the restaurant table waitlist system

## Getting Started

These instructions will show you how to download a live version of our application for testing/viewing purposes

### Installing

A step by step guide to getting our application onto your iOS/Android device for testing

Step 1: Download expo

We've created our app using expo (open source for react native app creation).
To view our project, please download the expo app on the app/play store.

<img width="550" height="400" src="https://i.gyazo.com/f396b1c447d85df72138ab54eb5bce23.png">


Step 2: Navigate to Profile Screen

Select the profile button in the bottom right after entering the app.

<img width="270" height="480" src="https://i.gyazo.com/5bfc1cc7edc896b65e76c72ec53591cd.png">


Step 3: Login

Login to the Buzzr expo account to view and test our app:

```
Username: buzzr
Password: ask Buzzr team for password
```
<img width="270" height="480" src="https://i.gyazo.com/cd07c4072367bc0e0e12038971649c1b.png">


Step 4: Launching Project

Select the project "buzzr" under published projects to launch the Buzzr app.  The app will open as a seperate application.  The inital screen starts with a selection between customer/worker mode.  If you'd later like to change the mode, simply close the app and launch the project again in expo.

<img width="270" height="480" src="https://i.gyazo.com/304c01c3a08def9ec1b55d40c0f0b6de.png">

## App User Guide

### Setup Screen

![Setup](/screenshots/setup.png)


When first loading the app, you are taken to this screen.  Here you can select between customer and worker mode.  The app is intended to work so it could be used on an iPad at the entrance of a restaurant on customer mode.  Once customer mode is chosen, the app stays on customer mode until the app is restarted.  This is so customers couldn't access the worker mode.

<img width="270" height="480" src="https://i.gyazo.com/85eeace68ed5f46bc799e769151ca135.png">

After selecting customer mode, the customer is able to type in their information to reserve a spot in line at the restaurant.  They will recieve a text message confirming their reservation, their estimated wait time, and an option to cancel their reservation by texting back CANCEL.

<img width="270" height="480" src="https://i.gyazo.com/7f58ea775cfb3b1a5a7351c88b6e3002.png">

This is the waitlist management available in the worker mode.  Here, the host can click notify to notify a customer that their table is ready.  A text message is sent to the number the customer registered with letting them know that they should come see the host to be seated.

Additionally, the host can click the plus botton in the top right to manually add a customer to the waitlist, which will take them to the same screen as the customer would see when adding themself.

<img width="270" height="480" src="https://i.gyazo.com/94271ab26420a8f2b161a33a9db197fa.png">

From the waitlist screen, selecting the clock symbol takes the host to a screen where they can set the wait times depending on the party size.  These can easily be changed during slower or busier times, so when the text is sent to the customer confirming their reservation, they get an accurate expected wait time.

<img width="270" height="480" src="https://i.gyazo.com/679a9ea4a29a0000e1479759ede3f456.png">

From the waitlist screen, the host can select the sort button in the top left to bring up the sorting menu.  This allows the host to select one of various options on how they would like to sort the waitlist.

<img width="270" height="480" src="https://i.gyazo.com/8ae80ba9a890190345a8804c24d6aa39.png">



## Built With

* [expo](https://expo.io/) - App creation workflow
* [Amazon Web Services](https://aws.amazon.com/) - Database, text messaging, interactions with app
* [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html) - Python library used to write AWS Lambda functions


## Authors

* **Blake Fuller** - *Backend Engineer, Solutions Architect* 
* **Cameron Moe** - *Cloud Engineer, Program Manager* 
* **Nate Salima** - *Data Architect* 
* **Trent Cowden** - *Frontend Engineer, UI/UX Desginer* 


## Acknowledgments

* Dr. Arias for weekly meetings and advice
* Josh Gunn for Buzzr branding and logo creation

