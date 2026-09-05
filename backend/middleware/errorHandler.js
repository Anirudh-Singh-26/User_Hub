function notFound(req, res) {
  res.status(404).json({
    success: false,
    message: "Route not found.",
  });
}

function errorHandler(error, req, res) {
  console.error(error);

  if (error.code === 11000) {
    return res.status(409).json({
      success: false,
      message: "A user with this email already exists.",
    });
  }

  if (error.name === "ValidationError") {
    const errors = {};

    Object.values(error.errors).forEach((item) => {
      errors[item.path] = item.message;
    });

    return res.status(400).json({
      success: false,
      message: "Validation failed.",
      errors,
    });
  }

  res.status(500).json({
    success: false,
    message: "Internal server error.",
  });
}

module.exports = { notFound, errorHandler };
