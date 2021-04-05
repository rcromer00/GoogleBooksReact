const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const { default: connectDB } = require("./config/db");

const PORT = process.env.PORT || 3001;
const app = express();

connectDB();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  
  app.get('/books', (req, res) => {
    request(
      { url: 'https://books.google.com/books' },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: 'error', message: err.message });
        }
  
        res.json(JSON.parse(body));
      }
    )
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes)

mongoose.connect(process.envMONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`)
});