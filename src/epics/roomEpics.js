import {map, mergeMap, tap} from 'rxjs/operators'
import {combineEpics, ofType} from 'redux-observable'
import {observableFromEvent, requestNewRoom} from '../utils/socketUtils'
import {CREATE_ROOM_REQUEST, CREATE_ROOM_SUCCESS} from "../actions/room";
import {NEW_ROOM_CREATED} from "../shared/events";

const createRoomEpic = action$ => action$.pipe(
  ofType(CREATE_ROOM_REQUEST),
  tap(() => requestNewRoom()),
  mergeMap(() => observableFromEvent(NEW_ROOM_CREATED).pipe(
    map(payload => ({type: CREATE_ROOM_SUCCESS, payload})))
  )
)

export default combineEpics(createRoomEpic)
