module.exports = {
    get: {
        activeOrNonActive: {
            text: `
                SELECT * FROM public.aktiivsed_ja_mitteaktiivsed_teenused;
            `
        },
        all: {
            text: `
                SELECT * FROM public.koik_teenused;
            `
        },
        heldOrNonActive: {
            text: `
                SELECT * FROM public.ootel_ja_mitteaktiivsed_teenused;
            `
        },
        summary: {
            text: `
                SELECT * FROM public.teenuste_kokkuvote;
            `
        },
        details: serviceId => ({
            text: `
                SELECT * FROM public.teenused_detailidega WHERE teenus_kood = $1;
            `, values: [serviceId]
        })
    },
    end: (xmin, serviceId) => ({
        text: `
            SELECT public.f_lopeta_teenus($1::text, $2::smallint);
        `, values: [xmin, serviceId]
    })
}
