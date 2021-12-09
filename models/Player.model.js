const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const playerSchema = new Schema({
  name: { type: String, required: true, required: true },
  profileImage: {
    type: String,
    default:
      "https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg",
  },
  event: [{ type: Schema.Types.ObjectId, ref: "Event" }],
});

module.exports = model("Player", playerSchema);
module.exports = Player;
