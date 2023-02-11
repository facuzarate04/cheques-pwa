
import VueCookies from '@/main.js'

const authMiddleware = {
    beforeEnter: (to, from, next) => {
        if(VueCookies.isKey('token') && VueCookies.isKey('user')) {
            to.name === 'login'
            ? window.location.href = '#/checks'
            : next()
        }else {
            to.name === 'login'
            ? next()
            : window.location.href = '#/checks'
        }
    }
}

export default authMiddleware