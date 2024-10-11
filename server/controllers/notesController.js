import { ErrorHandler } from "../middleware/errorHandler.js";
import { Note } from "../models/notesModels.js";
import { Sessional } from "../models/sessionalModel.js";
import { User } from "../models/userModel.js";

export const createNote = ErrorHandler(async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description || !req.file) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const user = await User.findById(req.user._id);
  if (user.role !== "teacher") {
    return res.status(403).json({ message: "Only teachers can create notes" });
  }

  const newNote = await Note.create({
    title,
    description,
    notesPdf: req.file.path.replace("\\", "/"),
    userId: req.user._id,
  });
  newNote.sessionalPaper.push(newNote._id);
  await newNote.save();

  if (!newNote) {
    return res.status(500).json({ message: "Error creating note" });
  }
  return res.status(201).json({
    message: "Note created successfully",
    note: newNote,
  });
});

// create semester sessional notes

export const createSemesterSessionalNotes = ErrorHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  if (!title || !description || !req.file) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const semester = await Note.findById(id);
  if (!semester) {
    return res
      .status(404)
      .json({ message: "No semester found", success: false });
  }

  const createSessional = await Sessional.create({
    title,
    description,
    sessionalPdf: req.file.path.replace("\\", "/"),
    user: req.user._id,
    note: semester._id,
  });

  if (!createSessional) {
    return res.status(500).json({ message: "Error creating createSessinal" });
  }

  return res.status(200).json({ message: "Success", createSessional });
});

// get all notes

export const getAllNotes = ErrorHandler(async (req, res) => {
  const allNotes = await Note.find();
  if (!allNotes) {
    return res.status(404).json({ message: "No Semester Found" });
  }
  return res.status(200).json({ message: "success", allNotes });
});

// all sessionalPapers by Semester

export const getAllSessionalNotes = ErrorHandler(async (req, res) => {
  const { id } = req.params;
  const semester = await Note.findById(id);
  if (!semester) {
    return res
      .status(404)
      .json({ message: "No semester found", success: false });
  }
  const allSessionalNotes = await Sessional.find({ note: id });
  if (!allSessionalNotes || allSessionalNotes.length === 0) {
    return res.status(404).json({ message: "No Sessional Found" });
  }
  return res.status(200).json({ message: "success", allSessionalNotes });
});