import { describe, it, expect } from 'vitest'
import { ValidationService } from '/Users/faysal/Documents/halal-investment-checker/src/services/validation'

describe('ValidationService', () => {
  describe('validateInvestment', () => {
    it('should return compliant result for valid stock', () => {
      const result = ValidationService.validateInvestment('stock', 'ADIDAS', {
        debtRatio: 0.2,
        interestIncome: 0.03,
        halalRevenue: 0.98
      })

      expect(result.score).toBeGreaterThanOrEqual(70)
      expect(result.criteria.sectorCompliance).toBe(true)
      expect(result.criteria.debtCompliance).toBe(true)
      expect(result.criteria.activitiesCompliance).toBe(true)
    })

    it('should return non-compliant result for forbidden sector', () => {
      const result = ValidationService.validateInvestment('stock', 'ALCOHOL-CORP', {
        debtRatio: 0.2,
        interestIncome: 0.03,
        halalRevenue: 0.98
      })

      expect(result.score).toBeLessThan(70)
      expect(result.criteria.sectorCompliance).toBe(false)
      expect(result.recommendations).toContain(expect.stringMatching(/non-permissible sector/))
    })

    it('should fail compliance for high debt ratio', () => {
      const result = ValidationService.validateInvestment('stock', 'HIGHDEBT', {
        debtRatio: 0.45,
        interestIncome: 0.03,
        halalRevenue: 0.98
      })

      expect(result.criteria.debtCompliance).toBe(false)
      expect(result.recommendations).toContain(expect.stringMatching(/debt ratio/))
    })

    it('should validate crypto investments', () => {
      const result = ValidationService.validateInvestment('crypto', 'BTC', {
        debtRatio: 0,
        interestIncome: 0,
        halalRevenue: 1
      })

      expect(result.score).toBeGreaterThanOrEqual(0)
      expect(result.score).toBeLessThanOrEqual(100)
    })

    it('should validate ETF investments', () => {
      const result = ValidationService.validateInvestment('etf', 'SPUS', {
        debtRatio: 0.25,
        interestIncome: 0.02,
        halalRevenue: 0.97
      })

      expect(result.score).toBeGreaterThanOrEqual(0)
      expect(result.score).toBeLessThanOrEqual(100)
    })
  })

  describe('recommendations', () => {
    it('should provide recommendations for non-compliant investments', () => {
      const result = ValidationService.validateInvestment('stock', 'BANK', {
        debtRatio: 0.8,
        interestIncome: 0.5,
        halalRevenue: 0.5
      })

      expect(result.recommendations).toHaveLength(expect.any(Number))
      expect(result.recommendations.every(rec => typeof rec === 'string')).toBe(true)
    })

    it('should provide positive feedback for compliant investments', () => {
      const result = ValidationService.validateInvestment('stock', 'HALAL', {
        debtRatio: 0.2,
        interestIncome: 0.01,
        halalRevenue: 0.99
      })

      expect(result.recommendations).toContain(expect.stringMatching(/Shariah-compliant/))
    })
  })
})