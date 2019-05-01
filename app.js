'use strict';

const express = require('express');

const app = express();

const PORT = 3000;

// Middleware functions for the heck of it

// app.use((req, res, next) => {
//     console.log('Hi from first middleware');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Hi from second middleware');
//     res.send('<h1>Hi world!</h1>');
// });

app.use('/users', (req, res, next) => {
    console.log('Inside users request');
    res.send('<h1>Users List</h1>');
});

app.use('/', (req, res, next) => {
    console.log('Inside index request');
    res.send('<h1>Index Page</h1>');
});

app.listen(PORT, () => {
    console.log('Server listening on port ', PORT);
});