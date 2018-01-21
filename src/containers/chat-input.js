import React from 'react'
import PropTypes from 'prop-types'

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
    this.props.addStanza(event.target.stanza.value, this.props.chatName)
    this.setState({text: ''})
  }

  handleChange (e) {
    this.setState({ text: e.target.value })
  }

  render () {
    return (
      <form className='chat__form' onSubmit={this.handleSubmit}>
        <input id='stanza' name='stanza' type='text' className='form__input'
          placeholder='Votre message'
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button type='submit' className='form__submit'>
          Envoyer
        </button>
      </form>
    )
  }
}

ChatInput.propTypes = {
  addStanza: PropTypes.func.isRequired,
  chatName: PropTypes.string.isRequired,
  text: PropTypes.string
}

export default ChatInput
