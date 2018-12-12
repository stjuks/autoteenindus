const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const db = require('../db');
const { Auth } = require('../db/query');
const { verifyToken } = require('../util/authHelper');

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = Auth.login(email, password);

    db.query(sql, (err, result) => {
        if (result.rows.length === 0) {
            return res.status(401).json({ 
                msg: 'Vale e-mail või parool!' 
            });
        }

        const user = result.rows[0];

        jwt.sign(user, process.env.JWT_SECRET, (err, token) => {
            return res.json({ token, ...user });
        })
    })
})

router.get('/verify', verifyToken, (req, res) => {
    res.json(req.user);
})

module.exports = router;