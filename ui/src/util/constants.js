export const tableRows = {
    allServices: {
        headings: [
            'Teenuse kood', 
            'Teenuse nimetus', 
            'Hind (EUR)', 
            'Teenuse kirjeldus', 
            'Registreerimisaeg', 
            'Seisund', 
            'Registreerija'
        ], 
        sizes: ['10%', '10%', '10%', '30%', '15%', '10%', '15%']
    },
    summary: {
        headings: [
            'Seisundi kood', 
            'Seisundi nimetus', 
            'Teenuste koguarv' 
        ], 
        sizes: ['33%', '33%', '33%']
    },
    heldOrNonActiveServices: {
        headings: [
            'Teenuse kood',
            'Hind (EUR)',
            'Teenuse kirjeldus',
            'Teenuse nimetus',
            'Raskusaste',
            'Seisund'
        ],
        sizes: ['0%', '10%', '10%', '40%', '20%', '10%', '10%'],
        ignoreValues: ['xmin']
    },
    activeOrNonActiveServices: {
        headings: [
            'Teenuse kood',
            'Seisund',
            'Teenuse nimetus',
            'Teenuse kirjeldus',
            'Hind (EUR)',
            'Registreerimisaeg',
            'Registreerija',
            ''
        ],
        sizes: ['0%', '10%', '10%', '10%', '30%', '10%', '15%', '15%'],
        ignoreValues: ['xmin']
    }
}