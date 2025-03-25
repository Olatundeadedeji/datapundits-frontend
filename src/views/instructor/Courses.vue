<template>
  <div class="courses">
    <div class="header">
      <h2>My Courses</h2>
      <button class="create-course-btn">
        <i class="fas fa-plus"></i> Create New Course
      </button>
    </div>

    <div class="courses-grid">
      <div v-for="course in courses" :key="course.id" class="course-card">
        <img :src="course.image" :alt="course.name" class="course-image">
        <div class="course-content">
          <h3>{{ course.name }}</h3>
          <p class="course-description">{{ course.description }}</p>
          <div class="course-stats">
            <span><i class="fas fa-users"></i> {{ course.students }} students</span>
            <span><i class="fas fa-star"></i> {{ course.rating }}</span>
          </div>
          <div class="course-actions">
            <button class="edit-btn">Edit</button>
            <button class="view-btn">View</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const courses = ref([
  {
    id: 1,
    name: 'Advanced Data Science',
    description: 'Learn advanced concepts in data science and machine learning',
    image: '/course1.jpg',
    students: 450,
    rating: 4.9
  },
  {
    id: 2,
    name: 'Web Development Fundamentals',
    description: 'Master the basics of web development',
    image: '/course2.jpg',
    students: 380,
    rating: 4.7
  }
])
</script>

<style scoped>
.courses {
  padding: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.create-course-btn {
  background: var(--accent-color);
  color: var(--primary-black);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.course-card {
  background: var(--secondary-black);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--tertiary-black);
}

.course-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
}

.course-content {
  padding: 1.5rem;
}

.course-description {
  color: var(--text-secondary);
  margin: 0.5rem 0;
}

.course-stats {
  display: flex;
  gap: 1rem;
  color: var(--text-secondary);
  margin: 1rem 0;
}

.course-actions {
  display: flex;
  gap: 1rem;
}

.edit-btn,
.view-btn {
  flex: 1;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
}

.edit-btn {
  background: var(--tertiary-black);
  color: var(--text-primary);
}

.view-btn {
  background: var(--accent-color);
  color: var(--primary-black);
}
</style>

