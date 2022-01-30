var bodyParser = require('body-parser');
methodOverride = require('method-override'),
    mongoose = require('mongoose'),
    express = require('express'),

    app = express();
port = process.env.PORT || 3000;



app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
var words = ["apple", "mango"]


// Express body parser
app.use(express.urlencoded({ extended: true }));




app.get('/', function(req, res) {
    res.render('landing', { words: words });
});



app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})