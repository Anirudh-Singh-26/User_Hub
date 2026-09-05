# User Management Dashboard

A full-stack User Management Dashboard built using the MERN stack as a task assignment.

The application provides user CRUD operations, dashboard statistics, search and filtering, along with a custom theming system that supports preset themes, custom button colors, custom font uploads, and theme persistence.

## Tech Stack

### Frontend

* React
* React Router
* JavaScript
* Vite
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose


## JavaScript / TypeScript Choice

TypeScript was listed as preferred for the frontend, but it was not mandatory for the assignment. Given the 24-hour development window, I chose JavaScript to keep the implementation straightforward and dedicate more time to building, testing, and refining the core requirements, particularly the CRUD functionality and custom theming system.



## Features

### Dashboard

* Displays the total number of registered users.
* User count is fetched from the backend.

### User Management

* Create users
* View user details
* Update users
* Delete users with confirmation
* Search users by name, email, or phone
* Filter users by role and status
* Data is persisted in MongoDB

Each user contains:

* Name
* Email
* Phone
* Role
* Status

### Validation

Validation is handled on both the frontend and backend, including:

* Required fields
* Name length
* Email format
* Phone number
* Role and status
* Duplicate email handling

### Custom Theming

The application includes a custom-built theming system without using an external UI or theming library.

Four presets are available:

* Blue
* Violet
* Emerald
* Darcula

Users can also:

* Select a custom button color
* Reset the button color to the preset default
* Upload `.ttf`, `.otf`, `.woff`, and `.woff2` font files
* Apply the uploaded font across the application

Theme preferences are stored in `localStorage`, including the selected preset, button color, and custom font. These settings are restored when the application is opened again.

---

## Installation & Setup

### Backend

Move to the backend directory and install the dependencies:

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Start the backend:

```bash
npm run dev
```

The backend runs on `http://localhost:5000`.

### Frontend

Open another terminal and move to the frontend directory:

```bash
cd frontend
npm install
```

Create a `.env` file inside the `frontend` directory:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

The local frontend URL will be displayed by Vite in the terminal.

---

## Sample Data

A `seed.js` file is included in the backend to quickly populate the database with sample users.

From the backend directory, run:

```bash
node seed.js
```

The script clears the existing User collection and adds sample users with different roles and statuses. This makes it easier to test the dashboard, search, filters, and CRUD operations.

---

## API Endpoints

| Method | Endpoint       | Description                  |
| ------ | -------------- | ---------------------------- |
| GET    | `/users`       | Get all users                |
| GET    | `/users/count` | Get total user count         |
| GET    | `/users/:id`   | Get a single user            |
| POST   | `/users`       | Create a user                |
| PUT    | `/users/:id`   | Update a user                |
| DELETE | `/users/:id`   | Delete a user                |

Example user:

```json
{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "phone": "9876543210",
  "role": "user",
  "status": "active"
}
```

---

## Environment & MongoDB Credentials

The actual MongoDB connection string is intentionally not included in this submission because it contains private database credentials.

A `.env.example` file is provided to show the required environment variables. To run the project, add your own MongoDB connection string to `backend/.env`.

The actual `.env` file is excluded from the submitted project.

---

## Implementation Notes

* API requests are kept in a dedicated service layer.
* User state and CRUD operations are handled through a custom React hook.
* Theme state is managed using React Context.
* Theme preferences are persisted using `localStorage`.
* CSS variables are used to apply theme changes across the application.
* Backend routes, controllers, models, validation, database configuration, and error handling are separated into dedicated files.
* No external UI or theming library is used.

---

## Known Limitations

- The application does not include authentication, as it was not required for this assignment.
- User records are stored in MongoDB, while theme preferences are stored in browser localStorage as intended for client-side UI preferences.


---

## Author

Developed as a MERN stack task assignment.
