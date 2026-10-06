// Datele de test și valorile permise
const aplicatii = [
  { id: 1, titlu: "Frontend Developer la UiPath", intervievat: false, modLucru: "hibrid" },
  { id: 2, titlu: "Backend Developer la Bitdefender", intervievat: true, modLucru: "remote" },
  { id: 3, titlu: "Fullstack Developer la Adobe", intervievat: false, modLucru: "birou" }
];

const MODURI_LUCRU = ["remote", "hibrid", "birou"];

// 1. Listarea titlurilor
function listeazaRoluri(lista) {
  return lista.map((a) => a.titlu);
}

// 2. Numărarea elementelor active (neintervievate)
function numaraInAsteptare(lista) {
  return lista.filter((a) => !a.intervievat).length;
}

// 3. Căutarea după titlu
function cautaDupaRol(lista, text) {
  return lista.filter((a) => a.titlu.toLowerCase().includes(text.toLowerCase()));
}

// 4. Calculul următorului ID
function nextId(lista) {
  return lista.reduce((max, a) => Math.max(max, a.id), 0) + 1;
}

// 5. Adăugarea unui element cu validare
function adaugaAplicatie(lista, titlu, modLucru = "hibrid") {
  const titluCurat = titlu.trim();
  
  if (!titluCurat) {
    console.error("Titlul nu poate fi gol.");
    return lista;
  }
  
  if (!MODURI_LUCRU.includes(modLucru)) {
    console.error(`Modul de lucru este invalid: ${modLucru}`);
    return lista;
  }
  
  const nou = {
    id: nextId(lista),
    titlu: titluCurat,
    intervievat: false,
    modLucru: modLucru
  };
  
  return [...lista, nou];
}

// 6. Comutarea stării
function comutaInterviu(lista, id) {
  return lista.map((a) => a.id === id ? { ...a, intervievat: !a.intervievat } : a);
}

// 7. Ștergerea
function stergeAplicatie(lista, id) {
  return lista.filter((a) => a.id !== id);
}

// --- Testele din consolă ---
console.log("--- Citire ---");
console.log("Roluri:", listeazaRoluri(aplicatii).join(", "));
console.log("În așteptare:", numaraInAsteptare(aplicatii));
console.log("Căutare 'dev':", listeazaRoluri(cautaDupaRol(aplicatii, "dev")).join(", "));

console.log("--- Adăugare ---");
let lista = adaugaAplicatie(aplicatii, "DevOps Engineer la Endava", "remote");
console.log("Lista nouă:", lista.length, "aplicații");
console.log("Originalul a rămas cu:", aplicatii.length, "aplicații");

console.log("--- Modificare și ștergere ---");
lista = comutaInterviu(lista, 1);
console.log("După bifarea interviului la id 1, în așteptare:", numaraInAsteptare(lista));

lista = stergeAplicatie(lista, 3);
console.log("După ștergerea id 3:", listeazaRoluri(lista).join(", "));

console.log("--- Validare ---");
adaugaAplicatie(lista, "   ");
adaugaAplicatie(lista, "Ceva Rol", "pe luna");