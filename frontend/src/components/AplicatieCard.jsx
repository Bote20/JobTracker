const ETICHETE_MOD_LUCRU = { hibrid: "hibrid", remote: "remote", birou: "la birou" };

export default function AplicatieCard({ aplicatie, onToggle, onDelete }) {
  return (
    <li className={aplicatie.intervievat ? "item-card done" : "item-card"}>
      <label className="task-main">
        <input
          type="checkbox"
          checked={aplicatie.intervievat}
          onChange={() => onToggle(aplicatie.id)}
        />
        <div>
          <h3>{aplicatie.titlu}</h3>
          <span className={`badge badge-${aplicatie.modLucru}`}>
            Mod de lucru: {ETICHETE_MOD_LUCRU[aplicatie.modLucru]}
          </span>
        </div>
      </label>
      <button
        className="btn-danger"
        onClick={() => onDelete(aplicatie.id)}
        aria-label={`Șterge ${aplicatie.titlu}`}
      >
        Șterge
      </button>
    </li>
  );
}