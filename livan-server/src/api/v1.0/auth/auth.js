const validator = require('validator');

exports.resisterLocal = async(ctx) => {
    const { body } = ctx.request;

    const { nickname, social, email, password } = body;

    if(!(nickname && email && password)){
        ctx.status = 400;
        ctx.body = 'valid data argument';
        return;
    }

    const result1 =validator.isLength(nickname, {min : 3, max : 15});
    const result2 = validator.matches(nickname, /^[a-zA-Zㄱ-힣]/);
    const result3 = validator.isEmail(email);
    const result4 = validator.isLength(password, {min : 8, max : 30});

    if(!(result1 & result2 & result3 & result4)){
        ctx.status = 400;
        ctx.body = 'valid data type';
        return;
    }

    //email duplicate confirm

    if(false){
        ctx.status = 500;
        ctx.body = 'db execute error';
        return;
    }
    if(false){
       ctx.status = 409;
       ctx.body = 'already resister userinfo';
       return; 
    }

    //user resister

    if(false){
        ctx.status = 500;
        ctx.body = 'db execute error for user resister';
        return;
    }

    ctx.body = {
        nickname
    };
};