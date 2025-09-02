const express = require('express');
const app = express();
const database = require('./database/db');
const routes = require('./Routes/routes'); // Ensure this is the correct path to the routes file

const PORT = process.env.PORT || 4000;

database(); // Connect to DB

app.use(express.json()); // Middleware to parse JSON requests
app.use('/api/ecom', routes); // Use the routes

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
