export const ADD_STANZA = 'ADD_STANZA'

let next = 0

export function addStanza (text, username) {
  return {
    type: ADD_STANZA,
    id: next++,
    text: text,
    username: username
  }
}
