'use strict';

function fn({a=1,b=2}={}){
    console.log([a,b])
};
fn();

function fn2({a,b}={a:1,b:2}){
    console.log([a,b])
}
fn2({a:10});
