import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev'

var port = 3000;
var app = express();
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
    // Hard code for simplicity
    res.json([
        {"id":1,"firstName":"Carl","lastName":"Jones","email":"carl.jones2134@gmail.com"},
        {"id":2,"firstName":"Sid","lastName":"Finster","email":"sid.finster@aol.com"},
        {"id":3,"firstName":"Matrim","lastName":"Cauthon","email":"matt.c@hotmail.com"}
    ]);
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);   // eslint-disable-line no-console
    } else {
        open('http://localhost:' + port);
    }
});
