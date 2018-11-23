import openSocket from 'socket.io-client';
import {REQUEST_NEW_ROOM, NEW_ROOM_CREATED} from '../shared/events'
import {fromEvent} from "rxjs";

export const socket = openSocket('http://localhost:3001');

export const observableFromEvent = event => fromEvent(socket, event)

export const requestNewRoom = () => socket.emit(REQUEST_NEW_ROOM)

socket.on(NEW_ROOM_CREATED, data => console.log('room created', data))
