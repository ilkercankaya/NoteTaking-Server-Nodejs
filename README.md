# Note-Taking Android App Server
This is a simple server node.js app that servers HTTP GET request (through express.js) to send notes to the [Note-Taking Android App.](https://github.com/ilkercankaya/NoteTaking-App-Android)

# How It Works
Just Make a Simple HTTP Get Reqeust [Here!](https://reminder-app-server-node.herokuapp.com/getReminders)

# App Features
* Returns a JSON String that has the key `Reminders` as an list of Reminders array.
* HTTP GET request is available for anyone making a call for the server.

# Project Details
Technologies involved:
* Node.js (including `express.js`)
* Heroku - Hosted on.

# Files
* `app.js`: Main app.
* `Procfile`: Configuration file for Heroku.

# Demo
[Make A Request By Clicking Here!](https://reminder-app-server-node.herokuapp.com/getReminders)
