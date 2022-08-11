const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost/Waifus`);

const userSchema = mongoose.Schema({
  user: String,
  password: String,
  images: Array
});

module.exports.User = mongoose.model('User', userSchema);