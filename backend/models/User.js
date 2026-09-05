const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Name is required.",
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    email: {
      type: String,
      required: "Email is required.",
      trim: true,
      lowercase: true,
      unique: true,
    },

    phone: {
      type: String,
      trim: true,
      default: "",
      minlength: 10,
      maxlength: 10,
    },

    role: {
      type: String,
      enum: ["user", "admin", "manager"],
      default: "user",
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model("User", userSchema);
