const fs = require('fs')
let data;
try{
    data = fs.readFileSync('./f2.txt','utf8');
    console.log('文件读取完成');
    console.log("文件的内容是:" + data);
}catch(err){
    console.log('读取文件出错了'+err.message);
}


