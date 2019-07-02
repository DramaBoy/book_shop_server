//(1)引入MySQL模块
var mysql = require("mysql");
class SqlBase {
    /**
     * 这里是mysql的引入和连接*************************
     */
    constructor() {
        //(2)创建一个connection
        this.connection = mysql.createConnection({
            host: "cdb-a9y1iffo.cd.tencentcdb.com", //主机 ip
            user: "root", //MySQL认证用户名
            password: "cdhq1234", //MySQL认证用户密码
            port: "10055", //端口号
            database: "SecondMarket" //数据库里面的数据
        });
        //(3),连接
        this.connection.connect();
    }

    getConnection() {
        return this.connection;
    }
    closeSql() {
        this.connection.end();
    }
}

module.exports = SqlBase;