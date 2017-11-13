const Router = require('koa-router');

const user = new Router();
const userInfo = require('./userCtrl');

user.get('/me/metainfo', userInfo.getUserInfo);

module.exports = user;
