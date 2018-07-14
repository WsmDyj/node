// 文件读取

// 一、普通读取
const fs = require('fs')
var data;

try {
    data = fs.readFileSync('./fileForRead.txt', 'utf8');
    console.log('文件读取:' +data)
} catch(err) {
    console.log('读取文件出错:' + err.message)
}

// 二、异步读取
fs.readFile('./fileForRead.txt', 'utf8', function(err) {
    if(err) {
        return console.log('文件读取失败:'+err.message)
    }
    console.log('文件内容:' +data)
})

// 通过文件流读取
var readStream = fs.createReadStream('./fileForRead.txt','utf8');

    readStream
        .on('data', (chunk)=>{
            console.log('读取数据：'+ chunk)
        })
        .on('error', (err)=>{
            console.log('出错了：'+err.message)
        })
        .on('end', () =>{
            console.log('没有数据了')
        })
        .on('close', ()=>{
            console.log('已经关闭')
        })

// 文件写入
// 备注: 如果文件不存在，则创建文件；如果文件存在，则覆盖文件的内容

// 一、异步写入
fs.writeFileSync('./fileForRead.txt', 'wsm your are good','utf8', (err) =>{
    if(err) throw err;
    console.log('文件写入成功')
})

// 二、同步写入
try{
    fs.writeFile('./fileForRead.txt', 'wsm i love you', 'utf8', )
}catch (err) {
    console.log(err)
}

// 通过流文件写入
 var writeStream = fs.createWriteStream('./fileForRead.txt','utf8')
    writeStream
        .on('close', () => {console.log('已经关闭了')});
    writeStream.write('hello')
    writeStream.write('wolrd')
    writeStream.end('')


// 文件是否存在 fs.access() 是deprecated 状态

fs.access('./fileForRead.txt', (err)=>{
    if(err) throw err;
    console.log('fileForRead.txt存在')
})

// fs.access('./fileForRead2.txt',(err)=>{
//     if(err) throw err
//     console.log('fileForRead2.txt存在')
// })

//fs.access可以判断文件的存在，还可以判断文件的权限


// 创建目录

// 同步创建
// fs.mkdirSync('./hello')

// 异步创建
// fs.mkdir('./hello', (err)=>{
//     if(err) throw err;
//     console.log('目录创建成功')
// })

// 删除目录

fs.rmdirSync('./hello')


// 删除文件

// 同步
// fs.unlinkSync('./fileForRead.txt')

// 异步
 fs.unlink('./fileForRead.txt', (err)=>{
    if(err) throw err;
    console.log('文件删除成功')
 })