import { useEffect, useState } from "react";
import AplicatieList from "./components/AplicatieList.jsx";
import { fetchAplicatii } from "./api.js";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [aplicatii, setAplicatii] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tema, setTema] = useState(temaInitiala);

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const data = await fetchAplicatii();
        if (!ignore) setAplicatii(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => {
      ignore = true;
    };
  }, []);

  function handleToggle(id) {
    setAplicatii((prev) =>
      prev.map((a) => (a.id === id ? { ...a, intervievat: !a.intervievat } : a))
    );
  }

  function handleDelete(id) {
    setAplicatii((prev) => prev.filter((a) => a.id !== id));
  }

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  const inAsteptare = aplicatii.filter((a) => !a.intervievat).length;

  return (
    <>
      <header className="app-header">
        <button className="theme-toggle" onClick={handleTema} aria-pressed={tema === "dark"}>
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
          
          {loading && <p className="info">Se încarcă lista...</p>}
          
          {error && (
            <p className="error">
              Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
            </p>
          )}
          
          {!loading && !error && (
            <AplicatieList 
              aplicatii={aplicatii} 
              onToggle={handleToggle} 
              onDelete={handleDelete} 
            />
          )}
        </section>
      </main>
    </>
  );
}