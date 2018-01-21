import React from 'react'
import { expect } from 'chai';
import { createRenderer } from 'react-test-renderer/shallow'
import ChatInput from './chat-input'

const setup = () => {
  const props = {
    username: 'T',
    text: 'New Message',
    addStanza: function(e){return e}
  }

  const renderer = createRenderer()

  renderer.render(
    <ChatInput {...props} />
  )

  let output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('ChatInput', () => {
    it('should render correctly', () => {
      const { output } = setup()

      expect(output.type).to.equal('form')

      const [ input, button ] = output.props.children

      expect(input.type).to.equal('input')
      expect(input.props.value).to.equal('New Message')
      expect(input.props.className).to.equal('form__input')
    })

    it('form onSubmit should call addStanza', () => {
      const { output, props } = setup()

      output.props.onSubmit({ 
        preventDefault: () => {}, 
        target: { stanza: {value: 'Test'} }
      })
    })
  })
})
