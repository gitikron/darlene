import base64 from "base-64";
const token = '2k-token';

function setSession(data) {
    const encode = base64.encode(data)
    sessionStorage.setItem(token, encode);
    console.log(base64.decode(sessionStorage.getItem(token)))
}

function setSession(data) {
    const decode = Buffer.from(data, 'base64').toString('utf-8')
    return decode
}

function delSession(data) {
    const decode = Buffer.from(data, 'base64').toString('utf-8')
    return decode
}
module.exports.setSession = setSession
module.exports.decode = decode