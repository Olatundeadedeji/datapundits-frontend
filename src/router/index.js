import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/userStore'
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
            component: InstructorDashboard,
            children: [
                {
                    path: 'overview',
                    name: 'InstructorOverview',
                    component: () => import('../views/instructor/Overview.vue')
                },
                {
                    path: 'courses',
                    name: 'InstructorCourses',
                    component: () => import('../views/instructor/Courses.vue')
                },
                {
                    path: 'students',
                    name: 'InstructorStudents',
                    component: () => import('../views/instructor/Students.vue')
                },
                {
                    path: 'earnings',
                    name: 'InstructorEarnings',
                    component: () => import('../views/instructor/Earnings.vue')
                },
                {
                    path: 'reviews',
                    name: 'InstructorReviews',
                    component: () => import('../views/instructor/Reviews.vue')
                },
                {
                    path: '',
                    redirect: { name: 'InstructorDashboard' }
                }
            ],
            meta: { requiresAuth: true, requiresInstructor: true }
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: () =>
                import ('../views/NotFound.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/Login.vue')
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import('../views/Register.vue')
        },
        {
            path: '/dashboard',
            component: () => import('../views/StudentDashboard.vue'),
            meta: { requiresAuth: true },
            children: [
                {
                    path: 'profile',
                    name: 'StudentProfile',
                    component: () => import('../views/dashboard/Profile.vue')
                },
                {
                    path: 'my-courses',
                    name: 'MyCourses',
                    component: () => import('../views/dashboard/MyCourses.vue')
                },
                {
                    path: 'certificates',
                    name: 'Certificates',
                    component: () => import('../views/dashboard/Certificates.vue')
                }
            ]
        }
    ]
})

// Navigation guards
router.beforeEach((to, from, next) => {
    const userStore = useUserStore()

    // Check if route requires authentication
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!userStore.isAuthenticated) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
            return
        }

        // Check for specific role requirements
        if (to.matched.some(record => record.meta.requiresInstructor)) {
            if (!userStore.isInstructor) {
                next({ name: 'Home' })
                return
            }
        }

        if (to.matched.some(record => record.meta.requiresAdmin)) {
            if (!userStore.isAdmin) {
                next({ name: 'Home' })
                return
            }
        }
    }

    next()
})

export default router
