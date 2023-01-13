import siteRouter from './site.js'
const route = (app) => {
    app.use('/', siteRouter)
}

export default route
