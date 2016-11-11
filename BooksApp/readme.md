# BooksApp

## node建站攻略

http://www.imooc.com/video/1090

```sh

$ npm i -S express jade mongoose moment
$ npm i -D express jade mongoose moment


$ npm i -g bower
$ bower install bootstrap

# Gruntfile.js

[Grunt](http://gruntjs.com/getting-started)

https://github.com/ufo-github/grunt

$ npm i -g grunt grunt-cli
$ npm i -D grunt-contrib-watch grunt-nodemon grunt-concurrent

grunt-contrib-jshint
grunt-contrib-nodeunit
grunt-contrib-uglify


``` 

## path

localhost:3000/
localhost:3000/movie/1


localhost:3000/admin/movie
localhost:3000/admin/list

******************************************************************************************

# 进击Node.js基础（一）

https://nodejs.org/dist/latest-v6.x/docs/api/http.html

https://nodejs.org/dist/latest-v6.x/docs/api/querystring.html


***********************************************************************************************

# JavaScript_APIs

https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs

https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods

HTTP Methods: GET vs. POST
http://www.w3schools.com/tags/ref_httpmethods.asp

HTTP - Methods
https://www.tutorialspoint.com/http/http_methods.htm

https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html


HTTP 定义了一组请求方法, 用来以\指示针对给定资源要执行的期望动作. 虽然他们也可以是名词, 但这些请求方法有时被称为HTTP动词. 每一个请求方法都实现了不同的语义, 但一些共同的特征由它们的组共享：: 例如一个请求方法可以是 safe, idempotent, 或 cacheable.


1. GET 方法请求一个指定资源的表示形式. 使用GET的请求应该只被用于获取数据.

2. HEAD 方法请求一个与GET请求的响应相同的响应，但没有响应体.

3. POST 方法用于将实体提交到指定的资源，通常导致状态或服务器上的副作用的更改. 

4. PUT 方法用请求有效载荷替换目标资源的所有当前表示。

5. DELETE 方法删除指定的资源。

6. CONNECT 方法建立一个到由目标资源标识的服务器的隧道。

7. OPTIONS 方法用于描述目标资源的通信选项。

8. TRACE 方法沿着到目标资源的路径执行一个消息环回测试。

9. PATCH 方法用于对资源应用部分修改。



http://www.w3schools.com/tags/ref_httpmethods.asp
HTTP Methods: GET vs. POST

GET - Requests data from a specified resource
POST - Submits data to be processed to a specified resource


The GET Method
Note that the query string (name/value pairs) is sent in the URL of a GET request:

/test/demo_form.asp?name1=value1&name2=value2
Some other notes on GET requests:

GET requests can be cached
GET requests remain in the browser history
GET requests can be bookmarked
GET requests should never be used when dealing with sensitive data
GET requests have length restrictions
GET requests should be used only to retrieve data

The POST Method
Note that the query string (name/value pairs) is sent in the HTTP message body of a POST request:

POST /test/demo_form.asp HTTP/1.1
Host: w3schools.com
name1=value1&name2=value2
Some other notes on POST requests:

POST requests are never cached
POST requests do not remain in the browser history
POST requests cannot be bookmarked
POST requests have no restrictions on data length


***********************************************************************************************

状态码
1xx  表示请求已经接收，进行进一步的处理
2xx  请求已经成功的接收并处理
3xx  请求重定向，需要另外的一些处理
4xx  客户端错误，请求的有语法错误或者请求无法实现
5xx  服务器端错误

200 客服端请求成功 

301 所请求的资源已被分配了一个新的永久URI，并且任何对该资源的任何引用都应该使用返回的URI之一。
302 所请求的资源暂时驻留在不同的URI下。
304 如果客户端已经执行了条件GET请求并且允许访问，但文档尚未被修改，则服务器应该使用此状态代码进行响应。

400 客户端请求语法错误 由于语法错误，无法满足该请求。
401 请求没有经过授权 请求需要用户身份验证
403 拒绝提供服务 合请求是法该请求，但服务器拒绝响应。(不是因为没有权限，授权认证也没有区别) 
404 未找到 有可能输入的URL地址错误  

500 服务器 发生错误  服务器遇到了一个意外情况，导致它无法满足请求。
503 服务器端当前还不能处理客户端请求可能需要过一段时间 由于服务器的临时超载或维护，服务器当前无法处理请求







