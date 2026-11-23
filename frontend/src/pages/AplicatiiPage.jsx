import { useEffect, useState } from "react";
import AplicatieList from "../components/AplicatieList.jsx";
import AplicatieForm from "../components/AplicatieForm.jsx";
import {
  createAplicatie,
  deleteAplicatie,
  fetchAplicatii,
  updateAplicatie,
} from "../api.js";
import styles from "./AplicatiiPage.module.css";

export default function AplicatiiPage() {
  const [aplicatii, setAplicatii] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Rulează o singură dată, după prima randare
  useEffect(() => {
    let ignore = false; // nu se setează state dacă pagina s-a închis între timp
    async function load() {
      try {
        const data = await fetchAplicatii();
        if (!ignore) setAplicatii(data);
      } catch (err) {
        if (!ignore) {
          setError(`Nu am putut încărca datele: ${err.message}. Rulează npm run dev în backend?`);
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

  const inAsteptare = aplicatii.filter((a) => !a.intervievat).length;

  return (
    <div className={styles.grid}>
      <section className="panel">
        <h2>Adaugă aplicație</h2>
        <AplicatieForm onAdd={handleAdd} />
      </section>

      <section className="panel">
        <h2>Aplicațiile mele</h2>
        <p className={styles.summary}>
          {aplicatii.length} aplicații, dintre care {inAsteptare} în așteptare
        </p>

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
    </div>
  );
}
