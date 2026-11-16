import { useState } from "react";

// Câmpurile și valorile fixe ale temei JobTracker
const MODURI_LUCRU = [
  { value: "hibrid", label: "Hibrid" },
  { value: "remote", label: "Remote" },
  { value: "birou", label: "La birou" },
];
const TITLU_MIN = 3;
const TITLU_MAX = 100;

// Formular controlat: state-ul React este sursa de adevăr pentru câmpuri
export default function AplicatieForm({ onAdd }) {
  const [titlu, setTitlu] = useState("");
  const [modLucru, setModLucru] = useState("hibrid");
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const t = titlu.trim();
    if (t === "") return "Rolul și compania sunt obligatorii.";
    if (t.length < TITLU_MIN) return `Titlul are minimum ${TITLU_MIN} caractere.`;
    if (t.length > TITLU_MAX) return `Titlul are maximum ${TITLU_MAX} de caractere.`;
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault(); // oprește reîncărcarea paginii
    const mesaj = valideaza();
    if (mesaj) {
      setEroare(mesaj);
      return;
    }
    setEroare("");
    setTrimite(true);
    try {
      await onAdd({ titlu: titlu.trim(), modLucru, intervievat: false });
      // golirea câmpurilor doar după ce serverul a confirmat salvarea
      setTitlu("");
      setModLucru("hibrid");
    } catch (err) {
      setEroare(err.message);
    } finally {
      setTrimite(false);
    }
  }

  return (
    <form className="item-form" onSubmit={handleSubmit} noValidate data-testid="form">
      <label>
        Rol & Companie
        <input
          type="text"
          value={titlu}
          onChange={(e) => setTitlu(e.target.value)}
          placeholder="Ex: Frontend Developer la UiPath"
          maxLength={TITLU_MAX}
          aria-invalid={Boolean(eroare)}
          data-testid="form-title"
        />
      </label>
      <label>
        Mod de lucru
        <select
          value={modLucru}
          onChange={(e) => setModLucru(e.target.value)}
          data-testid="form-modLucru"
        >
          {MODURI_LUCRU.map((m) => (
            <option key={m.value} value={m.value}>
              {m.label}
            </option>
          ))}
        </select>
      </label>
      {eroare && (
        <p className="error" data-testid="form-error">
          {eroare}
        </p>
      )}
      <button type="submit" disabled={trimite} data-testid="form-submit">
        {trimite ? "Se salvează..." : "Adaugă aplicația"}
      </button>
    </form>
  );
}
