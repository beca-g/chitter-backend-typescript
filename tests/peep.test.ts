import { Peep } from '../src/peep'
import { expect } from 'chai'

describe('peep', () => {
    let peep: Peep 
    let date: String;
    
    beforeEach(() => {
        peep = new Peep("Hello", 1618933497553)
        date = "Tue Apr 20 2021 16:44:57 GMT+0100 (British Summer Time)"
    })

    it('should have a body of text', () => {
        expect(peep.getBody()).to.equal("Hello")
    })

    it("should have a time & date that the peep was posted", () => {
        console.log(peep.getTimeStamp())
        expect(peep.getTimeStamp()).to.equal(date)
    })
})
