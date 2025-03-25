<template>
  <div class="earnings">
    <div class="earnings-header">
      <h2>Earnings</h2>
      <div class="period-selector">
        <button 
          v-for="period in periods" 
          :key="period"
          :class="['period-btn', { active: selectedPeriod === period }]"
          @click="selectedPeriod = period"
        >
          {{ period }}
        </button>
      </div>
    </div>

    <div class="earnings-summary">
      <div class="summary-card">
        <h3>Total Earnings</h3>
        <p class="amount">${{ totalEarnings }}</p>
        <p class="change">+${{ monthlyChange }} this month</p>
      </div>

      <div class="summary-card">
        <h3>Course Sales</h3>
        <p class="amount">{{ totalSales }}</p>
        <p class="change">+{{ monthlySales }} this month</p>
      </div>
    </div>

    <div class="earnings-details card">
      <h3>Recent Transactions</h3>
      <div class="transactions">
        <div v-for="transaction in transactions" :key="transaction.id" class="transaction-item">
          <div class="transaction-info">
            <h4>{{ transaction.courseName }}</h4>
            <p class="transaction-date">{{ formatDate(transaction.date) }}</p>
          </div>
          <p class="transaction-amount">${{ transaction.amount }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const periods = ['Week', 'Month', 'Year', 'All Time']
const selectedPeriod = ref('Month')

const totalEarnings = ref(12500)
const monthlyChange = ref(2300)
const totalSales = ref(450)
const monthlySales = ref(45)

const transactions = ref([
  {
    id: 1,
    courseName: 'Advanced Data Science',
    date: '2023-06-15',
    amount: 199
  },
  {
    id: 2,
    courseName: 'Web Development Fundamentals',
    date: '2023-06-14',
    amount: 149
  },
  {
    id: 3,
    courseName: 'Advanced Data Science',
    date: '2023-06-14',
    amount: 199
  }
])

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.earnings {
  padding: 1rem;
}

.earnings-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.period-selector {
  display: flex;
  gap: 0.5rem;
  background: var(--secondary-black);
  padding: 0.5rem;