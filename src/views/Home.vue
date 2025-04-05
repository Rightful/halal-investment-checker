<template>
  <div class="home">
    <v-container fluid>
      <!-- Hero Section -->
      <v-row class="hero-section">
        <v-col cols="12" class="text-center">
          <h1 class="text-h2 font-weight-bold gradient-text mb-4">
            Welcome to Halal Investment Checker
          </h1>
          <div class="text-h6 text-medium-emphasis mb-6">
            Check the Shariah compliance of your investments instantly
          </div>
        </v-col>
      </v-row>

      <!-- Main Content -->
      <v-row>
        <v-col cols="12" md="10" offset-md="1">
          <v-card class="pa-6" elevation="3" rounded="lg">
            <v-tabs
              v-model="activeTab"
              class="custom-tabs"
              slider-color="primary"
              centered
            >
              <v-tab value="stocks" class="text-h6">
                <v-icon start class="mr-2">mdi-chart-line</v-icon>
                Stocks
              </v-tab>
              <v-tab value="etf" class="text-h6">
                <v-icon start class="mr-2">mdi-chart-box</v-icon>
                ETFs
              </v-tab>
              <v-tab value="crypto" class="text-h6">
                <v-icon start class="mr-2">mdi-bitcoin</v-icon>
                Crypto
              </v-tab>
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import StockChecker from "@/components/StockChecker.vue";
import EtfChecker from "@/components/EtfChecker.vue";
import CryptoChecker from "@/components/CryptoChecker.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    StockChecker,
    EtfChecker,
    CryptoChecker,
  },
  setup() {
    const activeTab = ref("stocks");
    return { activeTab };
  },
});
</script>

<style scoped>
/* Base Styles */
.home {
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  padding: 3rem 0 2rem 0;
  margin-bottom: 2rem;
  background: linear-gradient(
    135deg,
    rgba(33, 150, 243, 0.05) 0%,
    rgba(33, 150, 243, 0.1) 100%
  );
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.gradient-text {
  background: linear-gradient(45deg, #1976d2, #2196f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Tabs Styling */
.custom-tabs {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);
  border-radius: 8px;
}

.v-tab {
  text-transform: none !important;
  font-weight: 500 !important;
  letter-spacing: normal !important;
  min-width: 160px;
  padding: 1rem 2rem;
}

.v-tab:hover {
  background: rgba(33, 150, 243, 0.05);
}

.v-tab--selected {
  color: #1976d2 !important;
}

.v-window {
  background: white;
  border-radius: 0 0 8px 8px;
}

/* Responsive Design */
@media (max-width: 600px) {
  .hero-section {
    padding: 2rem 1rem;
  }

  .gradient-text {
    font-size: 2rem !important;
  }

  .text-h6 {
    font-size: 1rem !important;
  }

  .v-tab {
    min-width: auto;
    padding: 0.75rem 1rem;
  }

  .v-card.pa-6 {
    padding: 1rem !important;
  }
}

@media (max-width: 960px) {
  .gradient-text {
    font-size: 2.5rem !important;
  }
}
</style>
