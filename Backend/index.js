// Import express
let express = require('express')
// Initialize the app
let app = express();
// Setup server port
var port = process.env.PORT || 8080;
// Send message for default URL
app.get('/', (req, res) => res.send('Welcome to Learn2sign api'));
// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running Learn2Sign api on port " + port);
});