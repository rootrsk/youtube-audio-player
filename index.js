const express = require('express')
const cors = require('cors')
const dotenv =require('dotenv')
const app = express()
dotenv.config()
const port = process.env.PORT || 3001
app.use(cors())
app.use(express.json())
const adminRouter = require('./src/routes/admin')
const userRouter = require('./src/routes/user')
require('./src/utils/dbconnect')

app.use('/admin',adminRouter)
app.use('/user',userRouter)

app.listen(port,()=>{
    console.log(`Server started successfully : http://localhost:${port}`)
})