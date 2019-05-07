// 引入fs 模块 内置
const fs = require('fs');
// 引入path 模块 内置
const path = require('path');

//创建一个文件监听  - 本文件夹为实例
let watch = fs.watch(
    __dirname, //当前的文件目录
    { recursive:true }, //时候监听子文件
    (eventName,fileName) => {
        console.log('发生的事件名称' + eventName);
        console.log('被改变的文件名字' + fileName);
    }
)
console.log('是我一个大妖怪！')

setTimeout( ()=>{
    watch.close( (err)=>{
        if(err){
            console.log(err)
            return;
        }
    })
    console.log('关闭监听！');
},15000)