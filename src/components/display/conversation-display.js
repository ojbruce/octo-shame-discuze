import React from 'react'
import PropTypes from 'prop-types'
import Stanza from './stanza-item'

require('./conversation-display.scss')

const ConversationDisplay = ({ stanzas }) => {
  if (stanzas.lenght === 0) {
    return ('You don\'t have any message yet !')
  }

  return (
    <div className='chat__display'>
      {stanzas.map(stanza =>
        <Stanza
          key={stanza.id}
          {...stanza}
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
  }).isRequired).isRequired
}

export default ConversationDisplay
