# Midway Ideathon

A web application for conducting technical interviews and assessments.

## Project Structure

```
DevDifference/
├── public/
│   ├── employer-login.html
│   ├── interviewer-login.html
│   ├── role-selection.html
│   ├── landing.html
│   ├── interviewer-dashboard.html
│   ├── assessment-creation.html
│   ├── role-questions.html
│   ├── styles.css
│   └── script.js
├── server.js
└── README.md
```

## Features

- Role-based access (Employer/Interviewer)
- Assessment creation and management
- Interview scheduling
- Question bank management
- Real-time feedback system

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
node server.js
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## Routes

- `/` - Role selection page
- `/login` - Employer login page
- `/interviewer-login` - Interviewer login page
- `/landing` - Employer dashboard
- `/interviewer-dashboard` - Interviewer dashboard
- `/assessment-creation` - Assessment creation page
- `/role-questions` - Role-specific questions page

## API Endpoints

- `POST /api/login` - Employer login
- `POST /api/interviewer/login` - Interviewer login

## Technologies Used

- Node.js
- Express.js
- HTML/CSS/JavaScript 