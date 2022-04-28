const md5 = require('md5');
const hashPassword = md5('--adm2@21!!--');
console.log(hashPassword)

const checkPassword = (password, dbPassword) => {
    const hashPassword = md5(password);

    if(hashPassword !== dbPassword) return false;

    return true;
}

module.exports = checkPassword;