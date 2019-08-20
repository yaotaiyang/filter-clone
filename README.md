you can easy copy a js object

use like this:
```javascript
filterClone(object,include,exclude)
```
`object` can be a `array` or `object`  
`include` can be a `array` or `regexp`  
`exclude` can be a `array` or `regexp`  


```javascript
var obj ={a:1,b:2,c:3}
var b = filterClone(obj,['a','b']);
// b = {a:1,b:2}


var obj1 ={a:1,b:2,c:3}
var b1= filterClone(obj,[],['a']);
// b = {b:2,c:3}

var obj2 ={a:1,b:2,c:3}
var b2= filterClone(obj,/a/);
// b = {a:1}


var obj3 ={a:1,b:2,c:3}
var b3= filterClone(obj,null,/a/);
// b = {b:2,c:3}
```