import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addStanza } from './../actions/actions'

import ChatWindow from './chat-window'
require('./app.scss')

const App = ({stanzas, addStanza}) => (
  <div className='discuze__main-section'>
    <ChatWindow
      stanzas={stanzas}
      recipient={'Bob'}
      username={'Alice'}
      addStanza={addStanza}
    />
    <ChatWindow
      stanzas={stanzas}
      recipient={'Alice'}
      username={'Bob'}
      addStanza={addStanza}
    />
  </div>
)

App.propTypes = {
  stanzas: PropTypes.array.isRequired,
  addStanza: PropTypes.func.isRequired
}

const mapStateToProps = (state) =>
  ({stanzas: state})

const mapDispatchToProps = (dispatch) =>
  ({addStanza: bindActionCreators(addStanza, dispatch)})

const populatedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default populatedApp
