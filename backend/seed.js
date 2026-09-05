require("dotenv").config();

const mongoose = require("mongoose");
const User = require("./models/User");

const users = [
  {
    name: "Rahul Sharma",
    email: "rahul@example.com",
    phone: "9876543210",
    role: "admin",
    status: "active",
  },
  {
    name: "Priya Singh",
    email: "priya@example.com",
    phone: "9876543211",
    role: "manager",
    status: "active",
  },
  {
    name: "Anirudh Mehta",
    email: "anirudh@example.com",
    phone: "9876543212",
    role: "user",
    status: "active",
  },
  {
    name: "Neha Verma",
    email: "neha@example.com",
    phone: "9876543213",
    role: "user",
    status: "inactive",
  },
  {
    name: "Karan Gupta",
    email: "karan@example.com",
    phone: "9876543214",
    role: "manager",
    status: "active",
  },
  {
    name: "Aditi Jain",
    email: "aditi@example.com",
    phone: "9876543215",
    role: "user",
    status: "inactive",
  },
];

async function seedDatabase() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing from the environment.");
    }

    await mongoose.connect(process.env.MONGODB_URI);

    await User.deleteMany({});
    await User.insertMany(users);

    console.log("Database seeded successfully.");
    console.log(`${users.length} users added.`);

    await mongoose.disconnect();
  } catch (error) {
    console.error("Seeding failed:", error.message);
    await mongoose.disconnect();
    process.exit(1);
  }
}

seedDatabase();
