# Build a Website with Node.js

Full project for the Build a Website with Node course. 

## Instructions

1. Clone the repo: `git@github.com:scotch-io/node-website-course.git`
2. Install packages: `npm install`
3. Start the server: `node server.js`
4. Visit in browser at: `http://localhost:8080`




## Course Videos

[Watch the lessons free](https://school.scotch.io/build-a-nodejs-website)

    "body-parser": "^1.15.2",
    "ejs": "^2.5.1",
    "express": "^4.14.0",
    "express-ejs-layouts": "^2.2.0",
    "nodemon": "^1.10.2"
```sh
$ npm i -S express ejs express-ejs-layouts nodemon body-parser 


    "body-parser": "^1.15.2",
"ejs": "^2.5.2",
    "express": "^4.14.0",
    "express-ejs-layouts": "^2.2.0",
"nodemon": "^1.11.0"



## Now run **nodemon server.js** and you never have to restart again!

```sh
$ nodemon server.js
``` 


# tutorial
https://www.npmjs.com/package/nodemon
http://nodemon.io/

```javascript
# good to go!
$ npm install -g nodemon
```



/*
ejs 应该在 router 前面，防止 error！
*/


# define
<%- defineContent('hero') %>

# use
<%- contentFor('hero') %>


<!-- ejs -->
http://ejs.co/

```code
Tags
<% 
# 'Scriptlet' tag, for control-flow, no output

<%= 
# Outputs the value into the template (HTML escaped)

<%- 
# Outputs the unescaped value into the template

<%# 
# Comment tag, no execution, no output

<%% 
# Outputs a literal '<%'

%> 
# Plain ending tag

-%> 
# Trim-mode ('newline slurp') tag, trims following newline
``` 




# body-parser

app.use(bodyParser.urlencoded({ extended: true }));







