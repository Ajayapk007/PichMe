const app = require("./app");
const http = require("http");
const port = process.env.PORT || 8080; 


const server = http.createServer(app);

server.listen(port ,()=>{
    console.log("server is listing on part....");
}).on('error', (err) => {
    console.error('Error starting server: ', err);
});



