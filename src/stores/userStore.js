import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      id: null,
      name: null,
      email: null,
      avatar: null,
      role: null, // 'student', 'instructor', or 'admin'
      isAuthenticated: false
    }
  }),

  getters: {
    isStudent: (state) => state.user.role === 'student',
    isInstructor: (state) => state.user.role === 'instructor',
    isAdmin: (state) => state.user.role === 'admin',
    getUserProfile: (state) => state.user,
    isAuthenticated: (state) => state.user.isAuthenticated
  },

  actions: {
    setUser(userData) {
      this.user = {
        ...this.user,
        ...userData,
        isAuthenticated: true
      }
    },

    updateProfile(profileData) {
      this.user = {
        ...this.user,
        ...profileData
      }
    },

    logout() {
      this.user = {
        id: null,
        name: null,
        email: null,
        avatar: null,
        role: null,
        isAuthenticated: false
      }
    }
  }
})