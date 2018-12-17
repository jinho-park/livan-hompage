const user = require('db/user');
const validator = require('validator');
const crypto = require('crypto');
const jwt = require('lib/jwt');

const { PASSWORD_HASH_KEY : secret } = process.env;

function hash(password){
    return crypto.createHmac('sha256', secret).update(password).digest('hex');
}

exports.getUserInfo = (ctx) => {
    var { body } = ctx.request;
    ctx.body = 'get user';
};

exports.userLogin = async (ctx) => {
    const { body } = ctx.request;
    const { email, password } = body;

    const emailValidate = validator.isEmail(email);

    if(!emailValidate){
        ctx.body = {
            email : '잘못된 이메일 형식입니다'
        };
        return;
    }

    const result = await user.userLogin(body);

    if(result[0] === undefined){
        ctx.body = {
            email : '정보를 찾을 수 없습니다'
        };
        return;
    }
    const passwordHash = hash(password);
    console.log(passwordHash)

    if(passwordHash !== result[0].password){
        ctx.body = {
            email : '비밀번호가 일치하지 않습니다'
        };
        return;
    }

    ctx.body = result[0];
}