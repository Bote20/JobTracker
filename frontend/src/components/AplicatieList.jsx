import AplicatieCard from "./AplicatieCard.jsx";
import styles from "./AplicatieList.module.css";

export default function AplicatieList({ aplicatii, onToggle, onDelete }) {
  if (aplicatii.length === 0) {
    return (
      <p className="empty" data-testid="empty">
        Nu există nicio aplicație.
      </p>
    );
  }

  return (
    <ul className={styles.list}>
      {aplicatii.map((aplicatie) => (
        <AplicatieCard
          key={aplicatie.id}
          aplicatie={aplicatie}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
