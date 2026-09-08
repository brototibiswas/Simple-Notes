import { Transaction } from "sequelize";
import { Note } from "../models/Note.model";
import { Task } from "../models/Task.model";
import { sequelize } from "../config/database";
import { NotFoundError, ValidationError } from "../error/AppError";

export async function getNotes() {
    const notes = await Note.findAll();
    return notes;
}

export async function createNote(title: string) {
    if (!title || title.trim() === "") {
        throw new ValidationError("Note title is required")
    }
    const note = await Note.create({ title: title.trim() })
    return note;
}

export async function deleteNote(id: number) {
    const transaction = await sequelize.transaction()

    try {
        const note = await Note.findByPk(id, { transaction })
        if (!note) {
            throw new NotFoundError(`Note ${id} not found`)
        }

        await Task.destroy({ where: { noteId: note.id }, transaction })
        await Note.destroy({ where: { id: note.id }, transaction })
        await transaction.commit()
    } catch (error) {
        await transaction.rollback()
        throw error
    }
}
