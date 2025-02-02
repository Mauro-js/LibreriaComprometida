"use strict";

const { Schema, model, models } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    maxlength: [50, 'Name must be less than 200 characters'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    maxlength: [80, 'Email must be less than 200 characters'],
    unique: true,
    trim: true
  },
  rol: {
    type: Schema.Types.ObjectId,
    ref: 'Role',
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
});

export default models.User || model("User", userSchema);
