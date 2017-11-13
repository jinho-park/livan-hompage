const Router = require('koa-router');

const user = new Router();
const userInfo = require('./userctrl');

user.post('/me/metainfo', userInfo.getUserInfo);
user.post('/resister/local', userInfo.resisterLocal);

module.exports = user;
