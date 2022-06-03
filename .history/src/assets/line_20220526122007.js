'use strcit';

const axios = require('axios');
// const qs = require('querystring');
const BASE_URL = 'https://notify-api.line.me';
const PATH = '/api/notify';

module.exports = (token, message) => {
    if (!token) {
        throw new Error('token is required');
    }

    return {
        notify: async() => {
            const options = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${token}`,
                },
            };

            try {
                await axios.post(`${BASE_URL}${PATH}`, { 'message': message }, options);
            } catch (error) {
                throw new Error(error);
            }

        },
    };
};