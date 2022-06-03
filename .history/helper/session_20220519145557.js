import base64 from "base-64";
const token = '2k-token';

function setSession(data) {
    const encode = base64.encode(data)
    sessionStorage.setItem(token, encode);
    console.log(base64.decode(sessionStorage.getItem(token)))
}

function getSession(data) {

}

function delSession(data) {

}
module.exports.setSession = setSession
module.exports.getSession = getSession
module.exports.delSession = delSession