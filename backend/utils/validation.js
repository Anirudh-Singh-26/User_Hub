const mongoose = require("mongoose");

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

function validateUserPayload(body, { partial = false } = {}) {
  const errors = {};

  if (!partial || body.name !== undefined) {
    if (!body.name || !body.name.trim()) {
      errors.name = "Name is required.";
    } else if (body.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters.";
    } else if (body.name.trim().length > 50) {
      errors.name = "Name cannot exceed 50 characters.";
    }
  }

  if (!partial || body.email !== undefined) {
    if (!body.email || !body.email.trim()) {
      errors.email = "Email is required.";
    } else if (!EMAIL_REGEX.test(body.email.trim())) {
      errors.email = "Please provide a valid email address.";
    }
  }

  if (body.phone && !/^\d{10}$/.test(body.phone)) {
    errors.phone = "Phone number must be 10 digits.";
  }

  if (body.role && !["user", "admin", "manager"].includes(body.role)) {
    errors.role = "Invalid role.";
  }

  if (body.status && !["active", "inactive"].includes(body.status)) {
    errors.status = "Invalid status.";
  }

  return errors;
}

function pickUserFields(body) {
  const data = {};

  if (body.name !== undefined) {
    data.name = body.name.trim();
  }

  if (body.email !== undefined) {
    data.email = body.email.trim().toLowerCase();
  }

  if (body.phone !== undefined) {
    data.phone = body.phone.trim();
  }

  if (body.role !== undefined) {
    data.role = body.role;
  }

  if (body.status !== undefined) {
    data.status = body.status;
  }

  return data;
}

module.exports = {
  isValidObjectId,
  validateUserPayload,
  pickUserFields,
};
