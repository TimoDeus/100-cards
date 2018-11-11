import reduxCookiesMiddleware, { getStateFromCookies } from 'redux-cookies-middleware'

const paths = { 'example.message': { name: 'example' } }
const emptyState = { example: {} }
export const initialState = getStateFromCookies(emptyState, paths)
export const createCookieMiddleware = () => reduxCookiesMiddleware(paths)
