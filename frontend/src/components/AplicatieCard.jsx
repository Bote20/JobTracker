const ETICHETE_MOD_LUCRU = { hibrid: "hibrid", remote: "remote", birou: "la birou" };

export default function AplicatieCard({ aplicatie, onToggle, onDelete }) {
  return (
    <li
      className={aplicatie.intervievat ? "item-card done" : "item-card"}
      data-testid="item"
      data-id={aplicatie.id}
    >
      <label className="task-main">
        <input
          type="checkbox"
          checked={aplicatie.intervievat}
          onChange={() => onToggle(aplicatie.id)}
          data-testid="item-toggle"
        />
        <div>
          <h3 data-testid="item-title">{aplicatie.titlu}</h3>
          <span className={`badge badge-${aplicatie.modLucru}`}>
            Mod de lucru: {ETICHETE_MOD_LUCRU[aplicatie.modLucru]}
          </span>
        </div>
      </label>
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
