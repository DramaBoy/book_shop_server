//引入用户业务逻辑
let UserService = require("../Service/UserService");
/***
 * 买家书本订购页面的控制器，各个需求的业务逻辑*************
 */
module.exports.showBook = function(req, res) {
    var booksName = req.body.booksName;
    //创建对象
    let userService = new UserService();
        userService.orderProducts(booksName, function(ob) {
        // console.log(JSON.stringify(ob))
        res.end(JSON.stringify(ob));
    });
};