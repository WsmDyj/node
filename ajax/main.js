const http = require('http');
const fs = require('fs');


// 创建一个web服务器  
const server = http.createServer((req, res) => {
    // 怎么得到index.html
    if (req.url == '/'){
        const indexFile = fs.createReadStream('./index.html');
        res.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'})
        indexFile.pipe(res)
    }else if(req. url =='/info'){
        // api  
        const info = {
            "name": "zhengkai",
            "desc": "身骑白马"
        }
        // 200转态码  content-type 文件格式 返回给浏览器 如何去解析这一次的请求到达
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end(JSON.stringify(info))
    }
   
    
})

server.listen(8081);