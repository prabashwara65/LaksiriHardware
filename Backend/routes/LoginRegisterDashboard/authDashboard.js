const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const userModel = require('../../models/userregmodel');


//create middleware for varify user
const varifyUser = (req, res, next) => {
const token = req.cookies.token;

    if (!token) {
        return res.json("token is missing");

    } else {

        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) {
                return res.json("error with token")
            } else {
                if(decoded.role === "admin"){

                    next();
                }else{
                    return res.json("not admin")
                    
                }
            }
        })
    }
}


//router Dashboard
app.get('/', varifyUser, (req, res) => {
    res.json('Success')

})

module.exports = app;



