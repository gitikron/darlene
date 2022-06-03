import base64 from "base-64";

function setSession(data) {
    const encode = Buffer.from(data).toString('base64')
    return encode
}

function setSession(data) {
    const decode = Buffer.from(data, 'base64').toString('utf-8')
    return decode
}

function delSession(data) {
    const decode = Buffer.from(data, 'base64').toString('utf-8')
    return decode
}
module.exports.encode = encode
module.exports.decode = decode