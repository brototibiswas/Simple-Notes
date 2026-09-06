import { Task } from "./task"

export type Note = {
    id: number
    title: string
    taskList?: Task[]
}
