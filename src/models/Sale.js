"use strict";

const { Schema, model, models } = require("mongoose");

const saleSchema = new Schema({
  total: {
    type: Number,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  listSales: [{
    article: {
      type: Schema.Types.ObjectId,
      ref: 'Article',
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  }]
}, {
  timestamps: true,
  versionKey: false
});

export default models.Sale || model("Sale", saleSchema);
