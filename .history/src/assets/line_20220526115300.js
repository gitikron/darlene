const { default: axios } = require('axios');
const request = require('request');
const LINE_STOCK = '7Tdl91Ev4Fu8gRd5PwLUfVm7ziyLa3fi0XCa8grksaR'

const url_line_notification = "https://notify-api.line.me/api/notify";

module.exports =
    function linesend() {


        axios({
            method: 'POST',
            url: url_line_notification,
            header: { 'Content-Type': 'multipart/form-data', },
            auth: { bearer: LINE_STOCK },
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
    }

linesend()