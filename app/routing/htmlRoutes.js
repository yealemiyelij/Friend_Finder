//This htmlRoutes.js file creates a path for the two html files for get and use functions
var path = require('path');

module.exports = function (app) {
    //a get function to create path to the survey.html as survey route
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    //if no matching route, default to home
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
}