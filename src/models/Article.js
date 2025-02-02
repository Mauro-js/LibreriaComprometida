"use strict";

const { Schema, model, models } = require("mongoose");

const articleSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    maxlength: [30, 'Name must be less than 30 characters'],
    trim: true
  },
  code: {
    type: String,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    maxlength: [200, 'Description must be less than 200 characters'],
    trim: true
  },
  stock: Number,
  max_price: Number,
  actual_price: Number,
  max_off: Number,
  id_group: {
    type: Schema.Types.ObjectId,
    ref: 'Group'
  },
  list_images: {
    type: [String],
    default: [],
  },
}, {
  timestamps: true,
  versionKey: false
});

export default models.Article || model("Article", articleSchema);
