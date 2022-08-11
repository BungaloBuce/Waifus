const { User } = require('../db/index.js');

let getUser = (user) => {
  return User.find({user});
}

let addImage = (user, url) => {
  return User.updateOne({user}, { $push: { images: url } });
}

let deleteImage = (user, url) => {
  return User.updateOne({user}, { $pull: { images: url } });
}

let addUser = (user, password) => {
  return User.findOneAndUpdate({user}, {password}, {new: true, upsert: true});
}

module.exports = {
  getUser,
  addImage,
  addUser,
  deleteImage
}