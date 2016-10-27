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

## 使用代码编写预期

```js
// 
expect(add(2, 3)).toBe(5);

// 
expect(add(2, 'test')).toThrow();

// 
expect(add(0.1, 0.2)).toBe(0.3);

``` 


JavaScript Testing
课程
重新思考测试: 9

课程简介
什么是测试？
始终失败
练习: 验证观点
分析预期
练习: 定义预期
重构 add()
练习: 使用代码编写预期
课程结论


课程

编写测试套件 : 19
Jasmine 简介
浏览 SpecRunner
练习: 识别套件和 Spec
套件和 Spec 简介
编写测试
练习: 每个 Spec 的多次测试
失败-成功-重构入门
编写 AddressBookSpec.js
练习: 编写实现
迭代实现
练习: 完成实现
Mike 的解决方案
其他 Spec
移除冗余代码
测试异步代码
编写异步测试
练习: 运行第一个异步测试
更正异步测试
小结


Jasmine 简介

[Jasmine 2.5 docs ](http://jasmine.github.io/2.5/introduction)


使用以下命令为课程的开始 
[克隆资源库：](https://github.com/udacity/ud549)

[Jasmine](http://jasmine.github.io/)

[mocha](https://mochajs.org/)

https://github.com/xgqfrms-GitHub/mocha/Tutorials

[javascript-unit-test-tools-for-tdd](http://stackoverflow.com/questions/300855/javascript-unit-test-tools-for-tdd)



https://github.com/angular/protractor
https://karma-runner.github.io/1.0/index.html
https://facebook.github.io/jest/
https://qunitjs.com/
https://github.com/avajs/ava
http://sinonjs.org/
http://unitjs.com/