const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Require all models
var SavedArticle = require("./Models/SavedArticle");


// // Define API routes here
// const routes = require("./routes/api.js");
// app.use(routes);



// Route for getting all Articles from the db
app.get("/articles", function(req, res) {
  console.log("get articles is happening")
  // Grab every document in the Articles collection
  SavedArticle.find({})
    .then(function(dbArticle) {
      console.log(dbArticle)
      // If we were able to successfully find Articles, send them back to the client
      res.json(dbArticle);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// Route for saving/updating an Article's associated Note
app.post("/articles", function(req, res) {
  // Create a new note and pass the req.body to the entry
  console.log("req.body: " + req.body)
  SavedArticle.create(req.body)
    .then(function(dbArticle) {
      // If we were able to successfully update an Article, send it back to the client
      res.json(dbArticle);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

app.delete("/articles", function(req, res) {
  // Create a new note and pass the req.body to the entry
  console.log("deleting: " + req.body)
  SavedArticle.deleteOne(req.body[0])
    .then(function(dbArticle) {
      // If we were able to successfully update an Article, send it back to the client
      res.json(dbArticle);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytscrape");

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
