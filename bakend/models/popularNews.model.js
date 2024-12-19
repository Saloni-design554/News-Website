const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    image: {
      type: String, 
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const popularnews = mongoose.model("popularnews", schema);
module.exports = popularnews;


