import { Peep } from '../src/peep'
import { expect } from 'chai'

describe('peep', () => {
    let peep: Peep 
    let date: Date;
    
    beforeEach(() => {
        peep = new Peep("Hello")
        date = new Date("April 20, 2021 12:00:00");
    })

    it('should have a body of text', () => {
        expect(peep.getBody()).to.equal("Hello")
    })

    it("should have a time & date that the peep was posted", () => {
        console.log(peep.getTimeStamp())
        expect(peep.getTimeStamp()).to.equal(date)
    })
})
