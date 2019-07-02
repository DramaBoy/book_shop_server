module.exports.add = function(req, res) {
    /***
     * 注册页面的控制器，各个需求的业务逻辑*************
     */
    // book_name: this.name,
    //       book_author: this.author,
    //       book_store:this.store,
    //       price: this.price,
    //       sell_price:this.sellprice,
    //       number:this.inventory,
    //       publisher:this.publicone,
    //       publish_time: this.time,
    //       phase:this.appearance,
    //       kind:this.kinds,
    //       page_number: this.number,
    //       information: this.text,
    var book_name = req.body.book_name;
    var book_author = req.body.book_author;
    var book_store = req.body.book_store;
    var price = req.body.price;
    var sell_price = req.body.sell_price;
    var number = req.body.number;
    var publisher = req.body.publisher;
    var publish_time = req.body.publish_time;
    var phase = req.body.phase;
    var kind = req.body.kind;
    var page_number = req.body.page_number;
    var information = req.body.information;
    var arr = [null, book_name, book_author, book_store, price, sell_price, number, information, publisher, publish_time, page_number, phase, kind, 1];
    //引入用户业务逻辑
    let UserService = require("../Service/UserService");
    //创建对象
    let userService = new UserService();
    //检查用户是否合法
    userService.addProduct(arr, function(ob) {
        res.end(JSON.stringify(ob));
    });
};