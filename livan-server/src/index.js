require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const api = require('./api');
const app = new Koa();

const {
    PORT : port
} = process.env;

const router = new Router();

app.use(bodyParser());

router.use('/api', api.routes());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () =>{
    console.log(`server listening port : ${port}`);
});