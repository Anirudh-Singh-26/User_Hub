# User Management Dashboard - Frontend

Frontend for the User Management Dashboard built with **React, React Router, Vite and CSS**.

## Features

* Dashboard with total user count
* User CRUD interface
* Search and filtering
* User details and edit forms
* Delete confirmation
* Custom theme presets
* Custom button color
* Custom font upload
* Theme persistence using `localStorage`

## Structure

```text
src/
├── components/
├── context/
├── hooks/
├── pages/
├── services/
└── utils/
```

## Setup

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000
```

Start the development server:

```bash
npm run dev
```

Vite will provide the local URL in the terminal.

## Theme System

The frontend includes four built-in themes:

* Blue
* Violet
* Emerald
* Darcula

Theme preferences, including custom button color and uploaded font, are saved in `localStorage`.

## Notes

The frontend is implemented in JavaScript. TypeScript was preferred but not mandatory for the assignment, and JavaScript was chosen to keep the implementation straightforward within the 24-hour development window.

---

Built as part of a MERN stack task assignment.
