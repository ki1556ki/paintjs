var express = require('express');
var app = express();
var router = express.Router();

app.set('views', __dirname + '/views');
app.use(express.static('./'));

router.get('/', function(req, res, next) {
    res.render('index.html');
});


app.listen(3000);