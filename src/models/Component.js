"use strict";

const { Schema, model, models } = require("mongoose");

const componentSchema = new Schema({
  type: {
    type: String,
    enum: ["enable", "disable"],
    required: true
  },
  active: {
    type: Boolean,
    required: true
  },
  listImage: [{
    type: Schema.Types.ObjectId,
    ref: 'Image'
  }],
  listArticle: [{
    type: Schema.Types.ObjectId,
    ref: 'Article'
  }],
  options: {
    type: Schema.Types.Mixed
  }
}, {
  timestamps: true,
  versionKey: false
});

export default models.Component || model("Component", componentSchema);
