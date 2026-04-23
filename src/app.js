const express = require("express");
const connectDB = require("./config/db");
const User = require("./models/user");
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);

  await user.save();
  res.send("User added successfully!");
});

// get all users
app.get("/feed", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// find a user
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;

  const user = await User.find({ emailId: userEmail });
  res.send(user);
});

// delete a user
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;

  await User.findByIdAndDelete(userId);
  res.send("User deleted successfully!");
});

// update a user
app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;

  await User.findByIdAndUpdate(userId, data);
  res.send("User updated successfully!");
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
