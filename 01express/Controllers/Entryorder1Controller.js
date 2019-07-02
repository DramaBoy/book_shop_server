//引入用户业务逻辑
let UserService = require("../Service/UserService");
/***
 * 登陆页面的控制器，各个需求的业务逻辑*************
 */
module.exports.entryorder1 = function(req, res) {
    var newdata = req.body.newdata;
    var book_id = req.body.alts;
    // var name = req.body.name;
    // var passwd = req.body.passwd;
    //创建对象
    let userService = new UserService();

    userService.entryOrder1(newdata, book_id, function(ob) {
        // console.log(JSON.stringify(ob))
        res.end(JSON.stringify(ob));
    });
};