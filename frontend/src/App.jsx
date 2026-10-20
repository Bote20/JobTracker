import AplicatieList from "./components/AplicatieList.jsx";

const aplicatii = [
  { id: 1, titlu: "Frontend Developer la UiPath", intervievat: false, modLucru: "hibrid" },
  { id: 2, titlu: "Backend Developer la Bitdefender", intervievat: true, modLucru: "remote" },
  { id: 3, titlu: "Fullstack Developer la Adobe", intervievat: false, modLucru: "birou" }
];

export default function App() {
  const inAsteptare = aplicatii.filter((a) => !a.intervievat).length;

  return (
    <>
      <header className="app-header">
        <h1>JobTracker</h1>
        <p>Gestionează-ți aplicațiile la joburi și urmărește stadiul lor.</p>
        <p className="app-count">
          {aplicatii.length} aplicații, dintre care {inAsteptare} în așteptare
        </p>
      </header>
      <main className="container">
        <section className="panel">
          <h2>Aplicațiile mele</h2>
          {/* Aici am inlocuit textul JSON cu componenta de lista */}
          <AplicatieList aplicatii={aplicatii} />
        </section>
      </main>
    </>
  );
}