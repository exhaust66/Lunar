const express = require('express');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes'); 
const adminRoute = require('./routes/adminRoute');
require('dotenv').config();
require("./sync"); // Ensure this runs before starting the server

const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Use studentRoutes for all student-related routes
app.use('/api/students', studentRoutes);  
app.use('/api/admin', adminRoute);

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});