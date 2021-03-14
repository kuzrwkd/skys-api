import { addition, division, multiplication, subtraction } from './calculation'

describe('calculationのテストを実行します！絵文字も使えるよ📚', () => {
  describe('addition method', () => {
    test('1 + 2', () => {
      expect(addition(1, 2)).toBe(3)
    })
    test('0 + 0', () => {
      expect(addition(0, 0)).toBe(0)
    })
  })

  describe('subtraction method', () => {
    test('10 - 9', () => {
      expect(subtraction(10, 9)).toBe(1)
    })
    test('0 - 3', () => {
      expect(subtraction(0, 3)).toBe(-3)
    })
  })

  describe('multiplication method', () => {
    test('3 * 3', () => {
      expect(multiplication(3, 3)).toBe(9)
    })
    test('1 * -1', () => {
      expect(multiplication(1, -1)).toBe(-1)
    })
  })

  describe('division method', () => {
    test('10 / 2', () => {
      expect(division(10, 2)).toBe(5)
    })
    test('4 / 2', () => {
      expect(division(4, 2)).toBe(2)
    })
  })
})
