# [HTTP api doc](https://nodejs.org/dist/latest-v5.x/docs/api/http.html)

***
***

## http server!

#### code
        //获取http 核心模块
		var http = require('http');
		//自定义请求处理函数
		var requestHandler = function(req, res){
			//响应内容
			res.end('Hello World!');
		}
		//创建Web Server
		var web = http.createServer(requestHandler);
		//设置监听端口
		web.listen(8080);
		//命令行输出 日志
		console.log('http running at http://localhost:8080');
    
