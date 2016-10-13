# Dockerizing a Node.js web app

[Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

> 这个例子的目的是告诉你如何把一个Node.js应用程序放入到Docker容器。
该指南旨在用于开发，而不是用于生产部署。
该指南还假定你有安装Docker的经验，且对Node.js应用程序是如何构建的,有一个基本的了解.

> 在本指南的第一部分，我们将用Node.js创建一个简单的Web应用程序,
然后我们将为该应用程序建立一个Docker映像，
最后我们将运行这个镜像作为一个容器。

> Docker允许你把一个应用和它的所有依赖打包成一个标准化单元,称为一个容器(container),用于软件开发.
每一个容器(container)都是一个精简到基本版本的Linux操作系统。
镜像(image)是你加载到一个容器中的软件。

## Create the Node.js app

> 首先，创建一个新目录,所有文件将会位于其中。
在此目录中，创建一个package.json文件，描述你的应用程序及其依赖：

```package.json
{
  "name": "docker_web_app",
  "version": "1.0.0",
  "description": "Node.js on Docker",
  "author": "First Last <first.last@example.com>",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.13.3"
  }
}
``` 
> 然后，创建一个server.js文件,用来定义了一个使用Express.js框架的Web应用程序：

```server.js
'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
``` 

> 在接下来的步骤中,我们将看看你如何在一个Docker容器内运行这个应用程序,使用官方Docker镜像.
首先，你需要为你的应用程序构建一个Docker镜像。

## Creating a Dockerfile

> 创建一个名为Dockerfile一个空文件： 

```sh
$ touch Dockerfile
``` 

> 我们需要做的第一件事就是定义我们要从构建什么样的镜像。
在这里我们将使用node最新的LTS(长期支持)版argon ,可用于Docker Hub：

```Dockerfile
FROM node:argon
``` 


```
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
``` 


 

## 现在你的Dockerfile应该看起来像这样的：
```Dockerfile
FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]
``` 







