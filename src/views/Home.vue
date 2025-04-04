<template>
    <div class="home">
      <v-container>
        <h1 class="text-h3 mb-6">Welcome to Halal Investment Checker</h1>
        <v-tabs v-model="activeTab">
          <v-tab value="stocks">Stocks</v-tab>
          <v-tab value="etf">ETFs</v-tab>
          <v-tab value="crypto">Crypto</v-tab>
        </v-tabs>
  
        <v-window v-model="activeTab" class="mt-6">
          <v-window-item value="stocks">
            <stock-checker />
          </v-window-item>
          <v-window-item value="etf">
            <etf-checker />
          </v-window-item>
          <v-window-item value="crypto">
            <crypto-checker />
          </v-window-item>
        </v-window>
      </v-container>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  import StockChecker from '@/components/StockChecker.vue'
  import EtfChecker from '@/components/EtfChecker.vue'
  import CryptoChecker from '@/components/CryptoChecker.vue'
  
  export default defineComponent({
    name: 'HomeView',
    components: {
      StockChecker,
      EtfChecker,
      CryptoChecker
    },
    setup() {
      const activeTab = ref('stocks')
      return { activeTab }
    }
  })
  </script>