//引入用户业务逻辑
let UserService = require("../Service/UserService");
/***
 * 登陆页面的控制器，各个需求的业务逻辑*************
 */
module.exports.seller = function(req, res) {
    //1,解析客户端提交的数据
    var name = req.body.name;
    var passwd = req.body.passwd;
    console.log(8888)

    //创建对象
    let userService = new UserService();
    //检查用户是否合法
    userService.checkSeller(name, passwd, function(ob) {
        res.end(JSON.stringify(ob));
        console.log(77777)
    });
};