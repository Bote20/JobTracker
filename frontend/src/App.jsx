import { useState } from "react";
import AplicatieList from "./components/AplicatieList.jsx";

const APLICATII_INITIALE = [
  { id: 1, titlu: "Frontend Developer la UiPath", intervievat: false, modLucru: "hibrid" },
  { id: 2, titlu: "Backend Developer la Bitdefender", intervievat: true, modLucru: "remote" },
  { id: 3, titlu: "Fullstack Developer la Adobe", intervievat: false, modLucru: "birou" }
];

// Tema de pornire: cea a sistemului de operare
function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [aplicatii, setAplicatii] = useState(APLICATII_INITIALE);
  const [tema, setTema] = useState(temaInitiala);

  // Funcție imutabilă pentru schimbarea stării (bifat/nebifat)
  function handleToggle(id) {
    setAplicatii((prev) =>
      prev.map((a) => (a.id === id ? { ...a, intervievat: !a.intervievat } : a))
    );
  }

  // Funcție imutabilă pentru ștergere
  function handleDelete(id) {
    setAplicatii((prev) => prev.filter((a) => a.id !== id));
  }

  // Funcție pentru schimbarea temei
  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  // Valoare derivată: se recalculează automat
  const inAsteptare = aplicatii.filter((a) => !a.intervievat).length;

  return (
    <>
      <header className="app-header">
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
        <h1>JobTracker</h1>
        <p>Gestionează-ți aplicațiile la joburi și urmărește stadiul lor.</p>
        <p className="app-count">
          {aplicatii.length} aplicații, dintre care {inAsteptare} în așteptare
        </p>
      </header>
      <main className="container">
        <section className="panel">
          <h2>Aplicațiile mele</h2>
          <AplicatieList 
            aplicatii={aplicatii} 
            onToggle={handleToggle} 
            onDelete={handleDelete} 
          />
        </section>
      </main>
    </>
  );
}