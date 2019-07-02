//引入用户业务逻辑
let UserService = require("../Service/UserService");
exports.shoperRegist = function (req, res) {
    //从前端请求里面获得请求数据
    let seller = req.body.seller;
    let tel = req.body.tel;
    let passwd = req.body.passwd;
    let book_store = req.body.book_store;
    // let arr=[seller, tel, passwd, book_store]
    //创建对象
    let userService = new UserService();
    //查询用户是否合法
    userService.insertShoper(seller, tel, passwd, book_store,function (data) {
        res.end(JSON.stringify(data));
    });
};