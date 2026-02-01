"use strict";

const { model, Schema, Types } = require("mongoose"); // Erase if already required

const DOCUMENT_NAME = "shop";
const COLECTION_NAME = "Shops";
// Declare the Schema of the Mongo model
const shopSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      maxLength: 150,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
    verify: {
      type: Schema.Types.Boolean,
      default: false,
    },
    rules: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true, collection: COLECTION_NAME },
);
const Shop = mongoose.model(DOCUMENT_NAME, shopSchema);

//Export the model
module.exports = Shop;
