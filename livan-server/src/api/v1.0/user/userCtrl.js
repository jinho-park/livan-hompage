const user = require('db/user');

exports.getUserInfo = async (ctx) => {
    var { body } = ctx.request;
    console.log(body);
    ctx.body = 'get user';
};

exports.userLogin = async(ctx) => {
    var { body } = ctx.request;
    console.log(body);

    const result = user.testquery(body);

    ctx.body = result;
}