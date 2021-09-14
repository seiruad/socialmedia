import account from './account.routes.mjs'
import post from './post.routes.mjs'
import user from './user.routes.mjs'


const mountRoutes = (app)  => {
  try {
    app.use('/account', account)
    app.use('/post', post)
    app.use('/user', user)
  } catch (err) {
    next(err)
  }
}

export { mountRoutes }
