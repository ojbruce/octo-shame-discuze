import React from 'react'
import PropTypes from 'prop-types'

const StanzaItem = ({ username, text }) => (
  <div className='chat__conversation__stanza-item'>
    {username}: {text}
  </div>
)

StanzaItem.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
export default StanzaItem
