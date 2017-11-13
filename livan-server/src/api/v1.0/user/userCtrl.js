const User  = require('db');

exports.getUserInfo = async (ctx) => {
    const { user } = ctx.request;
    if(!user){
        ctx.status = 403;
        return;
    }

    const { _id } = user;

    try{
        //const userData = await User.getUser;//db exec
        if(!user){
            ctx.status = 403;
            return;
        }

        ctx.body={success};
    }catch(e){
        ctx.throw(e, 500);
    }
};