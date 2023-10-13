const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', 'views'); // Path to the views directory

// Serve static files from the "public" directory
app.use(express.static('public'));

// Handle the redirection route
app.get('/orderinfo/19485246/guid/05A10DECE304028FE0634D37A8C09FFB', (req, res) => {
    // Render the index.ejs file
    res.render('index');
});

app.get('/', (req, res) => {
    // Render the index.ejs file
    res.render('redirect');
});

app.listen(port, () => {
    console.log(`✅ PORT: ${port}`);
});