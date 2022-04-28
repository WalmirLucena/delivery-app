const md5 = require('md5');
const hashPassword = md5('--adm2@21!!--');
console.log(hashPassword)

const checkPassword = (password) => {
    const hashPassword = md5(password);

    if(password !== hashPassword) return false;

    return true;
}

module.exports = checkPassword;