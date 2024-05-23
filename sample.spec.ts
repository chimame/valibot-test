import { describe, it, expect } from 'vitest'
import { string } from 'valibot'

describe('sample', () => {
  it('should pass', () => {
    console.log(string)
    expect(1 + 1).toBe(2)
  })
})
