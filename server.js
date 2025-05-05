const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'role-selection.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'employer-login.html'));
});

app.get('/interviewer-login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'interviewer-login.html'));
});

app.get('/landing', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'landing.html'));
});

app.get('/interviewer-dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'interviewer-dashboard.html'));
});

app.get('/assessment-creation', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'assessment-creation.html'));
});

app.get('/role-questions.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'role-questions.html'));
});

// Login endpoints
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    
    // Here you would typically validate against a database
    console.log('Employer login attempt:', { email });
    
    // Redirect to landing page with email
    res.json({ 
        success: true, 
        message: 'Login successful',
        redirect: `/landing?email=${encodeURIComponent(email)}`
    });
});

app.post('/api/interviewer/login', (req, res) => {
    const { email, password } = req.body;
    
    // Here you would typically validate against a database
    console.log('Interviewer login attempt:', { email });
    
    // Redirect to interviewer dashboard with email
    res.json({ 
        success: true, 
        message: 'Login successful',
        redirect: `/interviewer-dashboard?email=${encodeURIComponent(email)}`
    });
});

// Catch-all route to redirect to role selection
app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 