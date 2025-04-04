<template>
  <v-container class="about" fluid>
    <!-- Hero Section -->
    <v-row class="hero-section">
      <v-col cols="12" class="text-center">
        <h1 class="text-h2 font-weight-bold gradient-text mb-4">
          Halal Investment Checker
        </h1>
        <div class="text-h6 text-medium-emphasis mb-6">
          Empowering ethical investment decisions through comprehensive<br />
          Shariah compliance analysis
        </div>
        <div class="stats-container">
          <div class="stats-group">
            <v-chip
              v-for="(stat, index) in statistics"
              :key="index"
              size="x-large"
              class="stat-chip"
              color="primary"
              variant="elevated"
            >
              <v-icon start class="stat-icon">{{ stat.icon }}</v-icon>
              <div class="stat-content">
                <span class="font-weight-bold">{{ stat.value }}</span>
                <span class="text-caption">{{ stat.label }}</span>
              </div>
            </v-chip>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- Main Content -->
    <v-row>
      <v-col cols="12" md="10" offset-md="1">
        <v-card class="pa-6" elevation="3" rounded="lg">
          <!-- Mission Section -->
          <v-card class="mb-8 mission-card" variant="outlined" rounded="lg">
            <v-card-title class="d-flex align-center gradient-bg">
              <v-icon color="white" size="32" class="mr-3">mdi-flag</v-icon>
              <span class="text-h5">Our Mission</span>
            </v-card-title>
            <v-card-text class="pa-6">
              <p class="text-body-1 text-justified">
                At Halal Investment Checker, we are dedicated to providing
                Muslims and ethical investors with comprehensive, reliable
                analysis of investment opportunities. Our platform combines
                traditional Islamic financial principles with cutting-edge
                technology to ensure your investments align with Shariah
                guidelines while maximizing potential returns.
              </p>
            </v-card-text>
          </v-card>

          <!-- Features Grid -->
          <v-card class="mb-8 features-card" variant="outlined" rounded="lg">
            <v-card-title class="d-flex align-center gradient-bg">
              <v-icon color="white" size="32" class="mr-3">mdi-star</v-icon>
              <span class="text-h5">Key Features</span>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col
                  v-for="(feature, index) in features"
                  :key="index"
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-card class="feature-card h-100" variant="outlined">
                    <v-card-text>
                      <div class="d-flex align-center mb-4">
                        <v-avatar
                          color="primary"
                          size="48"
                          class="feature-icon"
                        >
                          <v-icon color="white" size="24">{{
                            feature.icon
                          }}</v-icon>
                        </v-avatar>
                        <h3 class="text-h6 ml-4">{{ feature.title }}</h3>
                      </div>
                      <p class="text-body-2">{{ feature.description }}</p>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>

          <!-- Criteria Section -->
          <v-card class="mb-8 criteria-card" variant="outlined" rounded="lg">
            <v-card-title class="d-flex align-center gradient-bg">
              <v-icon color="white" size="32" class="mr-3"
                >mdi-shield-check</v-icon
              >
              <span class="text-h5">Shariah Compliance Criteria</span>
            </v-card-title>
            <v-list class="pa-4">
              <v-list-item
                v-for="(item, index) in criteriaItems"
                :key="index"
                class="my-2 criteria-item"
                rounded="lg"
              >
                <template v-slot:prepend>
                  <v-avatar color="primary" size="52" class="elevation-2">
                    <v-icon color="white" size="28">{{ item.icon }}</v-icon>
                  </v-avatar>
                </template>
                <v-list-item-title class="text-h6 mb-2">{{
                  item.title
                }}</v-list-item-title>
                <v-list-item-subtitle class="text-body-1">{{
                  item.description
                }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card>

          <!-- Process Section -->
          <v-card class="mb-8 process-card" variant="outlined" rounded="lg">
            <v-card-title class="d-flex align-center gradient-bg">
              <v-icon color="white" size="32" class="mr-3"
                >mdi-help-circle</v-icon
              >
              <span class="text-h5">How It Works</span>
            </v-card-title>
            <v-card-text>
              <v-timeline align="start" class="pa-4">
                <v-timeline-item
                  v-for="(step, index) in processSteps"
                  :key="index"
                  dot-color="primary"
                  size="small"
                  fill-dot
                >
                  <template v-slot:icon>
                    <v-avatar color="primary" size="42" class="process-icon">
                      <v-icon color="white" size="24">{{ step.icon }}</v-icon>
                    </v-avatar>
                  </template>
                  <v-card variant="outlined" class="timeline-card">
                    <v-card-title class="text-h6 primary--text pb-2">{{
                      step.title
                    }}</v-card-title>
                    <v-card-text class="text-body-1 pt-0">{{
                      step.description
                    }}</v-card-text>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>

          <!-- Disclaimer -->
          <v-alert
            type="info"
            class="mb-4 disclaimer-alert"
            variant="tonal"
            border="start"
            elevation="2"
            rounded="lg"
          >
            <template v-slot:prepend>
              <v-avatar color="info" size="48" class="elevation-1">
                <v-icon color="white">mdi-information</v-icon>
              </v-avatar>
            </template>
            <template v-slot:title>
              <span class="text-h6">Important Disclaimer</span>
            </template>
            <div class="text-body-1 mt-2">
              This tool provides guidance based on generally accepted Shariah
              principles. While we strive for accuracy, we recommend consulting
              with qualified scholars for final investment decisions. Market
              conditions and company profiles may change, affecting compliance
              status.
            </div>
          </v-alert>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutView",

  setup() {
    const statistics = [
      { icon: "mdi-chart-box", value: "1000+", label: "Stocks Analyzed" },
      { icon: "mdi-percent", value: "99%", label: "Accuracy Rate" },
      { icon: "mdi-check-decagram", value: "50+", label: "ETFs Covered" },
    ];

    const features = [
      {
        icon: "mdi-flash",
        title: "Real-Time Analysis",
        description:
          "Get instant Shariah compliance checks using live market data",
      },
      {
        icon: "mdi-chart-arc",
        title: "Detailed Reports",
        description:
          "Comprehensive analysis of financial ratios and business activities",
      },
      {
        icon: "mdi-shield-check",
        title: "Strict Standards",
        description:
          "Adherence to globally recognized Islamic financial principles",
      },
      {
        icon: "mdi-bell",
        title: "Alerts",
        description:
          "Get notified when compliance status changes for your investments",
      },
      {
        icon: "mdi-trending-up",
        title: "Market Updates",
        description:
          "Regular updates on market changes affecting compliance status",
      },
      {
        icon: "mdi-book-open",
        title: "Educational Resources",
        description:
          "Learn about Islamic finance principles and investment strategies",
      },
    ];

    const criteriaItems = [
      {
        icon: "mdi-domain",
        title: "Business Activities",
        description:
          "Companies must not be involved in prohibited activities such as alcohol, gambling, or interest-based financial services.",
      },
      {
        icon: "mdi-chart-line",
        title: "Financial Ratios",
        description:
          "Debt ratio must not exceed 33%, and interest income should be less than 5% of total revenue.",
      },
      {
        icon: "mdi-cash-multiple",
        title: "Revenue Sources",
        description: "At least 95% of revenue must come from halal sources.",
      },
    ];

    const processSteps = [
      {
        icon: "mdi-text-box-search",
        title: "Enter Investment",
        description: "Input a stock symbol, ETF, or cryptocurrency",
      },
      {
        icon: "mdi-calculator",
        title: "Analysis",
        description: "Our system checks multiple Shariah compliance criteria",
      },
      {
        icon: "mdi-file-document-check",
        title: "Results",
        description:
          "Receive a detailed compliance report with recommendations",
      },
    ];

    return {
      statistics,
      features,
      criteriaItems,
      processSteps,
    };
  },
});
</script>

<style scoped>
/* Base Styles */
.about {
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
  min-height: 100vh;
}

/* Typography */
.text-h5,
.text-h6 {
  color: rgba(0, 0, 0, 0.87);
  font-weight: 500;
}

.text-body-1,
.text-body-2 {
  color: rgba(0, 0, 0, 0.7);
}

/* Hero Section */
.hero-section {
  padding: 3rem 0 2rem 0;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, rgba(33, 150, 243, 0.05) 0%, rgba(33, 150, 243, 0.1) 100%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.gradient-text {
  background: linear-gradient(45deg, #1976d2, #2196f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Stats Section */
.stats-container {
  width: 100%;
  padding: 0 1rem;
  margin-bottom: 2rem;
}

.stats-group {
  display: flex !important;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.stat-chip {
  width: 100%;
  max-width: 280px;
  min-height: 64px;
  padding: 0.75rem 1.5rem !important;
  display: flex !important;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(33, 150, 243, 0.15) 100%) !important;
  border: 1px solid rgba(33, 150, 243, 0.3) !important;
  transition: all 0.3s ease;
}

.stat-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
}

.stat-icon {
  margin-right: 1rem;
}

.stat-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(33, 150, 243, 0.2);
}

.stat-chip .v-icon,
.stat-chip .font-weight-bold,
.stat-chip .text-caption {
  color: #1976d2 !important;
}

/* Card Styles */
.gradient-bg {
  background: linear-gradient(45deg, #1976d2, #2196f3);
  padding: 1.5rem;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.gradient-bg .text-h5 {
  color: white !important;
  line-height: 1.3;
  font-size: 1.5rem !important;
  flex: 1;
  min-width: 0;
  word-wrap: break-word;
}

.gradient-bg .v-icon {
  flex-shrink: 0;
  color: white !important;
}

.mission-card,
.features-card,
.criteria-card,
.process-card {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.mission-card:hover,
.features-card:hover,
.criteria-card:hover,
.process-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* Feature Cards */
.feature-card {
  background-color: #f8f9fa;
  border: 1px solid rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-4px);
  background-color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-color: #2196f3;
}

.feature-icon {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid white;
}

/* Criteria Items */
.criteria-item {
  background-color: #f8f9fa;
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  margin-bottom: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.criteria-item :deep(.v-list-item__content) {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  overflow: visible !important;
  white-space: normal !important;
  flex: 1;
  min-width: 0;
}

.criteria-item :deep(.v-list-item-title) {
  white-space: normal !important;
  overflow: visible !important;
  text-overflow: unset !important;
  line-height: 1.5 !important;
  margin-bottom: 0.5rem;
  font-size: 1.1rem !important;
  width: 100%;
  display: block;
  color: rgba(0, 0, 0, 0.87);
}

.criteria-item :deep(.v-list-item-subtitle) {
  white-space: normal !important;
  overflow: visible !important;
  text-overflow: unset !important;
  line-height: 1.6 !important;
  opacity: 0.9;
  color: rgba(0, 0, 0, 0.7) !important;
  width: 100%;
  word-wrap: break-word;
  display: block;
  hyphens: auto;
}

.criteria-item :deep(.v-list-item__prepend) {
  align-self: flex-start;
  margin-right: 1.5rem;
  flex: 0 0 auto;
  padding-top: 0.25rem;
}

/* Timeline */
.timeline-card {
  background-color: #f8f9fa;
  margin-left: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.08);
  width: calc(100% - 2rem);
  word-wrap: break-word;
  overflow-wrap: break-word;
  min-width: 0; /* Add this */
}

.process-card .v-timeline {
  padding-left: 0.5rem !important;
  padding-right: 0.5rem !important;
}

.timeline-card .v-card-title {
  padding: 1rem 1rem 0.5rem;
  line-height: 1.4;
  font-size: 1.1rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal !important; /* Add this */
  min-width: 0; /* Add this */
}

.timeline-card .v-card-text {
  padding: 0.5rem 1rem 1rem;
  line-height: 1.6;
  font-size: 1rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal !important; /* Add this */
  min-width: 0; /* Add this */
}

.process-icon {
  border: 3px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Disclaimer */
.disclaimer-alert {
  background: linear-gradient(45deg, rgba(33, 150, 243, 0.05), rgba(33, 150, 243, 0.1));
  border-left: 4px solid #2196f3;
  color: rgba(0, 0, 0, 0.87);
}

/* Responsive Design */
@media (min-width: 601px) {
  .stats-group {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .stat-chip {
    width: auto;
    min-width: 200px;
  }

  .criteria-item {
    flex-direction: row;
    align-items: flex-start;
  }

  .criteria-item :deep(.v-list-item__content) {
    padding-right: 1rem;
  }
}

@media (max-width: 960px) {
  .hero-section {
    padding: 2.5rem 1rem;
  }

  .gradient-text {
    font-size: 2.25rem !important;
  }

  .feature-card {
    margin-bottom: 1rem;
  }
}

@media (max-width: 600px) {
  .hero-section {
    padding: 2rem 1rem;
    margin-bottom: 1.5rem;
  }

  .gradient-text {
    font-size: 1.75rem !important;
  }

  .text-h6 {
    font-size: 1rem !important;
  }

  .gradient-bg {
    padding: 1rem;
    gap: 0.75rem;
  }

  .gradient-bg .text-h5 {
    font-size: 1.25rem !important;
  }

  .gradient-bg .v-icon {
    font-size: 24px !important;
  }

  .stat-chip {
    width: 100% !important;
    max-width: 280px;
    margin: 0.25rem 0;
  }

  .stats-group {
    gap: 0.5rem;
  }

  .criteria-item {
    padding: 1rem;
  }

  .timeline-card {
    margin-left: 0.75rem;
    width: calc(100% - 1rem);
  }

  .timeline-card .v-card-title {
    font-size: 0.95rem !important;
    padding: 0.75rem 0.75rem 0.375rem;
    line-height: 1.3;
  }

  .timeline-card .v-card-text {
    font-size: 0.875rem !important;
    padding: 0.375rem 0.75rem 0.75rem;
    line-height: 1.4;
  }

  .process-card .v-timeline {
    padding-left: 0.25rem !important;
    padding-right: 0.25rem !important;
  }

  .process-icon {
    border-width: 2px;
    width: 36px !important;
    height: 36px !important;
  }

  .process-icon .v-icon {
    font-size: 18px !important;
  }
  .feature-card {
    padding: 1rem;
  }

  .v-card.pa-6 {
    padding: 1rem !important;
  }
}

@media (max-width: 390px) {
  .gradient-bg .text-h5 {
    font-size: 1.1rem !important;
  }

  .gradient-bg .v-icon {
    font-size: 20px !important;
  }
  .timeline-card {
    margin-left: 0.5rem;
    width: calc(100% - 0.75rem);
  }

  .timeline-card .v-card-title {
    font-size: 0.9rem !important;
    padding: 0.625rem 0.625rem 0.3125rem;
  }

  .timeline-card .v-card-text {
    font-size: 0.85rem !important;
    padding: 0.3125rem 0.625rem 0.625rem;
  }

  .process-card .v-timeline {
    padding-left: 0.125rem !important;
    padding-right: 0.125rem !important;
  }

  .process-icon {
    width: 32px !important;
    height: 32px !important;
  }

  .process-icon .v-icon {
    font-size: 16px !important;
  }
}
</style>
