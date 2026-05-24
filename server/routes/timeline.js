const router = require("express").Router();
const Timeline = require("../models/Timeline");
const auth = require("../middleware/auth");

// Get all timeline items (public)
router.get("/", async (req, res) => {
  try {
    const items = await Timeline.find().sort({ date: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add timeline item (admin only)
router.post("/", auth, async (req, res) => {
  try {
    const item = await Timeline.create(req.body);
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update timeline item (admin only)
router.put("/:id", auth, async (req, res) => {
  try {
    const item = await Timeline.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete timeline item (admin only)
router.delete("/:id", auth, async (req, res) => {
  try {
    await Timeline.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
