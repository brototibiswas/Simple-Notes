import { Task } from "../models/Task.model"
import { ValidationError, NotFoundError } from "../error/AppError"
import { Note } from "../models/Note.model"

export async function getTasksForNote(noteId: number) {
    const tasks = await Task.findAll({ where: { noteId: noteId } })
    return tasks
}

export async function createTaskForNote(noteId: number, content: string) {
    if (!content || content.trim() === "") {
        throw new ValidationError("Task content is required")
    }

    const note = await Note.findByPk(noteId)
    if (!note) {
        throw new NotFoundError(`Note ${noteId} not found`)
    }

    const task = await Task.create({ content: content.trim(), noteId })
    return task
}

export async function updateTask(taskId: number, content: string) {
    if (!content || content.trim() === "") {
        throw new ValidationError("Task content is required")
    }

    const task = await Task.findByPk(taskId)
    if (!task) {
        throw new NotFoundError(`Task ${taskId} not found`)
    }

    task.content = content.trim()
    await task.save()
    return task
}

export async function deleteTasks(taskIds: number[]) {
    await Task.destroy({ where: { id: taskIds } })
}
