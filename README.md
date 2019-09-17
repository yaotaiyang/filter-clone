you can easy copy a js object

use like this:
```javascript
filterClone(object,include,exclude)
```
if include and exclude are all exist, exclude will be ignored

`object` can be a `array` or `object`  
`include` can be a `array` or `regexp`  
`exclude` can be a `array` or `regexp`  


```javascript
/**
 * key array
 ***/
var obj ={a:1,b:2,c:3}
var b = filterClone(obj,['a','b']);
// b = {a:1,b:2}

var b1= filterClone(obj,[],['a']);
// b1 = {b:2,c:3}

/**
 *  key reg
 ***/
var obj2 ={a:1,b:2,c:3}
var b2= filterClone(obj,/a/);
// b2 = {a:1}

var b3= filterClone(obj,null,/a/);
// b3 = {b:2,c:3}

/**
 *  key,value function
 ***/
var obj = {a:123,b:234,c:[1,2,3]}
var b4 = filterClone(obj,function(key,value){if(value > 1){return true}})
//{a: 123, b: 234}

var b5 = filterClone(obj,null,function(key,value){if(value > 1){return true}})
//{c: Array(3)}
```