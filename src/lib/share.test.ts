import { generateEmojiGrid } from './share'

describe('generateEmojiGrid', () => {
  test('generates grid for ascii', () => {
    const guesses = ['EDCBA', 'VWXYZ', 'ABCDE']
    const tiles = ['C', 'P', 'A'] // Correct, Present, Absemt
    const solution ='ABCDE'

    const grid = generateEmojiGrid(solution, guesses, tiles)
      const gridParts = grid.split('\n')
    expect(gridParts[0]).toBe('PPCPP')
    expect(gridParts[1]).toBe('AAAAA')
    expect(gridParts[2]).toBe('CCCCC')
  })
  test('generates grid for ascii', () => {
    const guesses = ['5️⃣4️⃣3️⃣2️⃣1️⃣', '♠️♥️♦️♣️🔔', '1️⃣2️⃣3️⃣4️⃣5️⃣']
    const tiles = ['C', 'P', 'A'] // Correct, Present, Absemt
    const solution ='1️⃣2️⃣3️⃣4️⃣5️⃣'

    const grid = generateEmojiGrid(solution, guesses, tiles)
      const gridParts = grid.split('\n')
    expect(gridParts[0]).toBe('PPCPP')
    expect(gridParts[1]).toBe('AAAAA')
    expect(gridParts[2]).toBe('CCCCC')
  })
})
