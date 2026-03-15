import express from "express"
import dotenv from "dotenv"
import connectDb from "./db/db.js"


dotenv.config()

const PORT = process.env.PORT || 11000

const app = express()

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
    connectDb()
})