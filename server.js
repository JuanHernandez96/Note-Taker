const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const htmls = require("./routes/html");
const notes = require("./routes/note");

app.use(express.urlencoded ({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use("/api", notes);
app.use("/", htmls);



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})