module.exports.shoppingcar = function(req, res) {
    /***
     * 注册页面的控制器，各个需求的业务逻辑*************
     */
    var id = req.body.id;
    // console.log(id)
    //引入用户业务逻辑
    let UserService = require("../Service/UserService");
    //创建对象
    let userService = new UserService();
    //检查用户是否合法
    userService.Shoppingcar(id, function(ob) {
        res.end(JSON.stringify(ob));
        // console.log(JSON.stringify(ob))
    });
};