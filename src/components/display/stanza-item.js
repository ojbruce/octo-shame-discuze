import React from 'react'
import PropTypes from 'prop-types'

require('./stanza-item.scss')

let classNames = require('classnames')

const StanzaItem = ({ username, text, currentUsername }) => {
  const cNames = classNames(
    {
      'chat__conversation__stanza-row': true,
      'right': currentUsername === username
    }
  )

  return (
    <div className={cNames}>
      <span className='stanza-message'>
        {text}
      </span>
    </div>
  )
}

StanzaItem.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  currentUsername: PropTypes.string.isRequired
}
export default StanzaItem
