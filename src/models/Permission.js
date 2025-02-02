"use strict";

const { Schema, model, models } = require("mongoose");

const permissionSchema = new Schema({
  role: {
    type: Schema.Types.ObjectId,
    ref: 'Role',
    required: true
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    maxlength: [15, 'Name must be less than or equal to 15 characters'],
    trim: true
  }
}, {
  timestamps: true,
  versionKey: false
});

export default models.Permission || model("Permission", permissionSchema);
