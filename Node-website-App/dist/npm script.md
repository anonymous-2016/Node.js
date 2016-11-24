# npm script


## Installation  

Either through cloning with git or by using npm (the recommended way):

```sh
$ npm install -g nodemon
``` 

And nodemon will be installed globally to your system path.

It is also possible to install locally:

```sh
$ npm install --save-dev nodemon 
``` 

With a local installation, nodemon will not be available in your system path.  
Instead, the local installation of nodemon can be run by calling it from within an npm script (such as npm start).  
Additionally, the npm bin command can be used to obtain the path to the project's local .bin directory.


## ***npm bin** path

## OK (recommended)
> $ cd node_modules\/.bin\

## OK
> $ cd node_modules\.bin\

/node_modules/.bin/nodemon.cmd



```nodemon.cmd
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\nodemon\bin\nodemon.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\nodemon\bin\nodemon.js" %*
)
``` 


```nodemon
#!/bin/sh
basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")

case `uname` in
    *CYGWIN*) basedir=`cygpath -w "$basedir"`;;
esac

if [ -x "$basedir/node" ]; then
  "$basedir/node"  "$basedir/../nodemon/bin/nodemon.js" "$@"
  ret=$?
else 
  node  "$basedir/../nodemon/bin/nodemon.js" "$@"
  ret=$?
fi
exit $ret
``` 






















