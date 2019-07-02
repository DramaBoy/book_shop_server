//引入用户业务逻辑
let UserService = require("../Service/UserService");
/***
 * 登陆页面的控制器，各个需求的业务逻辑*************
 */
module.exports.showImg = function(req, res) {
    var product_id = req.body.product_id;
    //创建对象
    let userService = new UserService();
    
    userService.showImg(product_id, function(ob) {
        // console.log(JSON.stringify(ob))
        res.end(JSON.stringify(ob));
    });
};