# Stage 7: AI log
## Tools
- Claude

## Conversations
[https://claude.ai/code/session_01JL4tfp9Xqgzu5AfYYTggST] (Formular controlat, validare și cereri POST/PATCH/DELETE)

## Key requests
### 1. Adaptarea ghidului Etapei 7 la tema JobTracker
Asked: Să implementez etapa 7 (formular și validare) pe proiectul meu, pornind de la ghidul cu exemplul TaskFlow.
- Got: Componenta nouă `AplicatieForm.jsx` (câmpurile `titlu` și `modLucru`, validare, buton dezactivat în timpul trimiterii), funcția comună `request` în `api.js` cu `createAplicatie`, `updateAplicatie`, `deleteAplicatie`, și `App.jsx` rescris astfel încât adăugarea, bifarea și ștergerea să treacă întâi prin server.
Changed or rejected: Am păstrat denumirile din proiectul meu (`aplicatii`, `intervievat`, `modLucru`) în loc de `tasks`, `gata`, `prioritate`. Ca validare suplimentară am ales lungimea titlului între 3 și 100 de caractere, conform modelului de date din README.

### 2. Reperele pentru verificarea automată
Asked: Ce atribute `data-testid` trebuie puse și cum arată `tw.json` pentru tema mea.
- Got: Fișierul `tw.json` (`resource: aplicatii`, `title: titlu`, `done: intervievat`, `sample: { modLucru: remote }`) și atributele din tabelul 7.3 pe card, listă, formular și mesaje; câmpul select este marcat `form-modLucru`, după numele din `db.json`.
Changed or rejected: Am verificat în consolă cu `querySelectorAll('[data-testid="item"]').length` că numărul de carduri corespunde listei.

## What I learned / what did not work
Ce am învățat: Într-un formular controlat valoarea fiecărui câmp stă în state, iar `onChange` o actualizează la fiecare tastă. `e.preventDefault()` oprește reîncărcarea paginii la trimitere. Ordinea corectă este „întâi serverul, apoi state-ul”: lista se modifică abia după ce serverul confirmă, iar id-ul elementului nou vine de la json-server. Dacă `handleAdd` ar prinde eroarea cu `try`, formularul n-ar mai afla că salvarea a eșuat, deci eroarea trebuie lăsată să ajungă înapoi în formular. Am testat și cazul cu serverul oprit: apare „Failed to fetch”, iar textul scris rămâne în câmp.
