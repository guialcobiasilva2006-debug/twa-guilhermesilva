import express from 'express'
import itemsRouter from './items/router.js'

const app = express()

app.use((req, res, next) => {
  console.log(req.method, req.url)
  next()
})

app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ ok: true, time: new Date() })
})

app.use('/api/items', itemsRouter)

app.use((req, res) => {
  res.status(404).json({ error: 'not found' })
})

app.listen(3000, () => console.log('Servidor a correr em http://localhost:3000'))