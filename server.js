const http = require('http')
const app = require('./app')
const port = process.env.PORT || 5000
const server = http.createServer(app)


const start = () => {
    try {
        server.listen(port, () => {
            console.log(`Listening on port ${port}`)
        })  
    } catch (error) {
        console.error('Error listenign on port')
    }
}

start()