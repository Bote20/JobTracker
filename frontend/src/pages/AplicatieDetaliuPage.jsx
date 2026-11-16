import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchAplicatie } from "../api.js";
import { ETICHETE_MOD_LUCRU } from "../constants.js";
import styles from "./AplicatieDetaliuPage.module.css";

export default function AplicatieDetaliuPage() {
  const { id } = useParams(); // text din URL, de exemplu "3"
  const [aplicatie, setAplicatie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Se reîncarcă dacă se schimbă id-ul din adresă
  useEffect(() => {
    let ignore = false;

    fetchAplicatie(id)
      .then((data) => {
        if (!ignore) {
          setAplicatie(data);
          setError(null); // o eroare de la un id anterior nu mai este valabilă
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <p className="info" data-testid="loading">
        Se încarcă...
      </p>
    );
  }

  if (error) {
    return (
      <section className="panel">
        <p className="error" data-testid="error">
          Aplicația nu a putut fi încărcată: {error}
        </p>
        <Link to="/">Înapoi la listă</Link>
      </section>
    );
  }

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>
        Înapoi la listă
      </Link>
      <h2
        className={aplicatie.intervievat ? styles.done : undefined}
        data-testid="detail-title"
      >
        {aplicatie.titlu}
      </h2>
      <dl className={styles.fields}>
        <dt>Mod de lucru</dt>
        <dd>
          <span className={`badge badge-${aplicatie.modLucru}`}>
            {ETICHETE_MOD_LUCRU[aplicatie.modLucru]}
          </span>
        </dd>
        <dt>Status</dt>
        <dd>{aplicatie.intervievat ? "Intervievat" : "În așteptare"}</dd>
        <dt>ID</dt>
        <dd>{aplicatie.id}</dd>
      </dl>
    </section>
  );
}
