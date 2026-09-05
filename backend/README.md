# User Management Backend

Backend API for the User Management Dashboard, built with **Node.js, Express, MongoDB and Mongoose**.

## Features

* User CRUD operations
* User count endpoint
* Search and filtering support
* Request validation
* Duplicate email handling
* Centralized error handling
* MongoDB persistence

## Structure

```text
backend/
├── config/
│   └── db.js
├── controllers/
│   └── userController.js
├── middleware/
│   └── errorHandler.js
├── models/
│   └── User.js
├── routes/
│   └── userRoutes.js
├── utils/
│   └── validation.js
├── app.js
├── seed.js
└── package.json
```

## Setup

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Start the server:

```bash
npm run dev
```

The API runs on `http://localhost:5000`.

## Seed Sample Data

To populate the database with sample users:

```bash
node seed.js
```

The seed script clears the existing users and adds sample data for testing.

## API Endpoints

| Method | Endpoint       | Description                  |
| ------ | -------------- | ---------------------------- |
| GET    | `/users`       | Get all users                |
| GET    | `/users/count` | Get user count               |
| GET    | `/users/:id`   | Get a single user            |
| POST   | `/users`       | Create user                  |
| PUT    | `/users/:id`   | Update user                  |
| DELETE | `/users/:id`   | Delete user                  |
    
## Environment

The actual MongoDB connection string is not included in the repository because it contains private credentials. Use `.env.example` to configure your own connection.

---

Built as part of a MERN stack task assignment.
