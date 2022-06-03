const request = require('request');
import command from './command';

const url_line_notification = "https://notify-api.line.me/api/notify";

request({
    method: 'POST',
    url: url_line_notification,
    header: {
        'Content-Type': 'multipart/form-data',
    },
    auth: {
        bearer: command.LINE_STOCK
    },
    form: {
        message: 'Test Message!'
    },
}, (err, httpResponse, body) => {
    if (err) {
        console.log(err)
    } else {
        console.log(body)
    }
});