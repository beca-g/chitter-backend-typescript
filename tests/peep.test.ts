import { Peep } from '../src/peep'
import { expect } from 'chai'

describe('peep', () => {
    it('should have a body of text', () => {
        let peep: Peep = new Peep("Hello")
        expect(peep.getBody()).to.equal("Hello")
    })
})
