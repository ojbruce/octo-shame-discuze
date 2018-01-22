import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import StanzaItem from './stanza-item'

const chai = require('chai')
chai.should()

const setup = () => {
  const props = {
    stanza: {
      id: 0,
      text: 'New Message',
      username: 'Robert',
      currentUsername: 'Hugh'
    }
  }

  const renderer = createRenderer()

  renderer.render(
    <StanzaItem {...props.stanza} />
  )

  let output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('Stanza Item', () => {
    it('render', () => {
      const { output } = setup()

      output.type.should.equal('div')
      output.props.className.should.equal('chat__conversation__stanza-row')
    })
  })
})
