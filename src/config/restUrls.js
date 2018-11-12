const createUrl = path => new URL(path, process.env.REACT_APP_API_BASE_URL).toString()
export const prepareGameUrl = createUrl('game/prepare')
