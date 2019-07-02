//1,引入express
var express = require("express");
var app = express();

//2,静态文件
app.use(express.static("public"));

//3,设置跨域访问
app.all("*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Origin", "http://localhost:8081");
    // res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", " 3.2.1");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//4,引入body-parser模块
var bodyParser = require("body-parser");
//5，创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });
/***
 * 数据传入接口
 */
// 买家登陆页面
var loginController = require("./Controllers/LoginController");
app.post("/login", urlencodedParser, loginController.login);

// 买家注册页面
var registerController = require("./Controllers/RegisterController");
app.post("/register", urlencodedParser, registerController.register);

// 买家页面 同类书本展示
var EntryorderController = require("./Controllers/EntryorderController");
app.post("/entryorder", urlencodedParser, EntryorderController.entryorder);


// 买家页面 同类书本展示 顶部
var EntrycontentController = require("./Controllers/EntrycontentController");
app.post("/entrycontent", urlencodedParser, EntrycontentController.entrycontent);

// 买家页面 同类书本展示 顶部点击图片链接
var ImgsController = require("./Controllers/ImgsController");
app.post("/imgs", urlencodedParser, ImgsController.imgs);

// 买家页面 同类书本展示、全新
var Entryorder1Controller = require("./Controllers/Entryorder1Controller");
app.post("/entryorder1", urlencodedParser, Entryorder1Controller.entryorder1);

// shoppingcar
// 买家页面  购物车的数据收集
var ShoppingcarController = require("./Controllers/ShoppingcarController");
app.post("/shoppingcar", urlencodedParser, ShoppingcarController.shoppingcar);


// showBook 买家书本加购页面
var OrderController = require("./Controllers/OrderController");
app.post("/showBook", urlencodedParser, OrderController.showBook);

// 卖家页面  登陆
var SellerController = require("./Controllers/SellerController");
app.post("/seller", urlencodedParser, SellerController.seller);

// 产品数据获取表中状态status为1的数据
var AllProductsController = require("./Controllers/AllProductsController");
app.post("/all", urlencodedParser, AllProductsController.all);

// 卖家店铺注册页面  
var ShoperRegistController = require("./Controllers/ShoperRegistController");
app.post("/shoperRegist", urlencodedParser, ShoperRegistController.shoperRegist);

// 卖家页面  产品数据获取
var ProductsController = require("./Controllers/ProductsController");
app.post("/show", urlencodedParser, ProductsController.show);

// 卖家页面  产品添加
var AddController = require("./Controllers/AddController");
app.post("/add", urlencodedParser, AddController.add);

// 卖家页面  产品删除
var DevController = require("./Controllers/DevController");
app.post("/dev", urlencodedParser, DevController.dev);


// 卖家页面  产品删除
var showImgController = require("./Controllers/showImgController");
app.post("/showImg", urlencodedParser, showImgController.showImg);

// 卖家页面  产品删除
var bookStoreController = require("./Controllers/BookStoreController");
app.post("/storeList", urlencodedParser, bookStoreController.storeList);



//监听
app.listen(8888);