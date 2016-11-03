# CURL

[command line tool and library for transferring data with URLs](https://curl.haxx.se/)

[PDF tutorial](https://www.gitbook.com/book/bagder/everything-curl/details)

[example](https://curl.haxx.se/libcurl/c/example.html)

[The libcurl API](https://curl.haxx.se/libcurl/c/)

===========================================================================
[Manual -- curl usage explained](https://curl.haxx.se/docs/manual.html)

[Using cURL to automate HTTP jobs](https://curl.haxx.se/docs/httpscripting.html)


curl --help

curl --manual

curl --verbose (-v)

curl --verbose xgqfrms.xyz

============================================================================

**************************************************************************************
常用参数
--connect-timeout：设置最大连接时间
-d：传递json数据
-I：仅显示文档信息(HTTP状态码什么的)
-s：静默模式，不输出任何东西
-X：请求方式，GET、POST、DELETE等
-H: 设置请求头，比如-H "Content-Type: application/json"
1
curl -X POST -F 'username=davidwalsh' -F 'password=something' http://domain.tld/post-to-me.php



1. 查看网页源代码
    curl www.xgqfrms.xyz
    如果要把网页保存下来，可以使用'-o'参数，相当于使用wget命令。
    curl -o [文件名] www.xgqfrms.xyz

2.自动跳转
    -L参数，curl就会自动跳转到新的网址
    curl -L www.xgqfrms.xyz

3.显示头信息
    -I参数只显示http response的头信息。
    -i参数，可以显示http response的头信息，后面是网页代码。
    curl -i www.xgqfrms.xyz

4.显示通信过程
    -v参数，可以显示一次http通信的整个过程，包括端口连接和http request的头信息。

    如果觉得上面的信息不够，可以使用下面这个命令查看更详细的通信过程。
    curl --trace output.html www.xgqfrms.xyz
    或者
    curl --trace-ascii output.txt www.xgqfrms.xyz
    运行后，请打开output.html/output.txt文件查看。

5.发送表单信息
    发送表单信息有GET和POST两种方法。GET方法相对简单，只要把数据附在网址后面即可。
    curl www.xgqfrms.xyz/form.cgi?data=xxx

    POST方法必须把数据和网址分开，curl就要用到--data参数。
    curl -X POST --data "data=xxx" www.xgqfrms.xyz/form.cgi

    如果你的数据没有经过表单编码，还可以让curl为你编码，参数是`--data-urlencode`。
    $ curl -X POST --data-urlencode "date=April 1" example.com/form.cgi

6.HTTP动词（用的最多）
    curl默认支持的HTTP动词是GET，使用`-X`参数可以支持其他动词。
    curl -X POST www.xgqfrms.xyz
    curl -X DELETE www.xgqfrms.xyz

7.文件上传
    假设文件上传的表单是下面这样的：
    <form method="POST" enctype="multipart/form-data" action="upload.cgi">
        <input type="file" name="upload">
        <input type="submit" name="press" value="OK">
    </form>
    可以使用curl这样上传文件：
    curl --form upload=@localfilename --form press=OK [www.xgqfrms.xyz]
 
8.Referer字段
    在http request头信息中，增加一个referer字段，表示你是从哪里过来的。
    curl --referer http://www.webgeeker.xyz http://www.xgqfrms.xyz

9.User Agent字段
    这个字段用来表示客户端设备的信息。服务器有时会根据这个字段，针对不同的设备，
    返回不同格式的网页，比如手机版和桌面版。
    iPhone4的User Agent是
        Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A293 Safari/6531.22.7
    curl --user-agent "[User Agent]" [URL]
 
10.cookie（移动端不支持cookie，现在都用token）
    使用`--cookie`参数，可以让curl发送cookie。
    curl --cookie "name=xxx" www.xgqfrms.xyz

    至于具体的cookie设置，可以从http response头信息中的`Set-Cookie`字段中得到。
    `-c cookie-file`可以保存服务器返回的cookie到文件，`-b cookie-file`可以使用这个文件作为cookie信息，
    作为后续的请求。
    curl -c cookies http://www.xgqfrms.xyz
    curl -b cookes http://www.xgqfrms.xyz
 
11.增加头信息
    有时需要在http request之中，自行增加一个头信息。`--header`参数就可以起到这个作用。
    curl --header "Content-Type:application/json" www.xgqfrms.xyz
 
12.HTTP认证
    有些网域需要HTTP认证，这是需要用到`--user`参数。
    curl --user name:password www.xgqfrms.xyz

***************************************************************************************


## []()

```bash
$ curl -X GET "http://localhost:3000/movies"

# or

$ curl -X GET http://localhost:3000/movies
``` 



## [HTTP POST](https://ec.haxx.se/http-post.html)

```bash
$ curl -X POST -H "Content-Type: application/json" -d '{"id": 3, "name": "Inception", "director": "Christopher Nolan", "rating": 9.0}' http://localhost:3000/movies
//error

Content-Type application/json

## 可以不使用id, 它会自动分配的！

{"id": 3, "name": "Inception", "director": "Christopher Nolan", "rating": 9.0}
//OK

{"name": "Inception", "director": "Christopher Nolan", "rating": 9.0}
// OK

'{"name": "Inception", "director": "Christopher Nolan", "rating": 9.0}'
// error
``` 

## json-server
```bash
json-server -w db.json
json-server --watch db.json
``` 

## curl.exe path
```bash
$ curl -X GET http://localhost:3000/movies

$ curl -X GET "http://localhost:3000/movies"

``` 




