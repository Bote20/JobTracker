# Stage 4: AI log
## Tools
- Gemini

## Conversations
[https://gemini.google.com/app/b800e4edd39f24b8?_gl=1*xx46cz*_gcl_au*MzM5MTIzMTcyLjE3NjQ5MzMyMDU.*_ga*ODM2MzE1NzYzLjE3NjQ5MzMzMTg.*_ga_WC57KJ50ZZ*czE3NjQ5MzMzMTckbzEkZzEkdDE3NjQ5MzM3ODAkajU2JGwwJGgw] (Ghidare pentru crearea componentelor React și folosirea props)

## Key requests
### 1. Spargerea interfeței în componente
Asked: Să îmi rezolvi Etapa 4 și să îmi dai un mic rezumat despre ce face această etapă.
- Got: Explicația teoretică despre componente și props, precum și codul exact pentru `AplicatieCard.jsx` și `AplicatieList.jsx`, adaptate temei mele (JobTracker).
Changed or rejected: Am implementat codul oferit deoarece validează corect modurile de lucru (hibrid/remote/birou) și aplică stiluri diferite în funcție de statusul "intervievat".

### 2. Rezolvarea erorilor de navigare în terminal
Asked: "am o eroare când încerc să intru în folderul frontend, no such file or directory".
- Got: Explicația că mă aflam cu un director mai sus în ierarhie (`proiect TW jobtracker`) și comanda corectă pentru a intra în subfolderul necesar (`cd JobTracker/frontend`).
Changed or rejected: Am folosit comanda exactă și am reușit să pornesc serverul de dezvoltare.

## What I learned / what did not work
Ce nu a mers inițial: Am întâmpinat dificultăți la pornirea serverului și localizarea folderului `frontend` în terminal, deoarece nu eram în root-ul corect al proiectului.
Ce am învățat: Am învățat cum să transfer date dintr-o componentă părinte (`App.jsx`) către o componentă copil (`AplicatieCard`) folosind `props`. De asemenea, am înțeles cum se folosește metoda `map` pentru a randa dinamic o listă de elemente de tip componentă și importanța adăugării atributului `key` (cum ar fi `aplicatie.id`) pentru ca React să poată gestiona eficient modificările listei.