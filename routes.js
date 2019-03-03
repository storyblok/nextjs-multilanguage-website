const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('blog', '/:language/blog')
routes.add('blog/detail', '/:language/blog/:slug')
routes.add('index', '/')