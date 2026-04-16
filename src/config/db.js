const mongoose = require("mongoose");
const { dbURL } = require("../utils/appConfig");

const connectDB = async () => {
  await mongoose.connect(dbURL);
};

module.exports = connectDB;
