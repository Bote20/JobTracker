import { useEffect, useState } from "react";
import AplicatieList from "./components/AplicatieList.jsx";
import AplicatieForm from "./components/AplicatieForm.jsx";
import {
  createAplicatie,
  deleteAplicatie,
  fetchAplicatii,
  updateAplicatie,
} from "./api.js";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [aplicatii, setAplicatii] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tema, setTema] = useState(temaInitiala);

  // Rulează o singură dată, după prima randare
  useEffect(() => {
    let ignore = false; // nu se setează state dacă pagina s-a închis între timp
    async function load() {
      try {
        const data = await fetchAplicatii();
        if (!ignore) setAplicatii(data);
      } catch (err) {
        if (!ignore) {
          setError(`Nu am putut încărca datele: ${err.message}. Rulează npm run api?`);
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => {
      ignore = true;
    };
  }, []);

  // Întâi serverul, apoi state-ul: pe ecran ajunge doar ce s-a salvat.
  // Fără try: eroarea ajunge înapoi în formular, care o afișează lângă câmpuri.
  async function handleAdd(aplicatie) {
    const creata = await createAplicatie(aplicatie); // serverul întoarce elementul cu id
    setAplicatii((prev) => [...prev, creata]);
  }

  async function handleToggle(id) {
    const aplicatie = aplicatii.find((a) => a.id === id);
    try {
      const actualizata = await updateAplicatie(id, { intervievat: !aplicatie.intervievat });
      setAplicatii((prev) => prev.map((a) => (a.id === id ? actualizata : a)));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteAplicatie(id);
      setAplicatii((prev) => prev.filter((a) => a.id !== id));
    } catch (err) {
      setError(err.message);
    }
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
          <h2>Adaugă aplicație</h2>
          <AplicatieForm onAdd={handleAdd} />
        </section>

        <section className="panel">
          <h2>Aplicațiile mele</h2>

          {loading && (
            <p className="info" data-testid="loading">
              Se încarcă lista...
            </p>
          )}

          {error && (
            <p className="error" data-testid="error">
              {error}
            </p>
          )}

          {!loading && (
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
