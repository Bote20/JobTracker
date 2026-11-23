# Stage 9: AI log
## Tools
- Claude

## Conversations
[https://claude.ai/code/session_01JL4tfp9Xqgzu5AfYYTggST] (Backend propriu cu Node.js și Express)

## Key requests
### 1. Serverul Express pentru resursa aplicatii
Asked: Să implementez etapa 9 pe proiectul meu, pornind de la ghidul cu exemplul TaskFlow.
- Got: Folderul `backend/` cu `app.js` (CORS, `express.json()`, `/health`, 404 și tratarea centralizată a erorilor), `server.js`, rutele din `routes/aplicatii.js` (GET, POST, PATCH, DELETE, cu funcția `gasesteIndex` pentru 400/404) și `.env.example`.
Changed or rejected: Am folosit denumirile temei mele: `routes/aplicatii.js`, prefixul `/aplicatii`, mesajul „Aplicația nu există”. Datele inițiale din memorie sunt cele cinci aplicații din vechiul `db.json`, ca aplicația să arate la fel ca înainte.

### 2. Validarea pe server
Asked: Cum adaptez `validation.js` la câmpurile mele.
- Got: Funcția `valideazaAplicatie` cu lista albă de câmpuri (`titlu`, `modLucru`, `intervievat`) și varianta `partial` pentru PATCH.
Changed or rejected: Am păstrat aceleași reguli ca în formular: titlul între 3 și 100 de caractere și aceleași valori pentru `modLucru` ca în `frontend/src/constants.js`, ca formularul să nu trimită valori pe care serverul le refuză.

### 3. Eliminarea json-server
Asked: Ce se schimbă în frontend.
- Got: Citirea mesajului `{ error: "..." }` în funcția `request` din `api.js`, ștergerea `db.json`, a scriptului `api` și a pachetului json-server.
Changed or rejected: Am actualizat și mesajul de eroare de pe pagina listei, care încă recomanda `npm run api`.

## What I learned / what did not work
Ce am învățat: O rută Express are metodă, cale și funcție; `req.params` are bucățile din adresă, iar `req.body` corpul trimis, doar dacă `express.json()` rulează înaintea rutelor. Ordinea din `app.js` contează: middleware-uri, rute, 404, apoi funcția cu patru parametri pentru erori. Validarea din formular nu ajunge, pentru că oricine poate trimite date direct cu `curl`; serverul verifică tot și păstrează doar câmpurile cunoscute. Id-ul din adresă vine ca text, deci trebuie transformat în număr înainte de comparație. Erorile CORS nu se repară din frontend: serverul trebuie să declare originea permisă.
