//引入用户业务逻辑
let UserService = require("../Service/UserService");
/***
 * 登陆页面的控制器，各个需求的业务逻辑*************
 */
module.exports.all = function(req, res) {
    var status = req.body.status;
    //创建对象
    let userService = new UserService();

    userService.allProducts(status, function(ob) {
        // console.log(JSON.stringify(ob))
        res.end(JSON.stringify(ob));
    });
};