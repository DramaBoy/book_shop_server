//引入用户业务逻辑
let UserService = require("../Service/UserService");
/***
 * 登陆页面的控制器，各个需求的业务逻辑*************
 */
module.exports.show = function(req, res) {
    var kind = req.body.kind;
    //创建对象
    let userService = new UserService();
    
    userService.showProducts(kind, function(ob) {
        // console.log(JSON.stringify(ob))
        res.end(JSON.stringify(ob));
    });
};