import express from "express";
import cors from "cors";
import loginRouter from './routes/login.js'
import infoRouter from './routes/info.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('./views'))

app.use('/api', infoRouter)
app.use('/register', loginRouter)



app.listen(process.env.PORT || 8081, console.log('http://localhost:8081'))