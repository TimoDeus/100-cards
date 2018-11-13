import reduxCookiesMiddleware, { getStateFromCookies } from 'redux-cookies-middleware'

const paths = {}
const emptyState = {}
export const initialState = getStateFromCookies(emptyState, paths)
export const createCookieMiddleware = () => reduxCookiesMiddleware(paths)
