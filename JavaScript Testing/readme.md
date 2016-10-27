# JavaScript Testing

[JavaScript Testing](https://classroom.udacity.com/courses/ud549)


## demo


```js
function add(x, y){
    return x + y;
}
// 2 + 3 = 5;

// 2 + 3 = 6; error

// '2' + '3' = '23'; error

// 0.1 + 0.2 != 0.3; error

[Double-precision floating-point format](http://stackoverflow.com/questions/588004/is-floating-point-math-broken/40287130#40287130)

``` 

## test codes
```js
function add(x, y){
    var result;
    if((typeof x && y typeof y) !== 'number') {
        throw new Error('params must be a number.');
    }
    result = x + y;
    if(parseInt(result) !== result) {
        result = parseFloat(result.toFixed(1));
    }
    return result;
}
``` 

