import { defineStore } from 'pinia'

export const useCourseStore = defineStore('course', {
    state: () => ({
        courses: [{
                id: 1,
                name: 'Pandas Fundamentals',
                description: 'Learn the basics of data manipulation with Pandas. Master data analysis techniques using Python\'s most popular data science library.',
                instructor: 'John Doe',
                rating: 4.5,
                enrolled: 1200,
                price: 49.99,
                image: '/images/pandas-course.jpg'
            },
            {
                id: 2,
                name: 'Advanced Data Analysis',
                description: 'Master advanced data analysis techniques including statistical analysis, data visualization, and predictive modeling.',
                instructor: 'Jane Smith',
                rating: 4.8,
                enrolled: 800,
                price: 69.99,
                image: '/images/data-analysis.jpg'
            },
            {
                id: 3,
                name: 'Fundamentals of Machine Learning',
                description: 'Introduction to machine learning concepts including supervised learning, unsupervised learning, and model evaluation.',
                instructor: 'Mike Johnson',
                rating: 4.7,
                enrolled: 1500,
                price: 79.99,
                image: '/images/machine-learning.jpg'
            }
        ],
        selectedCourse: null
    }),
    actions: {
        selectCourse(course) {
            this.selectedCourse = course
        },
        addCourse(course) {
            this.courses.push(course)
        }
    },
    getters: {
        getCourseById: (state) => (id) => {
            return state.courses.find(course => course.id === id)
        },
        totalCourses: (state) => state.courses.length
    }
})