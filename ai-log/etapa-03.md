# Stage 3: AI log
## Tools
- Gemini

## Conversations
[https://gemini.google.com/app/b800e4edd39f24b8?_gl=1*xx46cz*_gcl_au*MzM5MTIzMTcyLjE3NjQ5MzMyMDU.*_ga*ODM2MzE1NzYzLjE3NjQ5MzMzMTg.*_ga_WC57KJ50ZZ*czE3NjQ5MzMzMTckbzEkZzEkdDE3NjQ5MzM3ODAkajU2JGwwJGgw] (Ghidare instalare Node.js, configurare Vite și React, rezolvare erori de terminal)

## Key requests
### 1. Instalare Node.js și depanare mediu de lucru
Asked: "pentru proiectul meu ce node js cu ce versiuni tre sa intalez" și rezolvarea erorii de script blocat la `npm -v`.
- Got: Versiunea necesară (v24.21.0 LTS) și explicația că Windows blochează scripturile în PowerShell, primind instrucțiuni să folosesc Git Bash.
Changed or rejected: Am renunțat la PowerShell și am configurat terminalul din VS Code să folosească exclusiv Git Bash pentru acest proiect.

### 2. Izolare fișiere vechi și curățare boilerplate Vite
Asked: Comenzi pentru crearea mediului React, validarea structurii fișierelor și identificarea fișierelor implicite Vite.
- Got: Comenzile de mutare (cu corectarea directorului curent via `cd JobTracker`), comanda `npm create vite@latest`, și lista exactă de fișiere de șters (`assets/`, `.svg`, `index.css`).
Changed or rejected: Am urmat instrucțiunile exact, ștergând fișierele inutile pentru a pregăti mediul curat.

### 3. Migrarea datelor și afișarea brută a componentelor
Asked: "nu mai bine imi dai direct codul pentru app.cssacum ca am facut asta ce mai am de facut?"
- Got: Codurile necesare pentru `App.css`, actualizarea `main.jsx` și structura pentru `App.jsx` care conține datele array-ului meu și le randează sub formă de text JSON brut.
Changed or rejected: Am păstrat codul oferit, fiind adaptat exact pe structura mea și demonstrând corectitudinea build-ului Vite.

## What I learned / what did not work
Ce nu a mers inițial: Am întâmpinat o eroare de securitate (`PSSecurityException`) folosind PowerShell și o eroare la mutarea fișierelor (`cannot stat`) pentru că nu eram în folderul corect al proiectului.
Ce am învățat: Am învățat cum se rulează și configurează un proiect React de la zero folosind Vite, diferența dintre terminalele din Windows și cum se transferă fișierele statice într-un ecosistem bazat pe module (importuri în `main.jsx`).