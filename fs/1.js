// COMMONJS require NODE 内置支持的js模块化方案  
// ES6  moduile  
// sea.js

const fs = require('fs');
let data;

// fs.readFile('./f1.txt', 'utf8', (err,data) => {
//     console.log('真正的读取完成了');
//     console.log("文件的内容:" + data)
// });

const p =  new Promise((resolve,reject)=>{
    fs.readFile('./f2.txt', 'utf8', (err,data) => {
        if(err){
            reject(err);
        }else{
            console.log("文件的内容:" + data);
            resolve(data);
        }
        });
});
p.then(data=>{
    console.log('读取完成');
}).catch(e=>{
    console.log(e)
})

