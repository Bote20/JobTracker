# Stage 8: AI log
## Tools
- Claude

## Conversations
[https://claude.ai/code/session_01JL4tfp9Xqgzu5AfYYTggST] (Rutare cu React Router, pagina de detaliu și CSS Modules)

## Key requests
### 1. Împărțirea aplicației în pagini
Asked: Să implementez etapa 8 pe proiectul meu, pornind de la ghidul cu exemplul TaskFlow.
- Got: `BrowserRouter` în `main.jsx`, harta rutelor în `App.jsx` (`/`, `/aplicatii/:id`, `/despre`, `*`), componenta `Layout` cu `NavLink` și `<Outlet />`, pagina `AplicatiiPage` (conținutul fostului `App.jsx`), pagina de detaliu cu `useParams` și `fetchAplicatie`, plus paginile `DesprePage` și `NotFoundPage`.
Changed or rejected: Ruta de detaliu folosește resursa mea din `tw.json` (`/aplicatii/:id`), nu `/tasks/:id`. Butonul de temă luminoasă/întunecată din etapa 5 l-am mutat în `Layout`, ca să rămână în antet pe toate paginile. Contorul de aplicații a trecut din antet în panoul listei.

### 2. Mutarea stilurilor în CSS Modules
Asked: Cum împart `App.css` pe componente.
- Got: `App.css` redenumit în `index.css`, cu doar variabilele de culoare și clasele comune, și câte un fișier `.module.css` pentru `Layout`, `AplicatieCard`, `AplicatieList`, `AplicatieForm`, `AplicatiiPage` și `AplicatieDetaliuPage`. Valorile fixe ale modului de lucru au trecut în `constants.js`.
Changed or rejected: Am păstrat aspectul meu (culoarea albastră, imaginea de fundal, tema întunecată), nu culorile din exemplul TaskFlow. Fundalurile semitransparente ale panourilor și cardurilor au devenit variabile (`--panel-bg`, `--card-bg`), ca tema întunecată să funcționeze și în module.

## What I learned / what did not work
Ce am învățat: React Router schimbă pagina fără să reîncarce documentul HTML, deci state-ul nu se pierde; `Link` și `NavLink` înlocuiesc `<a href>`. `NavLink` marchează singur linkul paginii curente, iar `end` pe linkul către `/` îl împiedică să rămână activ pe toate paginile. `useParams` întoarce id-ul ca text, iar efectul paginii de detaliu are `[id]` ca dependență, ca să se reîncarce când se schimbă adresa. Cu CSS Modules clasele primesc nume unice la build, deci `.card` dintr-o componentă nu mai intră în conflict cu alte clase. Pentru un id inexistent (`/aplicatii/999`) serverul răspunde 404, iar pagina afișează un mesaj, nu un ecran gol.
