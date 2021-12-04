const { default: axios } = require('axios');
var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    var restrauants = req.query.restrauants;

    var songs = [];

    axios.get(`}`)
        .then((response) => {
            var users = response.data;

            var x = person.results;

            if (x) {
                for (var i = 0; i < x.length; i++) {
                    if (x[i].restrauants) {
                        restrauants.push(x[i].restrauants);
                    }
                }
            }

            //console.log(results);

            res.render('pages/index', {
                users: users,
                results: results
            });
        });

});