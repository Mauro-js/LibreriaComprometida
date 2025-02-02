"use strict";

const { Schema, model, models } = require("mongoose");

const groupSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    maxlength: [30, 'Name must be less than 30 characters'],
    trim: true
  }
}, {
  timestamps: true,
  versionKey: false
});

export default models.Group || model("Group", groupSchema);
