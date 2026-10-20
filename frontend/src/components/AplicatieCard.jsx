// Un singur element din listă, primit prin props.
const ETICHETE_MOD_LUCRU = { hibrid: "hibrid", remote: "remote", birou: "la birou" };

export default function AplicatieCard({ aplicatie }) {
  return (
    <li className={aplicatie.intervievat ? "task-card done" : "task-card"}>
      <div>
        <h3>{aplicatie.titlu}</h3>
        <span className={`badge badge-${aplicatie.modLucru}`}>
          Mod de lucru: {ETICHETE_MOD_LUCRU[aplicatie.modLucru]}
        </span>
      </div>
      <span className="status">{aplicatie.intervievat ? "Intervievat" : "În așteptare"}</span>
    </li>
  );
}