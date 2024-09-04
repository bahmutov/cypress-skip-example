/// <reference types="cypress" />

import { skipIfPreviousTestsFailed } from 'cypress-skip-this-test'

describe('Parent suite', () => {
  beforeEach(skipIfPreviousTestsFailed)

  it('test 1', () => {
    // throw new Error('fail on purpose')
  })

  it('test 2', () => {
    throw new Error('fail on purpose')
  })

  it('test 3', () => {})
})
