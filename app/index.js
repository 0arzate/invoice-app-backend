import express, { json } from 'express'
import cors from 'cors'

import { PORT } from './constants/index.js'
import { homeRouter } from './routes/home/home.routes.js'
import { invoicesRouter } from './routes/invoices/invoices.routes.js'

const app = express()

app.use(json())
app.use(cors())

app.use(homeRouter)
app.use(invoicesRouter)

app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
