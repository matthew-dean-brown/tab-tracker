import express from "express";
import cors from "cors";
import infoRouter from './routes/info.js'
import loginRouter from './routes/login.js'

const ensureToken = (req,res,next) =>{
    console.log(req.body)
    next()
}
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('/views'))
app.use('/api',ensureToken,infoRouter)
app.use('/register', loginRouter)




app.listen(process.env.PORT || 8081, console.log('http://localhost:8081'))