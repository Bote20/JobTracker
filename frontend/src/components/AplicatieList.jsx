import AplicatieCard from "./AplicatieCard.jsx";

export default function AplicatieList({ aplicatii }) {
  // Dacă lista este goală
  if (aplicatii.length === 0) {
    return <p className="empty">Nu există nicio aplicație.</p>;
  }

  // Altfel, returnăm lista
  return (
    <ul className="task-list">
      {aplicatii.map((aplicatie) => (
        <AplicatieCard key={aplicatie.id} aplicatie={aplicatie} />
      ))}
    </ul>
  );
}