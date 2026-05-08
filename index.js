const express = require('express');
const app = express();

// Serve current folder
app.use(express.static('public'));

app.listen(4000, () => {
    console.log("Server is Running");
});