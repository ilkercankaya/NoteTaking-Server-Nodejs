var express = require('express');
var app = express();

// For Heroku
var PORT = process.env.PORT || 5000;

app.get('/getReminders', function (req, res) {

    let reminders = `
    {"Reminders":[
        {"name": "Statistics Mastery", "note":"Beginning date of true knowledge","calendar":"06/05/2019","priority":3,"enabled":1},
        {"name": "Room meeting", "note":"Meet Mr. Mbape before things get worse","calendar":"07/05/2019","priority":4,"enabled":1},
        {"name": "Project presentation", "note": "4th sprint user-inteface design", "calendar":"09/05/2019", "priority":4,"enabled":1},
        {"name": "Judiy's Funeral", "note": "buy flowers", "calendar": "31/03/2019", "priority":3, "enabled":0},
        {"name": "Avengers release","note": "Invite roommates to watch it", "calendar": "02/04/2019","priority":2, "enabled":1},
        {"name": "Job application", "note": "Ware the black suit", "calendar":"05/05/2019", "priority":4, "enabled":0},
        {"name": "Google's interview", "note": "Focus on software engineering nothing else matters", "calendar":"06/04/2019", "priority":1, "enabled":1},
        {"name": "Summer school starts", "note": "Nothing special", "calendar":"06/04/2019", "priority":3, "enabled":1},
        {"name": "Make plane reservation", "note": "Most preferably Turkish Airlines", "calendar":"29/03/2019", "priority":3, "enabled":1},
        {"name": "See the dentist", "note": "Midterm at LO65 from 9am", "calendar":"06/05/2019", "priority":2, "enabled":1},
        {"name": "Call Dad", "note": "Remind him of fees", "calendar":"06/04/2019", "priority":3, "enabled":1},
        {"name": "Shopping", "note": "With loved ones", "calendar":"06/05/2019", "priority":1, "enabled":0},
        {"name": "fundraiser", "note": "Give whatever you have", "calendar":"01/05/2019", "priority":4, "enabled":1},
        {"name": "Date with Juliet", "note": "Hilton hotel, Mecidiyekoy", "calendar":"06/05/2019", "priority":1,"enabled":0}
          ]
    }
    `;

   res.send(reminders);
})

var server = app.listen(PORT, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})