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
        if (!result.rows[0].f_on_juhataja || err) {
            return res.status(401).json({ 
                msg: 'Vale kasutajanimi või parool!' 
            });
        }

        jwt.sign({ iat: Date.now() }, process.env.JWT_SECRET, (err, token) => {
            return res.json({ token });
        })
    })
})

router.get('/verify', verifyToken, (req, res) => {
    res.json(req.user);
})

module.exports = router;