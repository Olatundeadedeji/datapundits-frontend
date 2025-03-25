<template>
  <div id="app">
    <header class="header">
      <nav>
        <div class="logo">
          Datapundits
        </div>
        <div class="nav-links">
          <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
          <router-link :to="{ name: 'About' }" class="nav-link">About</router-link>
          <router-link :to="{ name: 'Courses' }" class="nav-link">Courses</router-link>
          <router-link :to="{ name: 'Contact' }" class="nav-link">Contact</router-link>
          <router-link :to="{ name: 'Profile' }" class="nav-link">Profile</router-link>
        </div>
      </nav>
    </header>

    <main class="main-content">
      <router-view></router-view>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Footer from './components/Footer.vue'
</script>

<style>
:root {
  --primary-black: #121212;
  --secondary-black: #1E1E1E;
  --tertiary-black: #2D2D2D;
  --accent-color: #00FF94;
  --text-primary: #FFFFFF;
  --text-secondary: #B3B3B3;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--primary-black);
  color: var(--text-primary);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: var(--secondary-black);
  border-bottom: 1px solid var(--tertiary-black);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

nav {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-color);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.nav-link:hover {
  color: var(--accent-color);
}

.router-link-active {
  color: var(--accent-color);
  background-color: var(--tertiary-black);
}

.main-content {
  margin-top: 4rem;
  flex: 1;
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .main-content {
    padding: 1rem;
  }
}
</style>
