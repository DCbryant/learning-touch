const http =require('http')
const io = require('socket.io')

const server = http.createServer((req,res) => {

})

server.listen(8080)

const wsServer = io.listen(server)
wsServer.on('connection',socket => {
    socket.on('msg',function(...arg){
        console.log(...arg)
    })
})