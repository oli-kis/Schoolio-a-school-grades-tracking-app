//Inspired by: https://www.youtube.com/watch?v=l8WPWK9mS5M

import express from "express";

import {
  createSubject,
  getSubject,
  deleteSubject,
  changeSubject,
  getSubjects,
} from "../controllers/subjects.js";

const router = express.Router();

//all routes here are starting with /subject
router.get("/", getSubjects);

router.get("/:id", getSubject);

router.post("/post", createSubject);

router.delete("/:id", deleteSubject);

router.patch("/:id", changeSubject);

export default router;
