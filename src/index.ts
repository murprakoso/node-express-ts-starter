import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({ message: 'Menyala ✨🎉🚀!!!' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`)
})
