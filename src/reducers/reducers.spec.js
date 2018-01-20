import stanzas from './reducers'

const chai = require('chai')
const expect = chai.expect

describe('Stanzas reducer', () => {
  it('should handle initial state', () => {
    expect(stanzas(undefined, {})).to.deep.equal([])
  })

  it('should handle ADD_STANZA', () => {
    expect(
      stanzas([], {
        type: 'ADD_STANZA',
        text: 'Send a test',
        username: 'Rick'
      })
    ).to.deep.equal([
      {
        text: 'Send a test',
        username: 'Rick'
      }
    ])

    expect(
      stanzas([
        {
          text: 'Send a test',
          username: 'Rick'
        }
      ], {
        type: 'ADD_STANZA',
        text: 'Send a Second test',
        username: 'Morty'
      })
    ).to.deep.equal([
      {
        text: 'Send a test',
        username: 'Rick'
      }, {
        text: 'Send a Second test',
        username: 'Morty'
      }
    ])
  })
})
