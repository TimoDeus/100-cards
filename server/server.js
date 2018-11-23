require('dotenv').config()
const io = require('socket.io')()
const {CONNECTION, REQUEST_NEW_ROOM, NEW_ROOM_CREATED} = require('../src/shared/events')

const PORT = process.env.REACT_APP_BACKEND_PORT || 3001

io.listen(PORT);

console.log('Socket.io listening on port ', PORT);

io.on(CONNECTION, socket => {
  socket.on(REQUEST_NEW_ROOM, () => {
    socket.emit(NEW_ROOM_CREATED, 'foobar')
  });
});
