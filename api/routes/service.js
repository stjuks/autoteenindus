const express = require('express');
const router = express.Router();

const db = require('../db');
const { Service } = require('../db/query');

router.get('/activeOrNonActive', (req, res) => {
    const sql = Service.get.activeOrNonActive;
    
    db.query(sql, (err, result) => {
        if (err) res.status(400).json({ msg: 'Viga teenuste laadimisel!' });
        res.json(result.rows);
    })
});

router.get('/heldOrNonActive', (req, res) => {
    const sql = Service.get.heldOrNonActive;

    db.query(sql, (err, result) => {
        if (err) res.status(400).json({ msg: 'Viga teenuste laadimisel!' });
        res.json(result.rows);
    })
})

router.get('/all', (req, res) => {
    const sql = Service.get.all;

    db.query(sql, (err, result) => {
        if (err) res.status(400).json({ msg: 'Viga teenuste laadimisel!' });
        res.json(result.rows);
    })
})

router.get('/summary', (req, res) => {
    const sql = Service.get.summary;

    db.query(sql, (err, result) => {
        if (err) res.status(400).json({ msg: 'Viga teenuste laadimisel!' });
        res.json(result.rows);
    })
})

router.get('/details', (req, res) => {
    const { serviceId } = req.query;

    const sql = Service.get.details(serviceId);

    db.query(sql, (err, result) => {
        if (err) res.status(400).json({ msg: 'Viga teenuste laadimisel!' });
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

router.post('/end', (req, res) => {
    const { xmin, serviceId } = req.body;

    const sql = Service.end(xmin, serviceId);

    db.query(sql, (err, result) => {
        if (err) res.status(400).json({ msg: 'Viga teenuse lõpetamisel!' });
        res.end();
    })
})

module.exports = router;
