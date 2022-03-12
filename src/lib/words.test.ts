import {getWordOfDay, getWordSequenceOfDay} from './words'

describe('getWordSequenceOfDay', () => {
    test('generates a sequence', () => {
        const gen = getWordSequenceOfDay(1)
        let v = gen.next()
        expect(v.done).toBeFalsy()
        expect(v.value).toBe('BAGGY')
        v = gen.next()
        expect(v.done).toBeFalsy()
        expect(v.value).toBe('POISE')
        v = gen.next()
        expect(v.done).toBeFalsy()
        expect(v.value).toBe('SCUFF')
    })
    test('is deterministic', () => {
        let gen = getWordSequenceOfDay(1)
        let v = gen.next()
        expect(v.done).toBeFalsy()
        expect(v.value).toBe('BAGGY')

        gen = getWordSequenceOfDay(3)
        v = gen.next()
        expect(v.done).toBeFalsy()
        expect(v.value).toBe('WINCE')
    })
})
