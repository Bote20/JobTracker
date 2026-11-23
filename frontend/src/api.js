// Toate cererile HTTP stau aici; componentele nu apelează fetch direct.
export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

// Funcție comună: trimite JSON și aruncă eroare dacă răspunsul nu este 2xx
async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  });
  if (!res.ok) {
    // API-ul propriu răspunde cu { error: "..." }
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Eroare server: ${res.status}`);
  }
  // 204 No Content nu are corp
  return res.status === 204 ? null : res.json();
}

export function fetchAplicatii() {
  return request("/aplicatii");
}

export function fetchAplicatie(id) {
  return request(`/aplicatii/${id}`);
}

export function createAplicatie(aplicatie) {
  return request("/aplicatii", { method: "POST", body: JSON.stringify(aplicatie) });
}

export function updateAplicatie(id, changes) {
  return request(`/aplicatii/${id}`, {
    method: "PATCH",
    body: JSON.stringify(changes),
  });
}

export function deleteAplicatie(id) {
  return request(`/aplicatii/${id}`, { method: "DELETE" });
}
