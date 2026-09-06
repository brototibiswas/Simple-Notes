import { Link } from "react-router";
import DeleteButton from "../DeleteIcon/DeleteButton";
import styles from "./NoteCard.module.css";

interface NoteCardProps {
    id: number
    title: string
    onDelete: (id: number) => void
}

const NoteCard = ({ id, title, onDelete }: NoteCardProps) => {
    return (
        <div className={styles.card}>
            <Link to={`/notes/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2 className={styles.cardTitle}>{title}</h2>
                    <DeleteButton itemId={id} ariaLabel={`delete note ${title}`} onDelete={onDelete} />
                </div>
            </Link>
        </div>
    )
}

export default NoteCard;
