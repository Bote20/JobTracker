// Validare pe server: datele de la client nu sunt niciodată de încredere.
// Valorile fixe trebuie să fie identice cu cele din frontend/src/constants.js
export const MODURI_LUCRU = ["hibrid", "remote", "birou"];
export const TITLU_MIN = 3;
export const TITLU_MAX = 100;

// partial = true pentru PATCH (se verifică doar câmpurile trimise)
export function valideazaAplicatie(body, { partial = false } = {}) {
  const erori = [];
  const date = {}; // lista albă: doar câmpurile cunoscute ajung aici

  if (!partial || body.titlu !== undefined) {
    if (typeof body.titlu !== "string" || body.titlu.trim() === "") {
      erori.push("titlu este obligatoriu");
    } else if (body.titlu.trim().length < TITLU_MIN) {
      erori.push(`titlu are minimum ${TITLU_MIN} caractere`);
    } else if (body.titlu.trim().length > TITLU_MAX) {
      erori.push(`titlu are maximum ${TITLU_MAX} de caractere`);
    } else {
      date.titlu = body.titlu.trim();
    }
  }

  if (!partial || body.modLucru !== undefined) {
    const m = body.modLucru ?? "hibrid";
    if (!MODURI_LUCRU.includes(m)) {
      erori.push(`modLucru trebuie să fie unul din: ${MODURI_LUCRU.join(", ")}`);
    } else {
      date.modLucru = m;
    }
  }

  if (body.intervievat !== undefined) {
    if (typeof body.intervievat !== "boolean") {
      erori.push("intervievat trebuie să fie true sau false");
    } else {
      date.intervievat = body.intervievat;
    }
  } else if (!partial) {
    date.intervievat = false;
  }

  return { erori, date };
}

// Id-urile din adresă vin ca text; se acceptă doar numere întregi pozitive
export function parseId(value) {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
}
