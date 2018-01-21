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
        id: 0,
        text: 'Send a test',
        username: 'Rick'
      })
    ).to.deep.equal([
      {
        id: 0,
        text: 'Send a test',
        username: 'Rick'
      }
    ])

    expect(
      stanzas([
        {
          id: 0,
          text: 'Send a test',
          username: 'Rick'
        }
      ], {
        type: 'ADD_STANZA',
        id: 1,
        text: 'Send a Second test',
        username: 'Morty'
      })
    ).to.deep.equal([
      {
        id: 0,
        text: 'Send a test',
        username: 'Rick'
      }, {
        id: 1,
        text: 'Send a Second test',
        username: 'Morty'
      }
    ])
  })
})
