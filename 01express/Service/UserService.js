let userDao = require("../Dao/UserDao");
class UserService {
    constructor() {
            // 1，引入dao，连接数据库
            //创建用户dao对象
            this.userDao = new userDao();

        }
        /***
         * user,用户修改（userService）用户模块，登陆，注册，修改
         * 数据中转，数据判断
         */
        /***
         * 
         * 
         * 01client-vue
         * 
         */
        //买家检出，判断数据是否正确
    checkUser(username, passwd, call) {
            let ob = {
                code: 1,
                msg: "用户合法,登录成功"
            };
            this.userDao.checkUser(username, passwd, function(arrays) {
                if (arrays.length >= 1) {
                    //从数据库里面取出用户密码
                    let buffer = arrays[0].passwd;
                    //判断数据库的密码是否和用户提交的密码一样
                    if (passwd !== buffer) {
                        ob.code = 2; //用户密码不对
                        ob.msg = "密码错误，请重新输入"; //
                    }
                } else {
                    ob.code = 0; //用户不存在
                    ob.msg = "用户不存在，请注册新用户"; //
                }

                call(ob);
            });
        }
        // 注册用户、手机号，添加数据
    insertUser(phonenum, username, passwd, call) {
            // 1.对用户加密
            // 2.加密后的数据进行插入
            let ob = {
                code: 1,
                msg: "注册成功"
            }
            var that = this;
            this.userDao.checkPhonenum(phonenum, function(arr1) {
                if (arr1.length !== 0) {
                    ob.code = 2; //该手机号被注册过
                    ob.msg = "该手机号被注册过";
                    call(ob);
                } else {
                    that.userDao.checkUsername(username, function(arr2) {
                        if (arr2.length !== 0) {
                            ob.code = 3; //该用户名已被注册过
                            ob.msg = "该用户名已被注册过";
                            call(ob);
                        } else {
                            that.userDao.insertUser(phonenum, username, passwd, function(arr3) {
                                call(ob)
                            })
                        }

                    })
                }
            });
        }
        // Entrycontent
    Entrycontent(title, call) {
            this.userDao.Entrycontent(title, function(ob) {
                call(ob);
            });
        }
        // Imgs
    Imgs(id, call) {
            this.userDao.Imgs(id, function(ob) {
                call(ob);
            });
        }
        // 买家同类商品展示页面
    entryOrder(alts, call) {
            this.userDao.entryOrder(alts, function(ob) {
                call(ob);
            });
        }
        // 买家同类商品展示页面、全新
    entryOrder1(newdata, book_id, call) {
            this.userDao.entryOrder1(newdata, book_id, function(ob) {
                call(ob);
            });
        }
        // Shoppingcar
        // 买家页面  购物车数据收集
    Shoppingcar(id, call) {
            this.userDao.Shoppingcar(id, function(ob) {
                call(ob);
            });
        }
        /***
         * 
         * 
         * 02admin-vue
         * 
         */
        // 卖家用法检查是否合法
    checkSeller(name, passwd, call) {
            let ob = {
                code: 0,
                msg: "用户合法"
            };
            this.userDao.checkSeller(name, passwd, function(arrays) {
                if (arrays.length >= 1) {
                    //从数据库里面取出用户密码
                    let buffer = arrays[0].passwd;

                    //判断数据库的密码是否和用户提交的密码一样
                    if (passwd !== buffer) {
                        ob.code = 2; //用户密码不对
                        ob.msg = "密码错误，请重新输入"; //
                    }
                } else {
                    ob.code = 1; //用户不存在
                    ob.msg = "用户不存在，请注册新用户"; //
                }

                call(ob);
            });
        }
        // 卖家店铺注册
    insertShoper(seller, tel, passwd, book_store, call) {
            // 1.对用户加密
            console.log("nnn");
            // 2.加密后的数据进行插入
            this.userDao.insertShoper(seller, tel, passwd, book_store, function(ob) {
                call(ob);
            });
        }
        // 买家书本订购
    orderProducts(booksName, call) {
            // 1.对用户加密
            console.log("展示产品数据")
                // 2.加密后的数据进行插入
            this.userDao.orderProducts(booksName, function(ob) {
                call(ob);
            });
        }
        // 卖家页面  产品数据获取
    showProducts(kind, call) {
            // 1.对用户加密
            // console.log("展示产品数据")
            // 2.加密后的数据进行插入
            this.userDao.showProducts(kind, function(ob) {
                call(ob);
            });
        }
        // 卖家页面  产品添加
    addProduct(arr, call) {
            // 1.对用户加密
            console.log("addddddddddd")
                // 2.加密后的数据进行插入
            this.userDao.addProduct(arr, function(ob) {
                call(ob);
            });
        }
        // 卖家页面  产品删除
    devProduct(id, call) {
        // 1.对用户加密
        console.log("devvvv")
            // 2.加密后的数据进行插入
        this.userDao.devProduct(id, function(ob) {
            call(ob);
        });
    }

    // 查询products中status为1的所有数据
    allProducts(status, call) {
        this.userDao.allProducts(status, function(ob) {
            call(ob);
        })
    }
    showImg(product_id, call) {
        // 1.对用户加密
        // console.log("展示产品数据")
        // 2.加密后的数据进行插入
        this.userDao.showImg(product_id, function(ob) {
            call(ob);
        });
    }

}

module.exports = UserService;