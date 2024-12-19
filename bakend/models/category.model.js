const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      default: null,
    },
    isStatus: {
      type: Boolean,
      default: null,
    },
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

const category = mongoose.model("Categories", schema);
module.exports = category;
