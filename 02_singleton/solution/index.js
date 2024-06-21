const express = require("express");
const session = require("express-session");

const app = express();
const PORT = 3000;

const users = {
  user1: "password1",
  user2: "password2",
};


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
