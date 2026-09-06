import { useParams } from "react-router-dom";
import { useNotesContext } from "../../context/NotesContext";
import globalStyles from "../../styles/global_styles.module.css";
import TaskContainer from "../../components/TaskContainer/TaskContainer";

const NotePage = () => {
    const { noteId } = useParams();
    const { notes } = useNotesContext();

    const getNoteTitle = () => {
        if (!noteId) return "No notes found";
        const note = notes.find(note => note.id === Number(noteId));
        return note ? note.title : "No notes found";
    }

    return (
        <div className={`${globalStyles.container} ${globalStyles.center}`} style={{ backgroundColor: '#f0f0f0' }}>
            <h1 style={{ fontWeight: 'bold' }}>{getNoteTitle()}</h1>
            <TaskContainer noteId={noteId} />
        </div >
    )
}

export default NotePage;
