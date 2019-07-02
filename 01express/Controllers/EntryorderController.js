//引入用户业务逻辑
let UserService = require("../Service/UserService");
/***
 * 登陆页面的控制器，各个需求的业务逻辑*************
 */
module.exports.entryorder = function(req, res) {
    var alts = req.body.alts;
    //创建对象
    let userService = new UserService();

    userService.entryOrder(alts, function(ob) {
        // console.log(JSON.stringify(ob))
        res.end(JSON.stringify(ob));
    });
};