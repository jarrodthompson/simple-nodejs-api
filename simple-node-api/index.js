// Import Express | Declare Variables
const express = require('express');
const app = express();
const PORT = 5555;

// Declare / Initialize Middleware

app.use(express.json());

// Use port and display server live message in terminal (Use Node js listen function), first arg

app.listen(
    PORT,
    () => console.log(`API is live on http://localhost:${PORT}`)
)

// Declare / Create Endpoint Followed by req, res arg and Callback Function

app.get('/names', (req, res)=> {
    res.status(200).send({
        firstName: 'Jarrod',
        lastName: 'Thompson',
        myAge: '28',
        jobTitle: 'Web Developer',
        citizenship: 'South African | British'

    })
    
});