import styles from "./DeleteButton.module.css";

interface DeleteButtonProps {
    itemId: number;
    ariaLabel: string;
    onDelete: (itemId: number) => void;
}

const DeleteButton = ({ itemId, ariaLabel, onDelete }: DeleteButtonProps) => {

    const handleDeleteClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onDelete(itemId)
    }
    return (
        <button type="button" onClick={(e) => handleDeleteClick(e)} className={styles.redIcon} aria-label={ariaLabel}>X</button>
    )
}

export default DeleteButton;
