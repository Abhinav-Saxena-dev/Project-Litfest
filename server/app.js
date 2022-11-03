const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express()

const connectDB = require('./Database/connect')

const derouter = require('./routes/debate_routes')
const jrouter = require('./routes/jam_routes')
const hjrouter = require('./routes/hindijam_routes')
const creative = require('./routes/creative_routes')


dotenv.config({path : './config.env'})

app.use(cors());

app.use(express.json())

app.use(derouter)
app.use(jrouter)
app.use(hjrouter)
app.use(creative)


const PORT = process.env.PORT || 3000
const URL = process.env.DATABASE

connectDB(URL)

app.get('/', (req,res) => {
    res.status(200).json({msg : "Backend server is on"})
})

app.get('debate', (req,res) => {
    res.status(200).json({msg : "Link working"})
})

app.listen(PORT, () => {
    console.log('server started on port 8000...');
})