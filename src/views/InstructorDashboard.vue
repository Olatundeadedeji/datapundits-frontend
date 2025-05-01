<template>
  <div class="dashboard-container">
    <aside class="dashboard-sidebar">
      <div class="user-info">
        <img :src="instructor.avatar || '/default-avatar.png'" alt="Instructor avatar" class="user-avatar">
        <h3>{{ instructor.name }}</h3>
        <p>{{ instructor.email }}</p>
      </div>
      <nav class="dashboard-nav">
        <router-link to="/instructor/overview" class="nav-item" active-class="active">
          <i class="fas fa-chart-line"></i> Overview
        </router-link>
        <router-link to="/instructor/courses" class="nav-item" active-class="active">
          <i class="fas fa-book"></i> My Courses
        </router-link>
        <router-link to="/instructor/students" class="nav-item" active-class="active">
          <i class="fas fa-users"></i> Students
        </router-link>
        <router-link to="/instructor/earnings" class="nav-item" active-class="active">
          <i class="fas fa-dollar-sign"></i> Earnings
        </router-link>
        <router-link to="/instructor/reviews" class="nav-item" active-class="active">
          <i class="fas fa-star"></i> Reviews
        </router-link>
      </nav>
    </aside>

    <main class="dashboard-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const instructor = ref({
  name: 'John Doe',
  email: 'john@example.com',
  avatar: null
})
</script>

<style scoped>
.dashboard-container {
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: calc(100vh - 64px);
  background: var(--primary-black);
}

.dashboard-sidebar {
  background: var(--secondary-black);
  border-right: 1px solid var(--tertiary-black);
  padding: 2rem;
}

.user-info {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--tertiary-black);
}

.user-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: cover;
  border: 2px solid var(--accent-color);
}

.dashboard-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.nav-item:hover {
  background: var(--tertiary-black);
  color: var(--text-primary);
}

.nav-item.active {
  background: var(--accent-color);
  color: var(--primary-black);
}

.dashboard-content {
  padding: 2rem;
  overflow-y: auto;
}

@media (max-width: 768px) {
  .dashboard-container {
    grid-template-columns: 1fr;
  }

  .dashboard-sidebar {
    display: none;
  }
}
</style>
