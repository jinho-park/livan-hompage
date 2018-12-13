const Router = require('koa-router');

const auth = new Router();
const authInfo = require('./auth');

auth.post('/auth/local', authInfo.localLogin);

module.exports = user;