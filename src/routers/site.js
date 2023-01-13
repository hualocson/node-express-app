import express from 'express'
const route = express.Router()

import siteController from '../app/controllers/SiteController.js'

route.use('/', siteController.home)

export default route
