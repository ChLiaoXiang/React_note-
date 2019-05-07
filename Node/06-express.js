//使用express 框架搭建一个简易的服务器！
const express = require('express');
const path= require('path');
const fs = require('fs');

let html = 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hello Node</title>
</head>
<body>
    <h1> 我是被写入的一个html 模板!</h1>
</body>
</html>
`;

let writeTream = fs.createWriteStream(
    path.join(__dirname,'public','index.html'),
    {
        start: 0,
    }
)
writeTream.on('err', err => {
    if(err) throw err;
})
writeTream.on('finish', () => {
    console.log('写入完成')
})
writeTream.on('end', () => {
    console.log('写入流执行完毕! 关闭。');
})

writeTream.write(html);



const app = express();

app.use(express.static(path.join(__dirname,'public')));


app.listen('8008', () => {
    console.log('服务器端口： http://127.0.0.1:8008');
})
