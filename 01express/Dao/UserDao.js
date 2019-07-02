//引入SqlBase
let SqlBase = require("./SqlBase");
//SqlBase继承于userDao
class UserDao extends SqlBase {
    constructor() {
        super();
    }
    /**
     * 
     *这里是：进行mysql语句的全部指令，一个指令是一个方法*****************************
     */
    // 
    // 
    // 买家登陆页面
    // 
    // 用户名与手机号都能登录 username可以是用户名也可以是手机号
    checkUser(username, passwd, call) {
        //(4),编写sql语句
        var userGetSql = "SELECT * from user where username ='" + username + "' OR phonenum = '" + username + "';";
        //4,进行查询操作
        /**
         *query，mysql语句执行的方法
         * 1，userAddSql编写的sql语句
         * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
         */
        this.connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR] - ", err.message);
                return;
            }
            call(result);
        });
    }
    // Entrycontent
    Entrycontent(title, call) {
        var userInsertSql = "SELECT * FROM products_details WHERE book_id='" + title + "'";
        this.connection.query(userInsertSql, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR]-", err.message);
                return;
            }
            call(result);
            // console.log(result)
        });
    }
    // 注册账号，手机号、账户名、密码
    insertUser(phonenum, username, passwd, call) {
        var insertSql = "INSERT INTO user(phonenum, username, passwd) VALUES('" + phonenum + "','" + username + "','" + passwd + "');";
        this.connection.query(insertSql, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR]-", err.message);
                return;
            }
            call(result);
        })
    }
    //查询user表中是否注册过该手机号
    checkPhonenum(phonenum, call) {
        var phonenumSql = "SELECT * FROM user WHERE phonenum='" + phonenum + "';";
        this.connection.query(phonenumSql, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR]-", err.message);
                return;
            }
            call(result)
        })
    }
    //查询user表中是否注册过该用户名
    checkUsername(username, call) {
        var usernameSql = "SELECT * FROM user WHERE username='" + username + "';";
        this.connection.query(usernameSql, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR]-", err.message);
                return;
            }
            call(result)
        })
    }
    // Imgs
    Imgs(id, call) {
        var userInsertSql = "SELECT * FROM imgshave WHERE bookid='" + id + "'";
        this.connection.query(userInsertSql, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR]-", err.message);
                return;
            }
            call(result);
            // console.log(result)
        });
    }
    // 买家同类商品展示页面
    entryOrder(alts, call) {
        var userInsertSql = "SELECT * FROM chinesetrain WHERE book_id='" + alts + "'";
        // var userInsertSql1 = "SELECT * FROM chinesetrain WHERE alts='" + alts + "'ORDER BY money";
        // var userInsertSql2 = "SELECT * FROM chinesetrain WHERE alts='" + alts + "'ORDER BY kuaide";
        this.connection.query(userInsertSql, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR]-", err.message);
                return;
            }
            call(result);
            // console.log(result)
        });
    }
    // 买家同类商品展示页面、全新
    entryOrder1(newdata, book_id, call) {
        // SELECT * FROM chinesetrain WHERE newdata='全新' and book_id=1
        var userInsertSql = "SELECT * FROM chinesetrain WHERE newdata='" + newdata + "' and book_id='" + book_id + "'";
        this.connection.query(userInsertSql, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR]-", err.message);
                return;
            }
            call(result);
            // console.log(result
        });
    }
    // Shoppingcar
    // 买家页面  购物车数据收集
    Shoppingcar(id, call) {
        var userInsertSql = `SELECT * FROM chinesetrain WHERE id=${id}`;
        this.connection.query(userInsertSql, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR]-", err.message);
                return;
            }
            call(result);
            // console.log(result)
        });
    }
    // 卖家登陆页面
    checkSeller(name, passwd, call) {
        //(4),编写sql语句
        var userGetSql = "SELECT * from seller where seller ='" + name + "'";
        //4,进行查询操作
        /**
         *query，mysql语句执行的方法
         * 1，userAddSql编写的sql语句
         * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
         */
        this.connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR] - ", err.message);
                return;
            }
            call(result);
        });
    }
    // 卖家注册店铺 
    insertShoper(seller, tel, passwd, book_store, call) {
        console.log(seller, tel, passwd, book_store);
        var userInsertSql = "INSERT into seller(seller, tel, passwd, book_store) VALUES('" + seller + "'," + tel + ",'" + passwd + "','" + book_store + "')";
        // console.log(userInsertSql);
        this.connection.query(userInsertSql, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR]-", err.message);
                return;
            }
            call(result);
        });
    }
    // 买家书本订购页面  产品数据获取
    orderProducts(booksName, call) {
        var userInsertSql = "SELECT * FROM book WHERE id='" + booksName + "' AND `status`=1";
        this.connection.query(userInsertSql, function (err, result) {
            if (err) {
                console.log("[SELECT ERROR]-", err.message);
                return;
            }
            call(result);
        });
    }
    // 卖家页面  产品数据获取
    showProducts(kind, call) {
        var userInsertSql = "SELECT p.product_id,p.book_name,p.book_author,p.publish_time,p.phase,p.price,p.number,p.book_store,p.img  FROM products p where kind='" + kind + "' and status=1 ORDER BY p.product_id";
        this.connection.query(userInsertSql, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR]-", err.message);
                return;
            }
            call(result);
        });
    }
    // 卖家页面  产品添加
    addProduct(arr, call) {
        var userInsertSql = "insert into products() values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        this.connection.query(userInsertSql, arr, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR]-", err.message);
                return;
            }
            call(result);
        });
    }
    // 卖家页面  产品删除
    devProduct(id, call) {
        var userInsertSql = "UPDATE products SET status=0 WHERE product_id=?";
        this.connection.query(userInsertSql, id, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR]-", err.message);
                return;
            }
            call(result);
        });
    }
    allProducts(status, call) {
        var selectAll = "SELECT * FROM `products` WHERE products.`status`=" + status + ";";
        this.connection.query(selectAll, function (err, result) {
            if (err) {
                console.log("[INSERT ERROR]-", err.message);
                return;
            }
            call(result);
        })
    }
}
// // 稍后增加
// // insertUser(name, passwd, call) {
// //     var userInsertSql = "insert into user (name,passwd) values('" + name + "','" + passwd + "')";
// this.connection.query(userInsertSql, function(err, result) {
//     if (err) {
//         console.log("[INSERT ERROR]-", err.message);
//         return;
//     }
//     call(result);
// });
// // }


module.exports = UserDao;