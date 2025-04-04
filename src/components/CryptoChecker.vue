<template>
  <v-container class="crypto-checker">
    <v-alert
      v-if="error"
      type="error"
      class="mb-4"
      closable
    >
      {{ error }}
    </v-alert>

    <v-card class="pa-4">
      <h2 class="text-h5 mb-4">Cryptocurrency Shariah Compliance Checker</h2>
      
      <v-form @submit.prevent="checkCompliance" v-model="isValid">
        <v-text-field
          v-model="cryptoSymbol"
          label="Enter Cryptocurrency Symbol (e.g. BTC)"
          :rules="[(v: any) => !!v || 'Symbol is required']"
          class="mb-4"
          clearable
          placeholder="Enter crypto symbol"
          hint="Enter a valid cryptocurrency symbol (e.g. BTC, ETH, ADA)"
          persistent-hint
          @keyup.enter="checkCompliance"
        />

        <v-btn
          color="primary"
          type="submit"
          :loading="loading"
          :disabled="!isValid || !cryptoSymbol"
          block
          class="mb-4"
        >
          <v-icon start class="mr-2">mdi-magnify</v-icon>
          Check Compliance
        </v-btn>
      </v-form>

      <v-expand-transition>
        <div v-if="result" class="mt-6">
          <v-divider class="mb-4"/>

          <div class="text-center mb-6">
            <h3 class="text-h6 mb-2">Shariah Compliance Score</h3>
            <v-chip
              :color="scoreColor"
              size="x-large"
              class="pa-4"
              variant="elevated"
            >
              <v-icon start class="mr-2">
                {{ result.score >= 70 ? 'mdi-check-circle' : 'mdi-alert-circle' }}
              </v-icon>
              <span class="text-h6">{{ result.score }}/100</span>
            </v-chip>
            <p class="mt-2 text-caption">
              {{ getScoreDescription(result.score) }}
            </p>
          </div>

          <v-card class="mb-4" variant="outlined">
            <v-card-title class="text-subtitle-1 pb-0">
              Compliance Criteria Analysis
            </v-card-title>
            <v-list>
              <v-list-item
                v-for="(value, key) in result.criteria"
                :key="key"
                :subtitle="getCriteriaDescription(key)"
                class="py-2"
              >
                <template v-slot:prepend>
                  <v-icon
                    :color="value ? 'success' : 'error'"
                    :icon="value ? 'mdi-check-circle' : 'mdi-close-circle'"
                    size="large"
                  />
                </template>
                <v-list-item-title>{{ formatCriteriaName(key) }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>

          <v-alert
            v-if="result.recommendations?.length"
            :color="result.score >= 70 ? 'success' : 'info'"
            :icon="result.score >= 70 ? 'mdi-check-circle' : 'mdi-information'"
            class="mt-4"
            variant="tonal"
          >
            <template v-slot:title>
              {{ result.score >= 70 ? 'Halal Investment Status' : 'Recommendations' }}
            </template>
            <div v-for="(rec, index) in result.recommendations" :key="index" class="mt-1">
              {{ rec }}
            </div>
          </v-alert>
        </div>
      </v-expand-transition>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { api } from '@/services/api'
import type { ValidationResult } from '@/types'

export default defineComponent({
  name: 'CryptoChecker',
  
  setup() {
    const cryptoSymbol = ref('')
    const loading = ref(false)
    const result = ref<ValidationResult | null>(null)
    const error = ref<string | null>(null)
    const isValid = ref(false)

    const scoreColor = computed(() => {
      if (!result.value) return 'grey'
      return result.value.score >= 70 ? 'success' :
             result.value.score >= 50 ? 'warning' : 'error'
    })

    const getCriteriaDescription = (key: string): string => {
      const descriptions: Record<string, string> = {
        sectorCompliance: 'Cryptocurrency meets Islamic financial principles',
        debtCompliance: 'No interest-based mechanisms in the protocol',
        activitiesCompliance: 'Used primarily for permissible transactions'
      }
      return descriptions[key] || ''
    }

    const getScoreDescription = (score: number): string => {
      if (score >= 70) return 'This cryptocurrency appears to be Shariah-compliant'
      if (score >= 50) return 'This cryptocurrency requires further analysis'
      return 'This cryptocurrency may not be Shariah-compliant'
    }

    const checkCompliance = async () => {
      if (!cryptoSymbol.value) return

      loading.value = true
      error.value = null

      try {
        result.value = await api.checkInvestment(cryptoSymbol.value)
      } catch (err) {
        error.value = err instanceof Error ? err.message : 'An error occurred'
        console.error('Error checking crypto compliance:', err)
      } finally {
        loading.value = false
      }
    }

    const formatCriteriaName = (name: string) => {
      return name.replace(/([A-Z])/g, ' $1')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    }

    return {
      cryptoSymbol,
      loading,
      result,
      error,
      isValid,
      scoreColor,
      formatCriteriaName,
      checkCompliance,
      getCriteriaDescription,
      getScoreDescription,
    }
  }
})
</script>

<style scoped>
.crypto-checker {
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
}

.v-card {
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.v-list-item {
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.v-list-item:last-child {
  border-bottom: none;
}
</style>