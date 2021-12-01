process.stdout.write("\x1B[2J\x1B[0f");
require("dotenv").config();
const express = require("express");

const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

const router = require("./routes/index");

mongoose.connect(
  process.env.MONGO_URL,
  {
    dbName: process.env.MONGO_DB || "test",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      throw new Error(err);
    }
    console.info("Connected to MongoDB " + process.env.MONGO_DB);
  }
);

const app = express()
  .use(cors())
  .use(morgan("dev"))
  .use(express.json())
  .use("/api", router);

app.listen(process.env.PORT, (err) => {
  if (err) {
    throw new Error(err);
  }
  console.info(">".repeat(40));
  console.info("Server life");
  console.info("HOST: ", process.env.APP_HOST);
  console.info("PORT: ", process.env.PORT);
  console.info(">".repeat(40) + "\n");
});
