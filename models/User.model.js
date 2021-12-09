const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, unique: true, required: [true, "Email is required"] },
  password: { type: String, required: [true, "Password is required"] },
  name: { type: String, required: true, required: true },
  image: {
    type: String,
    default:
      "https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg",
  },
});

module.exports = model("User", userSchema);
module.exports = User;