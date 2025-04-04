import { defineStore } from 'pinia'
import { api } from '@/services/api'
import type { ValidationResult } from '@/types'

interface InvestmentState {
  results: Record<string, ValidationResult>
  loading: boolean
  error: string | null
  recentSearches: string[]
}

export const useInvestmentStore = defineStore('investment', {
  state: (): InvestmentState => ({
    results: {},
    loading: false,
    error: null,
    recentSearches: []
  }),

  getters: {
    getResult: (state) => (symbol: string) => state.results[symbol],
    isLoading: (state) => state.loading,
    getError: (state) => state.error,
    getRecentSearches: (state) => state.recentSearches
  },

  actions: {
    async checkInvestment(type: 'stock' | 'etf' | 'crypto', symbol: string) {
      this.loading = true
      this.error = null
      
      try {
        const result = await api.checkInvestment(symbol)
        
        // Store the result
        this.results[symbol] = result
        
        // Add to recent searches
        if (!this.recentSearches.includes(symbol)) {
          this.recentSearches.unshift(symbol)
          // Keep only last 5 searches
          this.recentSearches = this.recentSearches.slice(0, 5)
        }
        
        return result
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'An error occurred'
        throw error
      } finally {
        this.loading = false
      }
    },

    clearResults() {
      this.results = {}
      this.error = null
    },

    clearRecentSearches() {
      this.recentSearches = []
    }
  }
})