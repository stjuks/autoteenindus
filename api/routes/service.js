const express = require('express');
const router = express.Router();

const db = require('../db');
const { Service } = require('../db/query');

const { verifyToken } = require('../util/authHelper');

router.get('/activeOrNonActive', verifyToken, (req, res) => {
    const sql = Service.get.activeOrNonActive;
    
    db.query(sql, (err, result) => {
        console.log(err);
        if (err) return res.status(400).json({ msg: 'Viga teenuste laadimisel!' });
        res.json(result.rows);
    })
});

router.get('/heldOrNonActive', verifyToken, (req, res) => {
    const sql = Service.get.heldOrNonActive;

    db.query(sql, (err, result) => {
        if (err) return res.status(400).json({ msg: 'Viga teenuste laadimisel!' });
        res.json(result.rows);
    })
})

router.get('/all', verifyToken, (req, res) => {
    const sql = Service.get.all;

    db.query(sql, (err, result) => {
        if (err) return res.status(400).json({ msg: 'Viga teenuste laadimisel!' });
        res.json(result.rows);
    })
})

router.get('/summary', verifyToken, (req, res) => {
    const sql = Service.get.summary;

    db.query(sql, (err, result) => {
        if (err) return res.status(400).json({ msg: 'Viga teenuste laadimisel!' });
        res.json(result.rows);
    })
})

router.get('/details', verifyToken, (req, res) => {
    const { serviceId } = req.query;

    const sql = Service.get.details(serviceId);

    db.query(sql, (err, result) => {
        if (err) return res.status(400).json({ msg: 'Viga teenuste laadimisel!' });
        if (result.rows.length == 0) {
            return res.status(404).json({ msg: 'Sellise koodiga teenust ei leitud!' });
        }

        const parsed = result.rows[0];
        parsed.kategooriad = [];

        result.rows.map(row => {
            parsed.kategooriad.push({
                kategooria_tyyp: row.teenuse_kategooria_tyyp_nimetus,
                kategooria_nimetus: row.teenuse_kategooria_nimetus
            })
        })

        delete parsed.teenuse_kategooria_nimetus;
        delete parsed.teenuse_kategooria_tyyp_nimetus;

        res.json(parsed);
    })
})

router.post('/end', verifyToken, (req, res) => {
    const { xmin, serviceId } = req.body;

    const sql = Service.end(xmin, serviceId);

    db.query(sql, (err, result) => {
        if (err) return res.status(400).json({ msg: 'Viga teenuse lõpetamisel!' });
        res.end();
    })
})

module.exports = router;
