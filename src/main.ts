// eslint-disable-next-line @typescript-eslint/no-var-requires
const version: string = require('./../../package.json').version //Currently Directory based On Dist
// eslint-disable-next-line @typescript-eslint/no-var-requires
const author: string = require('./../../package.json').author //Currently Directory based On Dist

import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import { appRunningMessage } from './common/system-message/app-runing.message'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.json({ message: 'Menyala ✨🎉🚀!!!' })
})

const PORT = process.env.APP_PORT ?? 3000
app.listen(PORT, () => {
  console.log(appRunningMessage(version))
})
