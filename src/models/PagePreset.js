"use strict";

const { Schema, model, models } = require("mongoose");

const pagePresetSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    maxlength: [15, 'Name must be less than or equal to 15 characters'],
    trim: true
  },
  active: {
    type: Boolean,
    required: true
  },
  listMenu: [{
    type: Schema.Types.ObjectId,
    ref: 'Component'
  }]
}, {
  timestamps: true,
  versionKey: false
});

export default models.PagePreset || model("PagePreset", pagePresetSchema);
