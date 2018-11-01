import store from '../store'
export const authorizeToken = (to, from, next) => {
  if (to.matched.some(recode => recode.meta.requiresAuth)) {
    if (!store.state.auth || !store.state.auth.token) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
}
