const md5 = require('md5');

const checkPassword = (password) => {
    const hashPassword = md5(password);

    if(password !== hashPassword) return false;

    return true;
}

module.exports = checkPassword;