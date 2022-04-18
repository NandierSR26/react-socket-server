const Server = require("./models/server");
require('dotenv').config();

const server = new Server();

server.execute();

// // configuracion de socket server
// const io = require('socket.io')(server);





// server.listen(8080, () => {
//     console.log('servidor correindo en puerto: 8080');
// });