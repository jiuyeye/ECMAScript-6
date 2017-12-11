### ES6学习之Babel的安装
1. 首先安装babel-cli（用于在终端使用babel）
```javascript
npm install -g babel-cli
```
2. 然后安装babel-preset-es2015(或者使用babel-preset-env)插件
```javascript
npm install --save-dev babel-preset-es2015
```
3. 插件配置
每一次都写上该参数那是很麻烦的，可以在当前目录下新建配置文件 .babelrc。
```javascript
"presets": ['es2015']
```
除了建立.babelrc文件之外，也可在package.json中进行配置，添加以下属性即可：
```javascript
"babel": {
   "presets": ["es2015"]
}
```
4. 终端执行命令
```javascript
babel main.js --presets es2015
```
Babel常用命令：
