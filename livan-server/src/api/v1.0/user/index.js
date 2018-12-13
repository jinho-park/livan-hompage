const Router = require('koa-router');

const user = new Router();
const userInfo = require('./userctrl');

user.post('/login', userInfo.userLogin);

module.exports = user;
