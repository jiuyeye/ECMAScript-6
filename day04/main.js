'use strict';
var {a,b}={a:3,b:4};
console.log(a);
console.log(b);

var json = {
    c:[
        'nammmmmm',
        {d:'333'}
    ]
};
var {c:[name,{d}]}=json;
console.log(name);
console.log(d);
