import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// NavLink marchează singur pagina curentă
function navClass({ isActive }) {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
}

// Antetul, navigația și subsolul, scrise o singură dată pentru toate paginile
export default function Layout() {
  const [tema, setTema] = useState(temaInitiala);

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <span className={styles.logo}>JobTracker</span>
          <nav className={styles.nav} data-testid="nav">
            <NavLink to="/" end className={navClass}>
              Aplicații
            </NavLink>
            <NavLink to="/despre" className={navClass}>
              Despre
            </NavLink>
          </nav>
          <button className={styles.theme} onClick={handleTema} aria-pressed={tema === "dark"}>
            {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
          </button>
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>Proiect Tehnologii Web</footer>
    </>
  );
}
