const fs = require('fs');
const path = require('path');

let fileName = path.join(__dirname,'zWrite.md');

// fs.writeFile(
//     fileName,
//     ' 快看，灰机---灰机 灰过来了！ 又灰过去了。。 ',
//     err => {
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log('写入完毕');
//     }
// )

//创建一个可写流
let writeTream = fs.createWriteStream(
    fileName,
    {
        start: 0,
    }
)

writeTream.on('open', fd => {
    console.log('打开可写流 话柄' + fd);
})

writeTream.on('error', err => {
    console.log('写入发生错误' + err);
})

writeTream.on('finish', () => {
    console.log('写入完成！');
})
writeTream.write('我有一个18cm 的大J8  不知道你喜不喜欢!');

writeTream.end( ()=>{
    console.log('写入流 完成!');
});