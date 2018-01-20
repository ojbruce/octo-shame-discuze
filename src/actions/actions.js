export const ADD_STANZA = 'ADD_STANZA'

export function addStanza (text, username) {
  return {
    type: ADD_STANZA,
    text: text,
    username: username
  }
}
