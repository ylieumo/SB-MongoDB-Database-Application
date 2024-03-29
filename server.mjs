import express from "express";
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"
import reviews from "./routes/reviews.mjs";
import questions from "./routes/questions.mjs";
import users from "./routes/users.mjs";
import morgan from "morgan";

const ATLAS_URI =process.env.ATLAS_URI
const db = mongoose.connection;
mongoose.connect(ATLAS_URI)

db.on("error", (err) => console.log(err.message + " is mongod not running?"))
db.on("open", () => console.log("mongo connected: ", ATLAS_URI))
db.on("close", () => console.log("mongo disconnected"))

const PORT = 5050;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Welcome to the API.");
});

app.use( users);
app.use( questions);
app.use( reviews);


// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  
});
