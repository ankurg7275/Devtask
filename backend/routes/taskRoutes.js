import express from "express";
import Task from "../models/Task.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// GET tasks with optional filtering by status/dueDate
router.get("/", auth, async (req, res) => {
  const { status, dueDate } = req.query;
  const query = { userId: req.user.userId };
  if (status) query.status = status;
  if (dueDate) query.dueDate = new Date(dueDate);

  const tasks = await Task.find(query).sort({ dueDate: 1, createdAt: -1 });
  res.json(tasks);
});

// CREATE
router.post("/", auth, async (req, res) => {
  const { title, description, status, dueDate } = req.body;
  const task = new Task({
    title,
    description,
    status: status || "Pending",
    dueDate: dueDate ? new Date(dueDate) : undefined,
    userId: req.user.userId
  });
  await task.save();
  res.json(task);
});

// UPDATE
router.put("/:id", auth, async (req, res) => {
  const updateFields = { ...req.body };
  if (updateFields.dueDate) updateFields.dueDate = new Date(updateFields.dueDate);

  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.userId },
    updateFields,
    { new: true }
  );
  res.json(task);
});

// DELETE
router.delete("/:id", auth, async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.userId });
  res.json({ message: "Task deleted" });
});

export default router;
