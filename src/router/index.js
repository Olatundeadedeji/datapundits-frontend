import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Courses from '../components/CourseList.vue'
import CourseDetailPage from '../views/CourseDetailPage.vue'
import UserProfile from '../components/UserProfile.vue'
import Privacy from '../views/Privacy.vue'
import InstructorDashboard from '../views/InstructorDashboard.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/about', name: 'About', component: About },
        { path: '/contact', name: 'Contact', component: Contact },
        { path: '/courses', name: 'Courses', component: Courses },
        { path: '/courses/:id', name: 'CourseDetails', component: CourseDetailPage },
        { path: '/privacy', name: 'Privacy', component: Privacy },
        { path: '/profile', name: 'Profile', component: UserProfile },
        {
            path: '/instructor',
            name: 'InstructorDashboard',
            component: InstructorDashboard,
            meta: { requiresAuth: true, requiresInstructor: true }
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: () =>
                import ('../views/NotFound.vue')
        }
    ]
})

export default router