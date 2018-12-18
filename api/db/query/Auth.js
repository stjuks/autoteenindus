module.exports = {
    login: (email, password) => ({
        text: `
            SELECT f_on_juhataja($1, $2);
        `, values: [email, password]
    })
};