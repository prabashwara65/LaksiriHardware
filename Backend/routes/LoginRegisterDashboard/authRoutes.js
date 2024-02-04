const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../../models/userregmodel');

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    userModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({ email: user.email,role: user.role , name: user.name , id:user._id}, 
                            "jwt-secret-key", { expiresIn: '1d' })

                        res.cookie('token', token)
                        return res.json({ Status: "Success", role: user.role , name: user.name  })

                    } else {
                        return res.json("password is incorredt")
                    }

                })

            } else {

                return res.json("No record existing")
            }
        })
})





module.exports = router;
