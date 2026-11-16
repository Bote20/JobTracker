import { Link } from "react-router-dom";
import { ETICHETE_MOD_LUCRU } from "../constants.js";
import styles from "./AplicatieCard.module.css";

export default function AplicatieCard({ aplicatie, onToggle, onDelete }) {
  return (
    <li
      className={aplicatie.intervievat ? `${styles.card} ${styles.done}` : styles.card}
      data-testid="item"
      data-id={aplicatie.id}
    >
      <div className={styles.main}>
        <input
          type="checkbox"
          checked={aplicatie.intervievat}
          onChange={() => onToggle(aplicatie.id)}
          aria-label={`Marchează ${aplicatie.titlu} ca intervievat`}
          data-testid="item-toggle"
        />
        <div>
          <Link
            to={`/aplicatii/${aplicatie.id}`}
            className={styles.title}
            data-testid="item-link"
          >
            {aplicatie.titlu}
          </Link>
          <span className={`badge badge-${aplicatie.modLucru}`}>
            Mod de lucru: {ETICHETE_MOD_LUCRU[aplicatie.modLucru]}
          </span>
        </div>
      </div>
      <button
        className="btn-danger"
        onClick={() => onDelete(aplicatie.id)}
        aria-label={`Șterge ${aplicatie.titlu}`}
        data-testid="item-delete"
      >
        Șterge
      </button>
    </li>
  );
}
