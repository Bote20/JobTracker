# Stage 6: AI log
## Tools
- Gemini

## Conversations
[https://gemini.google.com/app/b800e4edd39f24b8?_gl=1*xx46cz*_gcl_au*MzM5MTIzMTcyLjE3NjQ5MzMyMDU.*_ga*ODM2MzE1NzYzLjE3NjQ5MzMzMTg.*_ga_WC57KJ50ZZ*czE3NjQ5MzMzMTckbzEkZzEkdDE3NjQ5MzM3ODAkajU2JGwwJGgw] (Preluarea datelor de la un API mock)

## Key requests
### 1. Configurarea json-server și db.json
Asked: Cum pornesc API-ul și cum mut datele?
- Got: Structura fișierului `db.json` cu lista de aplicații, comanda exactă de instalare pentru `json-server@0.17.4` și scriptul npm necesar în `package.json`.
Changed or rejected: Am păstrat formatul obiectelor mele (titlu, intervievat, modLucru) în `db.json` pentru a se potrivi cu structura aplicației mele.

### 2. Preluarea datelor cu useEffect
Asked: Cum implementez fetch-ul și stările de încărcare/eroare în React?
- Got: Crearea fișierului `api.js` cu `fetch`, utilizarea variabilelor de mediu din `.env.example` și rescrierea componentei `App.jsx` folosind `useEffect`.
Changed or rejected: Am aplicat codul primit, asigurându-mă că folosesc variabila de curățare `ignore` pentru a preveni actualizările de state dacă componenta se demontează între timp.

## What I learned / what did not work
Ce am învățat: Am înțeles cum funcționează un mock API REST cu `json-server` și cum se expun resursele (ruta `/aplicatii`). Am învățat să fac cereri asincrone folosind `fetch`, `async` și `await`, validând mereu răspunsul cu `res.ok`. Cel mai important, am înțeles ciclul de viață al încărcării datelor prin `useEffect`, tratând corect cele 3 stări esențiale într-o aplicație: loading (așteptarea), succes (datele) și eroarea (server oprit).