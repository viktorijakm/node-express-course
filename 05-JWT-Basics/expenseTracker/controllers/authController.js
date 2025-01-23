// controllers/authController.js
const jwt = require('jsonwebtoken');

// Mock user data (replace with database logic in a real application)
const users = [
    { id: 1, username: 'user1', password: 'password123' },
    { id: 2, username: 'user2', password: 'password456' },
];

const login = (req, res) => {
    const { username, password } = req.body;

    // Find the user from the mock users database
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user.id, username: user.username }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.status(200).json({ message: 'Login successful', token });
};

module.exports = { login };
