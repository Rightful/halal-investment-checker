// Mock data for demo purposes
const mockData = {
    // Stocks
    AAPL: {
        ticker: "AAPL",
        name: "Apple Inc.",
        sector: "Technology",
        debtRatio: 0.35,
        forbiddenActivities: [],
        shariahScore: 85,
    },
    MSFT: {
        ticker: "MSFT",
        name: "Microsoft Corporation",
        sector: "Technology",
        debtRatio: 0.28,
        forbiddenActivities: [],
        shariahScore: 82,
    },
    GOOGL: {
        ticker: "GOOGL",
        name: "Alphabet Inc.",
        sector: "Technology",
        debtRatio: 0.15,
        forbiddenActivities: [],
        shariahScore: 88,
    },
    // Islamic ETFs
    SPUS: {
        ticker: "SPUS",
        name: "SP Funds S&P 500 Sharia Industry",
        sector: "ETF",
        debtRatio: 0.15,
        forbiddenActivities: [],
        shariahScore: 95,
    },
    HLAL: {
        ticker: "HLAL",
        name: "Wahed FTSE USA Shariah ETF",
        sector: "ETF",
        debtRatio: 0.12,
        forbiddenActivities: [],
        shariahScore: 98,
    },
    ISDU: {
        ticker: "ISDU",
        name: "iShares MSCI Islamic USA ETF",
        sector: "ETF",
        debtRatio: 0.14,
        forbiddenActivities: [],
        shariahScore: 96,
    },
    // Cryptocurrencies
    BTC: {
        ticker: "BTC",
        name: "Bitcoin",
        sector: "Cryptocurrency",
        debtRatio: 0,
        forbiddenActivities: [],
        shariahScore: 80,
    },
    ETH: {
        ticker: "ETH",
        name: "Ethereum",
        sector: "Cryptocurrency",
        debtRatio: 0,
        forbiddenActivities: ["Smart Contracts with Interest"],
        shariahScore: 65,
    },
    ADA: {
        ticker: "ADA",
        name: "Cardano",
        sector: "Cryptocurrency",
        debtRatio: 0,
        forbiddenActivities: [],
        shariahScore: 85,
    },
    // Non-Compliant Examples
    BUD: {
        ticker: "BUD",
        name: "Anheuser-Busch InBev",
        sector: "Alcohol",
        debtRatio: 0.45,
        forbiddenActivities: ["Alcohol Production"],
        shariahScore: 20,
    },
    PENN: {
        ticker: "PENN",
        name: "PENN Entertainment Inc.",
        sector: "Gambling",
        debtRatio: 0.78,
        forbiddenActivities: ["Gambling Operations"],
        shariahScore: 15,
    },
};
export const api = {
    async checkInvestment(ticker) {
        // Simulate API call
        const product = mockData[ticker.toUpperCase()];
        if (!product) {
            throw new Error("Investment not found");
        }
        return {
            score: product.shariahScore,
            criteria: {
                sectorCompliance: !["Alcohol", "Gambling", "Weapons"].includes(product.sector),
                debtCompliance: product.debtRatio < 0.33,
                activitiesCompliance: product.forbiddenActivities.length === 0,
            },
            recommendations: [],
        };
    },
};
