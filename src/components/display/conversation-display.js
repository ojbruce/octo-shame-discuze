import React from 'react'
import PropTypes from 'prop-types'
import Stanza from './stanza-item'

require('./conversation-display.scss')

const ConversationDisplay = ({ stanzas, currentUsername }) => {
  if (stanzas.length === 0) {
    return (
      <div className='chat__display'>
        Commencez la conversation
      </div>
    )
  }

  return (
    <div className='chat__display'>
      {stanzas.map(stanza =>
        <Stanza
          key={stanza.id}
          {...stanza}
          currentUsername={currentUsername}
        />
      )}
    </div>
  )
}

ConversationDisplay.propTypes = {
  stanzas: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  currentUsername: PropTypes.string.isRequired
}

export default ConversationDisplay
