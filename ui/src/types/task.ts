export type Note = {
    id: number
    title: string
    timeStamp: number
}

export type Task = {
    id: number;
    content: string;
    noteId: number;
    timeStamp: number;
}
