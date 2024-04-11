import * as Path from 'node:path'
import express from 'express'

// import about from './routes/website'
// import shop from './routes/website'
// import contact from './routes/website'

const server = express()
server.use(express.json())
// server.use('/api/v1/about', about)
// server.use('/api/v1/shop', shop)
// server.use('/api/v1/contact', contact)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
