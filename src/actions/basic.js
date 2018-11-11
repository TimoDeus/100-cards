import * as axios from 'axios'
import { exampleUrl } from '../config/restUrls'

export const EXAMPLE_REQUEST = 'EXAMPLE_REQUEST'
export const EXAMPLE_SUCCESS = 'EXAMPLE_SUCCESS'
export const EXAMPLE_FAILURE = 'EXAMPLE_FAILURE'

export const fetchExample = () => dispatch => {
  dispatch({ type: EXAMPLE_REQUEST })
  return axios.get(exampleUrl).then(
    ({ data }) => dispatch({ type: EXAMPLE_SUCCESS, payload: data }),
    () => dispatch({ type: EXAMPLE_FAILURE })
  )
}
