import {ADD_STANZA} from './../actions/actions'

function stanzas (state = [], action) {
  switch (action.type) {
    case ADD_STANZA:
      return [
        ...state,
        {
          id: action.id,
          username: action.username,
          text: action.text
        }
      ]
    default:
      return state
  }
}

export default stanzas
