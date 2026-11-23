import { Router } from "express";
import { parseId, valideazaAplicatie } from "../validation.js";

const router = Router();

// Etapa 9: datele stau în memorie și se pierd la repornire (Etapa 10 le mută în MariaDB)
let aplicatii = [
  { id: 1, titlu: "Frontend Developer la UiPath", intervievat: false, modLucru: "hibrid" },
  { id: 2, titlu: "Backend Developer la Bitdefender", intervievat: true, modLucru: "remote" },
  { id: 3, titlu: "Fullstack Developer la Adobe", intervievat: false, modLucru: "birou" },
  { id: 4, titlu: "React Developer la eMAG", intervievat: false, modLucru: "hibrid" },
  { id: 5, titlu: "Software Engineer la Google", intervievat: true, modLucru: "birou" },
];
let nextId = 6;

// Validează :id și găsește elementul, sau răspunde cu 400 / 404
function gasesteIndex(req, res) {
  const id = parseId(req.params.id);
  if (!id) {
    res.status(400).json({ error: "Id invalid" });
    return -1;
  }
  const index = aplicatii.findIndex((a) => a.id === id);
  if (index === -1) {
    res.status(404).json({ error: "Aplicația nu există" });
  }
  return index;
}

// GET /aplicatii
router.get("/", (req, res) => {
  res.json(aplicatii);
});

// GET /aplicatii/:id
router.get("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;
  res.json(aplicatii[index]);
});

// POST /aplicatii
router.post("/", (req, res) => {
  const { erori, date } = valideazaAplicatie(req.body ?? {});
  if (erori.length > 0) {
    return res.status(400).json({ error: erori.join("; ") });
  }
  const aplicatie = { id: nextId++, ...date };
  aplicatii.push(aplicatie);
  res.status(201).json(aplicatie);
});

// PATCH /aplicatii/:id (modificare parțială)
router.patch("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;
  const { erori, date } = valideazaAplicatie(req.body ?? {}, { partial: true });
  if (erori.length > 0) {
    return res.status(400).json({ error: erori.join("; ") });
  }
  aplicatii[index] = { ...aplicatii[index], ...date };
  res.json(aplicatii[index]);
});

// DELETE /aplicatii/:id
router.delete("/:id", (req, res) => {
  const index = gasesteIndex(req, res);
  if (index === -1) return;
  aplicatii.splice(index, 1);
  res.status(204).end();
});

export default router;
