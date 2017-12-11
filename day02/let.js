if(true){
    var a=10;
}
document.getElementById('var').innerHTML=a;
// let作用域内定义变量，在本作用域内有效
if(true){
    let b=10;
}
// document.getElementById('let').innerHTML=b;
// const一旦被赋值就不能修改
const NAME="Jack";
console.log(NAME);
