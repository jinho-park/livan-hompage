require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();

const {
    PORT : port
} = process.env;

const router = new Router();

app.use(router.route());
app.use(router.allowedMethods());

app.listen(port, () =>{
    console.log('server listening ${port} port');
});