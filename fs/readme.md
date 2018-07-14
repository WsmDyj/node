# 性能优化

http createServer (req, res) => {callback}
web 一切皆资源

web server 资源(html,css,json,img) createReadStream(读)

“传输”到客服端 client  proxy代理

优化空间？

传输的体积能够减少  使用Gzip压缩
服务器端是可以进行文件操作  读写，权限，压缩， 解压缩
客服端  
res.writeHead(200,{'Content-Type':'text/html;charset=utf8'})
带有压缩的字段,unzip,

减少传输体积，快  省带宽