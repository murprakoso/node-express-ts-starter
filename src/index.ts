import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.json({ message: 'Menyala ✨🎉🚀!!!' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT} 🎉`)
})
