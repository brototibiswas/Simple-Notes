import { Router } from "express"
import * as notesController from "../controller/notes.controller"

const router = Router()
router.get("/", notesController.getNotes)
router.post("/", notesController.createNote)
router.delete("/:id", notesController.deleteNote)

export default router
