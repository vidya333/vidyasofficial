const mongoose = require("mongoose");

const timelineSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["experience", "project", "certification", "achievement", "blog", "event", "other"],
    required: true,
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  image: { type: String },
  link: { type: String },
  tags: [String],
  featured: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("Timeline", timelineSchema);
