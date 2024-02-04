const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const userModel = require('../../models/userregmodel');

app.post('/register', (req, res) => {
    const { name, email, phone ,  password } = req.body;
    bcrypt.hash(password, 10)
        .then(hash => {
            userModel.create({ name, email, phone , password: hash })
                .then(user => res.json("Success"))
                .catch(err => res.json({ err }))
        }).catch(err => res.json({ err }))
});

module.exports = app;
