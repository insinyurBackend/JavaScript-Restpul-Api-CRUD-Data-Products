import express from "express"
import fileUpload from "express-fileupload"
import cors from "cors"
import "dotenv/config"

const app = express()
const port = process.env.APP_PORT

app.use(express.json())
app.use(fileUpload())
app.use(cors())

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})