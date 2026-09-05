const mongoose = require("mongoose");

async function connectDB() {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is missing from the environment.");
  }

  await mongoose.connect(MONGODB_URI);

  console.log("MongoDB connected successfully.");
}

module.exports = connectDB;
