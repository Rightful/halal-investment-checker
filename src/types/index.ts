export interface InvestmentProduct {
  ticker: string;
  name: string;
  sector: string;
  debtRatio: number;
  forbiddenActivities: string[];
  shariahScore: number;
}

export interface ValidationResult {
  score: number;
  criteria: {
    sectorCompliance: boolean;
    debtCompliance: boolean;
    activitiesCompliance: boolean;
  };
  recommendations: string[];
}