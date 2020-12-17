const http = require('http');
const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const morgan = require('morgan');
const helmet = require('helmet');
const logger = morgan('tiny');

const app = express();
const server = http.createServer(app);

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const PORT = 3000;
const HOST = '0.0.0.0';

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(session({
    store: new FileStore(),
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: true,
    rolling: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}));

app.use(logger)
// app.use(helmet) // disabling for local development 
app.use(express.urlencoded({ extended: true }));

// MORE CODE GOES HERE

server.listen(PORT, HOST, () => {
    console.log(`Listening at http://${HOST}:${PORT}`);
});