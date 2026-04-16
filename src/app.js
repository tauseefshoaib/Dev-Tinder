const express = require("express");
const connectDB = require("./config/db");
const User = require("./models/user");
const app = express();

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Virat",
    lastName: "Kohli",
    email: "viratkohli@gmail.com",
    password: "virat@123",
  });

  await user.save();
  res.send("User added successfully!");
});

connectDB()
  .then(() => {
    console.log("DB connected successfully.");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Error occurred while connecting to database.", err);
  });
