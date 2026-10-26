import AplicatieCard from "./AplicatieCard.jsx";

export default function AplicatieList({ aplicatii, onToggle, onDelete }) {
  if (aplicatii.length === 0) {
    return <p className="empty">Nu există nicio aplicație.</p>;
  }

  return (
    <ul className="item-list">
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