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

<img src="/screenshots/setup.png" width="400">

When first loading the app, you are taken to this screen.  Here you can select between the customer and worker mode. The customer mode is intended to be used in the front of a restaurant at a kiosk. The worker mode is intended to be used by a restaurant worker to manage the waitlist. For testing purposes, you can go back and forth between customer and worker modes just by going back, but in production, this would be limited so that the customer cannot access the waitlist.

### Customer Mode

<img width="400" src="/screenshots/customer_empty.png">
<img width="400" src="/screenshots/customer_full.png">

On the customer input screen, the customer is able to type in their information to reserve a spot in line at the restaurant. 
<br>

<img width="400" src="/screenshots/customer_notiy.png">

The customer can press the 'help' button in the top right to alert a host that they need help.


<img width="400" src="/screenshots/waitlist_host_notify.png">

As soon as the customer presses the 'help' button, the host sees this alert on their screen.
<br>

<img width="400" src="/screenshots/customer_success.png">

Once the customer presses the 'add to waitlist' button and if all their input is valid, they will recieve a text message confirming their reservation, the app will display their estimated wait time, and they will have the option to cancel their reservation by texting back CANCEL to the number they received the confirmation message from.
<br>

### Worker Mode

<img width="400" src="/screenshots/waitlist.png">

Worker mode displays the current waitlist. It has many available actions for the worker to do.
<br>

<img width="400" src="/screenshots/waitlist_notify_customer.png">

The worker can notify a customer that their table is ready by tapping the 'notify' button twice. This sends the customer a text message letting them know that their table is ready and to return to the restaurant. Once they've been notified, the 'notified' column switches to the number of minutes since the notify message was sent.
<br>

<img width="400" src="/screenshots/waitlist_add_to_waitlist.png">

The worker can press the 'plus' button in the top right to add a customer to the waitlist themselves.
<br>

<img width="400" src="/screenshots/waitlist_set_waittimes.png">

The worker can press the 'clock' icon to open up the wait time interface. Here, they can set the wait times that will be shown in the success screen after a customer is added and in the text message confirmation that the customer receives.
<br>

<img width="400" src="/screenshots/waitlist_sort.png">

The worker can press the 'sort' button to open up the sorting interface. Here, they can sort the wait list by name, party size, and how long a customer has been waiting.
<br>

<img width="400" src="/screenshots/waitlist_log.png">

The worker can press the 'log' button to view a log of all the recent actions that have occured.
<br>

## Built With

* [React Native](www.reactnative.dev) - programming language
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
