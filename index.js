const express = require('express');
const app = express();
const compression = require('compression');

//// MIDDLEWARE ////
app.use(compression());
app.use(express.json());
app.use(express.static('public'));

if (process.env.NODE_ENV != 'production') {
    app.use(
        '/bundle.js',
        require('http-proxy-middleware')({
            target: 'http://localhost:8081/',
        })
    );
} else {
    app.use('/bundle.js', (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

//// ROUTES ////
// app.get('/work/:space', (req, res) => {
//     res.json(req.params.space);
//     console.log(req.params.space);
// });

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080, function () {
    console.log('Now serving...');
});
