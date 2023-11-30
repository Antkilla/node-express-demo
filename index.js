//import http from 'http'
import http from 'http';

//create a server object using http module
//req, res are the parameters that give access
//to the request and response objects 
/*const server = http.createServer((req, res) =>  {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(('Hello Nigga\n'));
});

//the server object listens on port 3000
const PORT = 3000;

//start the server
//listen for any activity on port 3000
//callback runs when the server starts listening
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
*/


import express from 'express';
//create an express application 
const app = express();

//define a route handler for the default home page 
app.get('/', (req, res) => {
    res.send('Welcometo the Home Page!');
})

app.get('/About', (req, res) => {
    res.send('About Us!');
})

//define PORT variable to be 3000
const PORT = 3000;

//start the express server
app.listen(PORT, () =>   {
    console.log(`Server running on port ${PORT}`)
});

