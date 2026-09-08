import { NextFunction, Request, Response } from "express"
import * as notesService from "../services/notes.service"

export async function getNotes(req: Request, res: Response, next: NextFunction) {
    try {
        const notes = await notesService.getNotes()
        res.status(200).json(notes)
    } catch (e) {
        next(e)
    }
}

export async function createNote(req: Request, res: Response, next: NextFunction) {
    try {
        const note = await notesService.createNote(req.body.title)
        res.status(201).json(note)
    } catch (e) {
        next(e)
    }
}

export async function deleteNote(req: Request, res: Response, next: NextFunction) {
    try {
        const noteId = req.params.id
        await notesService.deleteNote(Number(noteId))
        res.status(204).send()
    } catch (e) {
        next(e)
    }
}
