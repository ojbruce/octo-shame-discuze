import React from 'react'
import PropTypes from 'prop-types'

require('./chat-input.scss')
let classNames = require('classnames')

class ChatInput extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      text: this.props.text || ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    if (event.target.stanza.value !== '') {
      this.props.addStanza(event.target.stanza.value, this.props.username)
      this.setState({text: ''})
    }
  }

  handleChange (e) {
    this.setState({ text: e.target.value })
  }

  render () {
    const cNames = classNames(
      {
        'form__submit': true,
        'isEmpty': this.state.text === ''
      }
    )

    return (
      <form className='chat__form' onSubmit={this.handleSubmit}>
        <input id='stanza' name='stanza' type='text' className='form__input'
          placeholder={this.props.username + ': votre message'} autoComplete='off'
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button type='submit' className={cNames}>
          Envoyer
        </button>
      </form>
    )
  }
}

ChatInput.propTypes = {
  addStanza: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  text: PropTypes.string
}

export default ChatInput
