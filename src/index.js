import express from 'express'
import morgan from 'morgan'
import router from './routers/index.js'
import { engine } from 'express-handlebars'
import { getDirname } from './utils/utils.js'
import path from 'path'

const app = express()

// HTTP logger
app.use(morgan('combined'))

// template
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
    }),
)
app.set('view engine', '.hbs')
app.set('views', path.join(getDirname(import.meta.url), 'resources/views'))

const PORT = process.env.PORT || 5000

router(app)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
