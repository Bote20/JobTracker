import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import AplicatiiPage from "./pages/AplicatiiPage.jsx";
import AplicatieDetaliuPage from "./pages/AplicatieDetaliuPage.jsx";
import DesprePage from "./pages/DesprePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

// Harta rutelor. Layout înconjoară fiecare pagină.
// Ruta de detaliu folosește resursa din tw.json: /aplicatii/:id
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<AplicatiiPage />} />
        <Route path="/aplicatii/:id" element={<AplicatieDetaliuPage />} />
        <Route path="/despre" element={<DesprePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
