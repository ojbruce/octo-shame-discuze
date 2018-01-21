import React from 'react'
import PropTypes from 'prop-types'

import ChatInput from './chat-input'
import ConversationDisplay from './../components/display/conversation-display'

require('./chat-window.scss')

const chatWindow = ({stanzas, chatName, addStanza}) => (
  <div className='chat-window'>
    <h2>{chatName}</h2>
    <ConversationDisplay stanzas={stanzas} />
    <ChatInput chatName={chatName} addStanza={addStanza} />
  </div>
)

chatWindow.propTypes = {
  stanzas: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  chatName: PropTypes.string.isRequired,
  addStanza: PropTypes.func.isRequired
}

export default chatWindow
