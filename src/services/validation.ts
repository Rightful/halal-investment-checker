import type { ValidationResult } from '@/types'

interface FinancialRatios {
  debtRatio: number;
  interestIncome: number;
  halalRevenue: number;
}

export class ValidationService {
  private static readonly DEBT_RATIO_THRESHOLD = 0.33; // 33% max debt ratio
  private static readonly INTEREST_INCOME_THRESHOLD = 0.05; // 5% max interest income
  private static readonly HALAL_REVENUE_THRESHOLD = 0.95; // 95% min halal revenue

  /**
   * Validates if an investment meets Shariah compliance criteria
   */
  static validateInvestment(
    type: 'stock' | 'etf' | 'crypto',
    symbol: string,
    financials: FinancialRatios
  ): ValidationResult {
    const criteria = {
      sectorCompliance: this.checkSectorCompliance(symbol),
      debtCompliance: this.checkDebtRatio(financials.debtRatio),
      activitiesCompliance: this.checkBusinessActivities(financials)
    }

    const score = this.calculateComplianceScore(criteria, financials)
    const recommendations = this.generateRecommendations(criteria, type)

    return {
      score,
      criteria,
      recommendations
    }
  }

  /**
   * Checks if the investment is in a permissible sector
   */
  private static checkSectorCompliance(symbol: string): boolean {
    const forbiddenSectors = [
      'alcohol',
      'gambling',
      'tobacco',
      'weapons',
      'adult-entertainment',
      'conventional-banking'
    ]
    
    // In a real implementation, this would check against an API or database
    return !forbiddenSectors.some(sector => 
      symbol.toLowerCase().includes(sector)
    )
  }

  /**
   * Validates debt ratio against Shariah threshold
   */
  private static checkDebtRatio(ratio: number): boolean {
    return ratio <= this.DEBT_RATIO_THRESHOLD
  }

  /**
   * Checks if business activities are Shariah compliant
   */
  private static checkBusinessActivities(financials: FinancialRatios): boolean {
    return (
      financials.interestIncome <= this.INTEREST_INCOME_THRESHOLD &&
      financials.halalRevenue >= this.HALAL_REVENUE_THRESHOLD
    )
  }

  /**
   * Calculates overall compliance score
   */
  private static calculateComplianceScore(
    criteria: Record<string, boolean>,
    financials: FinancialRatios
  ): number {
    const weights = {
      sectorCompliance: 0.4,
      debtCompliance: 0.3,
      activitiesCompliance: 0.3
    }

    let score = 0
    for (const [criterion, isCompliant] of Object.entries(criteria)) {
      if (isCompliant) {
        score += weights[criterion as keyof typeof weights] * 100
      }
    }

    return Math.round(score)
  }

  /**
   * Generates recommendations based on compliance results
   */
  private static generateRecommendations(
    criteria: Record<string, boolean>,
    type: 'stock' | 'etf' | 'crypto'
  ): string[] {
    const recommendations: string[] = []

    if (!criteria.sectorCompliance) {
      recommendations.push(`This ${type} operates in a non-permissible sector.`)
    }

    if (!criteria.debtCompliance) {
      recommendations.push(
        `The debt ratio exceeds the Shariah-compliant threshold of ${
          this.DEBT_RATIO_THRESHOLD * 100
        }%.`
      )
    }

    if (!criteria.activitiesCompliance) {
      recommendations.push(
        'Significant revenue from non-permissible activities detected.'
      )
    }

    if (recommendations.length === 0) {
      recommendations.push(
        `This ${type} appears to be Shariah-compliant based on available data.`
      )
    }

    return recommendations
  }
}