const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    // { useNewUrlParser:true,useUnifiedTopology:true}
    ).then(console.log("Connected to MongoDB Atlas!")
);

// M I D D L E W A R E 
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users" ,userRoute);
app.use("/api/auth" ,authRoute);

app.listen(8800, ()=>{
    console.log("Server started at port 8800");
})