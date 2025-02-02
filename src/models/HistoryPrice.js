"use strict";

const { Schema, model, models } = require("mongoose");

const historyPriceSchema = new Schema({
  article: {
    type: Schema.Types.ObjectId,
    ref: 'Article',
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
});

export default models.HistoryPrice || model("HistoryPrice", historyPriceSchema);
