const path =  require('path');

let dirName = path.join(__dirname,'public','index.html');

let fileName = path.join(__filename);

console.log('pulic文件夹下的index.html => ' + dirName);

console.log('当前文件 => ' + fileName);

console.log('当前js 文件夹 => ' + __dirname);

console.log('当前js 文件 => ' + fileName);

