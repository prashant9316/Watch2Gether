const socket = require('socket.io')(5000, {
    cors:  {
        origin: "*"
    }
})


socket.on('connection', socket=>{
    socket.on("message", (value) => {
        console.log(value)
    })
    socket.on('changes', (data) => {
        console.log("Received changes from a client: ")

        socket.broadcast.emit('new-changes', data)
    })
})
