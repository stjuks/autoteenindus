module.exports = {
    login: (email, password) => ({
        text: `
            SELECT e_meil, eesnimi || ' ' || perenimi AS nimi FROM public.isik WHERE e_meil = $1 AND parool = $2;
        `, values: [email, password]
    })
};