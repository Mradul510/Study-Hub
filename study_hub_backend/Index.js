const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/studyhub`)
.then(() => console.log(`Successfully connected to MongoDB...`))
.catch(err => console.error(`Connection error:`, err));

app.get(`/`, (req, res) => {
    res.send(`Welcome to the Study Hub!`);
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
