# Login Page

A modern, responsive login page built with Node.js and Express.

## Features

- Clean, modern UI with gradient background
- Responsive design
- Form validation
- API endpoint for login
- Remember me functionality
- Forgot password link
- Sign up option

## Project Structure

```
login-page/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── server.js
├── package.json
└── README.md
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Start the production server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Development

- The development server uses nodemon for automatic reloading
- Static files are served from the `public` directory
- API endpoints are defined in `server.js`
- Frontend code is in the `public` directory

## API Endpoints

- `POST /api/login` - Handles login requests
  - Request body: `{ email: string, password: string }`
  - Response: `{ success: boolean, message: string }` 