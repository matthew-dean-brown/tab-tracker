import express from 'express';

const router = express.Router()

router.post('/', (req,res)=>{
    res.send({
        message:`Hello ${req.body.email}, You have logged in, Yay!`
    })
})

export default router