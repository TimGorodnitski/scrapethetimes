var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ProductSchema object
// This is similar to a Sequelize model
var SavedArticleSchema = new Schema({
  title: String,
  date: String,
  url: String,
  id: String
});

// This creates our model from the above schema, using mongoose's model method
var SavedArticle = mongoose.model("SavedArticle", SavedArticleSchema);

// Export the Product model
module.exports = SavedArticle;