let crypto = require("crypto");
module.exports = function(msg){
    let md5 = crypto.createHash('md5');
    let result = md5.update(msg).digest('base64');
    return result;
}