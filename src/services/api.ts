import axios from "axios";
import type { InvestmentProduct, ValidationResult } from "@/types";

const ALPHA_VANTAGE_API_KEY = "E5DSPR8IW8AKFOFW";
const BASE_URL = 'https://www.alphavantage.co/query';

interface AlphaVantageOverview {
  Symbol: string;
  Name: string;
  Sector: string;
  Industry: string;
  Description: string;
  MarketCapitalization: string;
  DividendYield: string;
  PriceToBookRatio: string;
  EVToRevenue: string;
}

interface AlphaVantageBalanceSheet {
  symbol: string;
  annualReports: {
    fiscalDateEnding: string;
    totalAssets: string;
    totalLiabilities: string;
    totalShareholderEquity: string;
    // other fields omitted for brevity
  }[];
}

export const api = {
  async checkInvestment(ticker: string): Promise<ValidationResult> {
    try {
      // 1. Fetch company overview
      const { data: overviewData } = await axios.get<AlphaVantageOverview>(BASE_URL, {
        params: {
          function: 'OVERVIEW',
          symbol: ticker.toUpperCase(),
          apikey: ALPHA_VANTAGE_API_KEY
        }
      });

      if (!overviewData || !overviewData.Symbol) {
        throw new Error("Investment not found (overview)");
      }

      // 2. Fetch balance sheet data
      const { data: bsData } = await axios.get<AlphaVantageBalanceSheet>(BASE_URL, {
        params: {
          function: 'BALANCE_SHEET',
          symbol: ticker.toUpperCase(),
          apikey: ALPHA_VANTAGE_API_KEY
        }
      });

      if (!bsData || !bsData.annualReports || bsData.annualReports.length === 0) {
        throw new Error("Investment not found (balance sheet)");
      }

      // Use the latest annual report for ratio calculations
      const latestReport = bsData.annualReports[0];
      const totalAssets = parseFloat(latestReport.totalAssets || '0');
      const totalLiabilities = parseFloat(latestReport.totalLiabilities || '0');
      const totalEquity = parseFloat(latestReport.totalShareholderEquity || '0');

      // Calculate key ratios
      const debtRatio = totalAssets > 0 ? totalLiabilities / totalAssets : 0;
      const debtToEquity = totalEquity > 0 ? totalLiabilities / totalEquity : Infinity;

      // Basic financial metrics from the overview (optional)
      const financialMetrics = {
        marketCap: parseFloat(overviewData.MarketCapitalization || '0'),
        dividendYield: parseFloat(overviewData.DividendYield || '0') * 100, // percentage
        priceToBook: parseFloat(overviewData.PriceToBookRatio || '0'),
        evToRevenue: parseFloat(overviewData.EVToRevenue || '0')
      };

      // Define forbidden sectors/industries (uppercase for comparison)
      const forbiddenSectors = [
        'BANKS',
        'INSURANCE',
        'FINANCIAL',
        'BEVERAGES',
        'TOBACCO',
        'ENTERTAINMENT',
        'DEFENSE'
      ];

      const complianceIssues: string[] = [];

      // Sector/Industry Check
      const sectorUpper = overviewData.Sector?.toUpperCase() || '';
      const industryUpper = overviewData.Industry?.toUpperCase() || '';
      if (forbiddenSectors.some(fs => sectorUpper.includes(fs) || industryUpper.includes(fs))) {
        complianceIssues.push(`Non-compliant sector/industry: ${overviewData.Sector} - ${overviewData.Industry}`);
      }

      // Debt Ratio Check (< 33% threshold)
      if (debtRatio > 0.33) {
        complianceIssues.push(`Debt ratio is ${(debtRatio * 100).toFixed(2)}%, which exceeds the 33% threshold`);
      }

      // Debt-to-Equity Ratio Check (example threshold: 1.0)
      if (debtToEquity > 1.0) {
        complianceIssues.push(`Debt-to-equity ratio is ${debtToEquity.toFixed(2)}, exceeding the recommended maximum of 1.0`);
      }

      // Calculate Shariah score using the ratios and any compliance issues
      const shariahScore = calculateShariahScore(debtRatio, debtToEquity, complianceIssues);

      const product: InvestmentProduct = {
        ticker: overviewData.Symbol,
        name: overviewData.Name,
        sector: overviewData.Sector,
        // Use debtRatio as computed from the balance sheet
        debtRatio,
        forbiddenActivities: complianceIssues,
        shariahScore
      };

      return {
        score: shariahScore,
        criteria: {
          sectorCompliance: !complianceIssues.some(issue => issue.includes('sector/industry')),
          debtCompliance: debtRatio <= 0.33,
          activitiesCompliance: complianceIssues.length === 0
        },
        recommendations: generateRecommendations(product, financialMetrics, debtRatio, debtToEquity)
      };
    } catch (error) {
      console.error('API Error:', error);
      throw new Error("Failed to fetch investment data");
    }
  }
};

function calculateShariahScore(debtRatio: number, debtToEquity: number, issues: string[]): number {
  let score = 100;

  // Deduct points for high debt ratio: for each percentage point above 33% deduct a point.
  if (debtRatio > 0.33) {
    const excess = (debtRatio - 0.33) * 100;
    score -= excess;
  }

  // Deduct points for high debt-to-equity ratio: deduct 20 points for each full unit above 1.0.
  if (debtToEquity > 1.0) {
    const excessEquity = debtToEquity - 1.0;
    score -= excessEquity * 20;
  }

  // Deduct points for each compliance issue (25 points per issue)
  score -= issues.length * 25;

  return Math.max(0, Math.min(100, score));
}

function generateRecommendations(
  product: InvestmentProduct,
  metrics: { evToRevenue: number; priceToBook: number; marketCap: number; dividendYield: number },
  debtRatio: number,
  debtToEquity: number
): string[] {
  const recommendations: string[] = [];

  if (debtRatio > 0.33) {
    recommendations.push(
      `High debt ratio (${(debtRatio * 100).toFixed(2)}%) exceeds the 33% threshold. Consider alternatives with lower leverage.`
    );
  }

  if (debtToEquity > 1.0) {
    recommendations.push(
      `Debt-to-equity ratio (${debtToEquity.toFixed(2)}) is high. Lower financial leverage may enhance compliance.`
    );
  }

  if (product.forbiddenActivities.length > 0) {
    recommendations.push(
      `Compliance issues detected: ${product.forbiddenActivities.join('; ')}.`
    );
  }

  // Optionally, add notes based on other financial metrics
  if (metrics.priceToBook > 30) {
    recommendations.push(
      `High price-to-book ratio (${metrics.priceToBook.toFixed(2)}) observed; monitor for potential leverage concerns.`
    );
  }

  if (metrics.evToRevenue > 10) {
    recommendations.push(
      `EV-to-Revenue ratio of ${metrics.evToRevenue.toFixed(2)} may indicate elevated debt levels.`
    );
  }

  if (metrics.dividendYield > 0) {
    recommendations.push(
      `Dividend Yield: ${metrics.dividendYield.toFixed(2)}% (for your information).`
    );
  }

  return recommendations;
}
