// 本例 使用fs 模块读取文件
const fs = require('fs');
const path = require('path');

let fileName = path.join(__dirname,'zRead.md')

console.log(fileName);

// fs.readFile(    //这是同步的方式
//     fileName,
//     { encoding: 'utf8'},    //将内容转码
//     (err,data) => {
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log(data);
//     }
// )

//  创建可读流 tream
let readTream = fs.createReadStream(    //创建一个可读流
    fileName,
    {
        flags: 'r',
        encoding: 'utf8',
    }
)
readTream.on('open', fd => {
    console.log('文件获取话柄权' + fd);
})

readTream.on('data', data => {
    console.log('读取的数据如下/s' +  data);
})

readTream.on('close', () => {
    console.log('数据读取完毕！');
})