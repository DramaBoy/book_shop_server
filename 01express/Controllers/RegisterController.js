module.exports.register = function(req, res) {
    /***
     * 注册页面的控制器，各个需求的业务逻辑*************
     */
    //1,解析客户端提交的数据
    var phonenum = req.body.phonenum;
    var username = req.body.username;
    var passwd = req.body.passwd;
    //引入用户业务逻辑
    let UserService = require("../Service/UserService");
    //创建对象
    let userService = new UserService();
    //检查用户是否合法
    userService.insertUser(phonenum, username, passwd, function(ob) {
        res.end(JSON.stringify(ob));
    });
};