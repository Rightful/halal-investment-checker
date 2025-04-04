<template>
    <v-container>
      <div v-if="result" class="results">
        <h2 class="text-h4 mb-6">Investment Analysis Results</h2>
        
        <v-card class="mb-6">
          <v-card-title>Overall Shariah Score</v-card-title>
          <v-card-text>
            <v-progress-circular
              :model-value="result.score"
              :color="getScoreColor"
              size="100"
              width="10"
            >
              {{ result.score }}
            </v-progress-circular>
          </v-card-text>
        </v-card>
  
        <v-card class="mb-6">
          <v-card-title>Compliance Criteria</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="(value, key) in result.criteria" :key="key">
                <v-list-item-title>{{ formatCriteriaName(key) }}</v-list-item-title>
                <v-list-item-action>
                  <v-icon :color="value ? 'success' : 'error'">
                    {{ value ? 'mdi-check' : 'mdi-close' }}
                  </v-icon>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
  
        <v-card v-if="result.recommendations.length">
          <v-card-title>Recommendations</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="(rec, index) in result.recommendations" :key="index">
                <v-list-item-title>{{ rec }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed, onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { api } from '@/services/api'
  import type { ValidationResult } from '@/types'
  
  export default defineComponent({
    name: 'ResultsView',
    setup() {
      const route = useRoute()
      const result = ref<ValidationResult | null>(null)
  
      const getScoreColor = computed(() => {
        if (!result.value) return 'grey'
        return result.value.score >= 70 ? 'success' :
               result.value.score >= 50 ? 'warning' : 'error'
      })
  
      const formatCriteriaName = (name: string) => {
        return name.replace(/([A-Z])/g, ' $1').toLowerCase()
      }
  
      onMounted(async () => {
        const ticker = route.params.ticker as string
        result.value = await api.checkInvestment(ticker)
      })
  
      return {
        result,
        getScoreColor,
        formatCriteriaName
      }
    }
  })
  </script>