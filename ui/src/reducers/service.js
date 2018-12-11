const INITIAL_STATE = {
    summary: [
        {
            seisundi_kood: 5,
            seisundi_nimetus: 'LÕPETATUD',
            teenuste_koguarv: 4
        }
    ],
    allServices: [
        {
            teenus_kood: 1,
            teenus_nimetus: 'Veermiku kontroll',
            hind: parseFloat(Math.round(15 * 100) / 100).toFixed(4),
            teenus_kirjeldus: 'Vaadatakse üle vedrude, amortide, õõtshoobade, rooli otste, stabilisaatori varraste, stabilisaatori pukside ja muude veermiku osade seisukord',
            reg_aeg: '2018-12-08 00:00:00',
            seisund: 'Lõpetatud',
            registreerija: 'Lucile Burgess (lucile.burgess@frolix.net)'
        },
        {
            teenus_kood: 2,
            teenus_nimetus: 'Salongi üldpuhastus',
            hind: parseFloat(Math.round(15 * 100) / 100).toFixed(4),
            teenus_kirjeldus: 'Puhastatakse kogu salong',
            reg_aeg: '2018-12-08 00:00:00',
            seisund: 'Ootel',
            registreerija: 'Lucile Burgess (lucile.burgess@frolix.net)'
        }
    ]
};

export default function reducer(state=INITIAL_STATE, action) {
    
    switch (action.type) {
        default: {
            break;
        }
    }

    return state;
}
