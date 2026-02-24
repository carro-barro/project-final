import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import "dotenv/config"
import listEndpoints from "express-list-endpoints"

import userRoutes from "./routes/userRoutes"
import clothesRoutes from "./routes/clothesRoutes"

const port = process.env.PORT || 8080
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/final-project"
mongoose.connect(mongoUrl)
// mongoose.Promise = Promise


const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  const endpoints = listEndpoints(app)
  res.json({
    message: "Welcome to WearDrobe API",
    endpoints: endpoints
  })
})

app.use("/users", userRoutes)
app.use("/clothes", clothesRoutes)

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
