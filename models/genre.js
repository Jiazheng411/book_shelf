var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: { type: String, required: true, maxlength: 100, minlength: 3}
  }
);

// Virtual for GenreSchema's URL
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this.name;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);