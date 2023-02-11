import authMiddleware from './middlewares/authMiddleware'

const checkRoutes = [
    {
        path: '/checks',
        name: 'checks.index',
        component: () => import('@/views/Checks/IndexView.vue'),
        ...authMiddleware
    },
    {
        path: '/checks/create',
        name: 'checks.create',
        component: () => import('@/views/Checks/CreateView.vue'),
        ...authMiddleware
    }
]

export default checkRoutes;