# JobTracker
O aplicație pentru gestionarea și urmărirea aplicațiilor la joburi.
Destinată candidaților aflați în căutarea unui loc de muncă.

## Data model

| Field | Type | Notes |
| --- | --- | --- |
| Rol & Companie | text | required, max 100 chars |
| Intervievat | boolean | toggled from the list, default false |
| Mod de lucru | fixed values | Remote, Hibrid, La birou |
| Domeniu | relation | IT, Marketing, Inginerie |
| Candidat | relation | the owner of the item (from week 11) |

Sample data used across all stages:
1. Frontend Developer la UiPath, aplicat, Hibrid
2. Backend Developer la Bitdefender, intervievat (stare finalizată), Remote
3. Fullstack Developer la Adobe, aplicat, La birou

## AI usage

| Tool | Used for |
| --- | --- |
| Gemini | Generare schelet HTML, CSS, adaptare layout, funcții JS imutabile și fișiere Markdown pentru tema JobTracker |
| Claude | Stage 7: adaptarea formularului, a cererilor POST/PATCH/DELETE și a atributelor data-testid la tema JobTracker |

Details per stage:
Stage 1: Generare structură README, cod HTML semantic și CSS layout (Grid/Flexbox). Vezi folderul `ai-log/`.
Stage 2: Generare funcții de manipulare a datelor (map, filter, reduce) și logica de validare imutabilă în JavaScript.

## How to run
Open index.html in a browser. No build step, no server.

## Stage 2: data logic
Plain JavaScript, no DOM. aplicatii.js holds the array and the functions that read and change it. Results are printed in the browser console (F12).

## Status
[x] Stage 1: static mockup
[x] Stage 2: data logic in JavaScript
[ ] Stage 3: Vite and React project

## Stage 1 Checklist

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/Bote20/JobTracker/blob/f6d07f6da15b3d01396dc11dd95b99a6824e09d0/README.md?plain=1#L1-L30) | read |
| S1-R2 | AI usage section | [README.md](https://github.com/Bote20/JobTracker/blob/f6d07f6da15b3d01396dc11dd95b99a6824e09d0/README.md?plain=1#L20-L27) | read |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md](https://github.com/Bote20/JobTracker/blob/f6d07f6da15b3d01396dc11dd95b99a6824e09d0/ai-log/etapa01.md?plain=1#L1-L15) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html](https://github.com/Bote20/JobTracker/blob/aeb40072a618f654106921571830940ed8c10461/index.html#L1-L65) | open the page |
| S1-R5 | finished card looks different | [style.css - .done](https://github.com/Bote20/JobTracker/blob/f6d07f6da15b3d01396dc11dd95b99a6824e09d0/style.css#L125-L127) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css - @media](https://github.com/Bote20/JobTracker/blob/f6d07f6da15b3d01396dc11dd95b99a6824e09d0/style.css#L148-L152) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [style.css - focus/dark](https://github.com/Bote20/JobTracker/blob/f6d07f6da15b3d01396dc11dd95b99a6824e09d0/style.css#L136-L164) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | [Commit "Stage 1"](https://github.com/Bote20/JobTracker/commit/e77bed37bc6344adb64890cade48cbcca339d593) | commit history |

## Stage 2 Checklist

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S2-R1 | JS file linked, logs on page load | [index.html](https://github.com/Bote20/JobTracker/blob/a4a68a4adb53e4c07756c85c6fe2c4cc20f0f226/index.html#L65) | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | [aplicatii.js](https://github.com/Bote20/JobTracker/blob/a4a68a4adb53e4c07756c85c6fe2c4cc20f0f226/aplicatii.js#L2-L6) | read |
| S2-R3 | list, count, search, add, toggle, delete | [aplicatii.js](https://github.com/Bote20/JobTracker/blob/a4a68a4adb53e4c07756c85c6fe2c4cc20f0f226/aplicatii.js#L11-L62) | console output |
| S2-R4 | add rejects empty name and invalid tag | [aplicatii.js](https://github.com/Bote20/JobTracker/blob/a4a68a4adb53e4c07756c85c6fe2c4cc20f0f226/aplicatii.js#L83-L84) | last 2 console lines |
| S2-R5 | original array unchanged after add | [aplicatii.js](https://github.com/Bote20/JobTracker/blob/a4a68a4adb53e4c07756c85c6fe2c4cc20f0f226/aplicatii.js#L73) | console line |
| S2-R6 | README Stage 2 section + AI log | [README.md / ai-log](https://github.com/Bote20/JobTracker/blob/a4a68a4adb53e4c07756c85c6fe2c4cc20f0f226/README.md?plain=1#L33-L34) | read |
| S2-R7 | commit "Stage 2" pushed | [Commit "Stage 2"](https://github.com/Bote20/JobTracker/commit/a4a68a4adb53e4c07756c85c6fe2c4cc20f0f226) | commit history |


## Stage 3: Vite and React project
The app now lives in frontend/, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw.

## How to run
cd frontend
npm install
npm run dev
Then open the address printed in the terminal (http://localhost:5173).


## Stage 4: components
The list is rendered from the data, through two components:
- `AplicatieList` receives the whole array and renders one card per item.
- `AplicatieCard` receives a single item through props and displays it.

## Status
- [x] Stage 1: Static HTML and CSS
- [x] Stage 2: JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [ ] Stage 5: local state and events

## Stage 4 Checklist
| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S4-R1 | 2+ components in src/components/ | [frontend/src/components/](https://github.com/Bote20/JobTracker/tree/main/frontend/src/components) | open folder |
| S4-R2 | card receives data through props | [AplicatieCard.jsx#L..-L..](https://github.com/Bote20/JobTracker/blob/9907c3f364a710e881db383698ebf14359658a5e/frontend/src/components/AplicatieCard.jsx#L4) | read |
| S4-R3 | map + key={id}, no console warnings | [AplicatieList.jsx#L..-L..](https://github.com/Bote20/JobTracker/blob/9907c3f364a710e881db383698ebf14359658a5e/frontend/src/components/AplicatieList.jsx#L12-L14) | F12, Console |
| S4-R4 | message for empty list | [AplicatieList.jsx#L..-L..](https://github.com/Bote20/JobTracker/blob/9907c3f364a710e881db383698ebf14359658a5e/frontend/src/components/AplicatieList.jsx#L6) | set array to [] |
| S4-R5 | state changes the card look | [AplicatieCard.jsx#L..](https://github.com/Bote20/JobTracker/blob/9907c3f364a710e881db383698ebf14359658a5e/frontend/src/components/AplicatieCard.jsx#L6) | toggle a done flag |
| S4-R6 | README Stage 4 section + AI log | [README.md](https://github.com/Bote20/JobTracker/blob/main/README.md), [ai-log/etapa-04.md](https://github.com/Bote20/JobTracker/blob/main/ai-log/etapa-04.md) | read |
| S4-R7 | commit "Stage 4" pushed | [link to the commit](https://github.com/Bote20/JobTracker/commit/9907c3f364a710e881db383698ebf14359658a5e) | commit history |


## Stage 5: local state and events
The list lives in React state. Checking and deleting work from the page, and the counters in the header follow automatically. A button in the header switches between light and dark mode. Changes are lost on refresh, which is what stage 6 and stage 10 fix.

## Status
- [x] Stage 1: Static HTML and CSS
- [x] Stage 2: JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [ ] Stage 6: loading data from a mock API

## Stage 5 Checklist
| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S5-R1 | list kept in useState, in App | [App.jsx#L..](https://github.com/Bote20/JobTracker/blob/23b64de0ddca912e2208559298154fcf0045005d/frontend/src/App.jsx#L16) | read |
| S5-R2 | toggling changes state and card look | [App.jsx#L..-L..](https://github.com/Bote20/JobTracker/blob/23b64de0ddca912e2208559298154fcf0045005d/frontend/src/App.jsx#L20-L24), [AplicatieCard.jsx#L..](https://github.com/Bote20/JobTracker/blob/23b64de0ddca912e2208559298154fcf0045005d/frontend/src/components/AplicatieCard.jsx#L5) | click a checkbox |
| S5-R3 | delete removes the item | [App.jsx#L..-L..](https://github.com/Bote20/JobTracker/blob/23b64de0ddca912e2208559298154fcf0045005d/frontend/src/App.jsx#L27-L29), [AplicatieCard.jsx#L..](https://github.com/Bote20/JobTracker/blob/23b64de0ddca912e2208559298154fcf0045005d/frontend/src/components/AplicatieCard.jsx#L21) | click Delete |
| S5-R4 | header counter derived, not in state | [App.jsx#L..](https://github.com/Bote20/JobTracker/blob/23b64de0ddca912e2208559298154fcf0045005d/frontend/src/App.jsx#L39) | toggle, watch header |
| S5-R5 | immutable updates (no push, splice, assignment) | [App.jsx#L..-L..](https://github.com/Bote20/JobTracker/blob/23b64de0ddca912e2208559298154fcf0045005d/frontend/src/App.jsx#L20-L29) | read |
| S5-R6 | light/dark toggle: state + data-theme on html | [App.jsx#L..-L..](https://github.com/Bote20/JobTracker/blob/23b64de0ddca912e2208559298154fcf0045005d/frontend/src/App.jsx#L32-L36), [App.css#L..-L..](https://github.com/Bote20/JobTracker/blob/23b64de0ddca912e2208559298154fcf0045005d/frontend/src/App.css#L161-L162) | click the button, both system themes |
| S5-R7 | no console warnings; README + AI log | [README.md](https://github.com/Bote20/JobTracker/blob/main/README.md), [ai-log/etapa-05.md](https://github.com/Bote20/JobTracker/blob/main/ai-log/etapa-05.md) | F12, Console |
| S5-R8 | commit "Stage 5" pushed | [link to the commit](https://github.com/Bote20/JobTracker/commit/23b64de0ddca912e2208559298154fcf0045005d) | commit history |


## Stage 6: data from a mock API
The list is served by json-server from db.json. The app fetches it on load and shows a loading state and an error state.
npm run api # terminal 1, http://localhost:3001
npm run dev # terminal 2, http://localhost:5173

## Status
- [x] Stage 1: Static HTML and CSS
- [x] Stage 2: JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [x] Stage 6: data from a mock API
- [ ] Stage 7: form and validation

## Stage 6 Checklist
| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S6-R1 | npm run api starts, route shows JSON | [package.json#L..](https://github.com/Bote20/JobTracker/blob/51d5cea91b7fd5a1fc032f43a34b16fbc9efb392/frontend/package.json#L11), [db.json](https://github.com/Bote20/JobTracker/blob/51d5cea91b7fd5a1fc032f43a34b16fbc9efb392/frontend/db.json) | open localhost:3001/aplicatii |
| S6-R2 | data no longer in React code | [App.jsx#L..](https://github.com/Bote20/JobTracker/blob/51d5cea91b7fd5a1fc032f43a34b16fbc9efb392/frontend/src/App.jsx#L10) | read |
| S6-R3 | loading message while waiting | [App.jsx#L..](https://github.com/Bote20/JobTracker/blob/51d5cea91b7fd5a1fc032f43a34b16fbc9efb392/frontend/src/App.jsx#L11), [App.jsx#L..](https://github.com/Bote20/JobTracker/blob/51d5cea91b7fd5a1fc032f43a34b16fbc9efb392/frontend/src/App.jsx#L67) | --delay 4000 |
| S6-R4 | error message when API is down | [App.jsx#L..](https://github.com/Bote20/JobTracker/blob/51d5cea91b7fd5a1fc032f43a34b16fbc9efb392/frontend/src/App.jsx#L69-L73) | stop npm run api, refresh |
| S6-R5 | fetch only in api.js, URL from env | [api.js#L..](https://github.com/Bote20/JobTracker/blob/51d5cea91b7fd5a1fc032f43a34b16fbc9efb392/frontend/src/api.js#L4), [.env.example](https://github.com/Bote20/JobTracker/blob/51d5cea91b7fd5a1fc032f43a34b16fbc9efb392/frontend/.env.example) | search for fetch |
| S6-R6 | README Stage 6 section + AI log | [README.md](https://github.com/Bote20/JobTracker/blob/main/README.md), [ai-log/etapa-06.md](https://github.com/Bote20/JobTracker/tree/main/frontend/src) | read |
| S6-R7 | commit "Stage 6" pushed | [link to the commit](https://github.com/Bote20/JobTracker/commit/51d5cea91b7fd5a1fc032f43a34b16fbc9efb392) | commit history |


## Stage 7: form and validation
Job applications can be added from the page. The form is controlled and validated,
and every change (add, toggle, delete) goes to the API before it shows up
in the list.
- `AplicatieForm` has two controlled fields: *Rol & Companie* (`titlu`) and *Mod de lucru* (`modLucru`).
- Validation: the title is required and must have between 3 and 100 characters. Errors appear next to the form, not in an `alert`.
- `api.js` has one shared `request` function and `fetchAplicatii`, `createAplicatie`, `updateAplicatie`, `deleteAplicatie` (GET, POST, PATCH, DELETE on `/aplicatii`).
- The list is updated with the object returned by the server (the id comes from json-server).
- The submit button is disabled while saving; the form is cleared only if the save succeeded.
- `tw.json` (repository root) and the `data-testid` attributes are used for automated checking.

## Status
- [x] Stage 1: Static HTML and CSS
- [x] Stage 2: JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [x] Stage 6: data from a mock API
- [x] Stage 7: form and validation
- [ ] Stage 8: routing and detail page

## Stage 7 Checklist
| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S7-R1 | controlled form: value + onChange on every field | [AplicatieForm.jsx#L14-L17](https://github.com/Bote20/JobTracker/blob/16fcccafc4d94b093b52838800d054c29603a9bd/frontend/src/components/AplicatieForm.jsx#L14-L17), [AplicatieForm.jsx#L54-L66](https://github.com/Bote20/JobTracker/blob/16fcccafc4d94b093b52838800d054c29603a9bd/frontend/src/components/AplicatieForm.jsx#L54-L66) | read |
| S7-R2 | empty title shows an error, nothing is sent | [AplicatieForm.jsx#L19-L34 (valideaza)](https://github.com/Bote20/JobTracker/blob/16fcccafc4d94b093b52838800d054c29603a9bd/frontend/src/components/AplicatieForm.jsx#L19-L34) | submit empty, watch Network |
| S7-R3 | added item shows in the list and survives refresh | [App.jsx#L44-L47 (handleAdd)](https://github.com/Bote20/JobTracker/blob/16fcccafc4d94b093b52838800d054c29603a9bd/frontend/src/App.jsx#L44-L47), [api.js#L21-L23](https://github.com/Bote20/JobTracker/blob/16fcccafc4d94b093b52838800d054c29603a9bd/frontend/src/api.js#L21-L23) | add, refresh |
| S7-R4 | toggle and delete survive refresh | [App.jsx#L49-L66](https://github.com/Bote20/JobTracker/blob/16fcccafc4d94b093b52838800d054c29603a9bd/frontend/src/App.jsx#L49-L66), [api.js#L25-L34](https://github.com/Bote20/JobTracker/blob/16fcccafc4d94b093b52838800d054c29603a9bd/frontend/src/api.js#L25-L34) | toggle/delete, refresh |
| S7-R5 | button disabled while sending, form cleared only on success | [AplicatieForm.jsx#L35-L45](https://github.com/Bote20/JobTracker/blob/16fcccafc4d94b093b52838800d054c29603a9bd/frontend/src/components/AplicatieForm.jsx#L35-L45), [AplicatieForm.jsx#L81](https://github.com/Bote20/JobTracker/blob/16fcccafc4d94b093b52838800d054c29603a9bd/frontend/src/components/AplicatieForm.jsx#L81) | --delay 3000; stop API and submit |
| S7-R6 | tw.json and the data-testid attributes from table 7.3 | [tw.json](https://github.com/Bote20/JobTracker/blob/16fcccafc4d94b093b52838800d054c29603a9bd/tw.json), [AplicatieCard.jsx#L7-L28](https://github.com/Bote20/JobTracker/blob/16fcccafc4d94b093b52838800d054c29603a9bd/frontend/src/components/AplicatieCard.jsx#L7-L28), [AplicatieForm.jsx#L49-L81](https://github.com/Bote20/JobTracker/blob/16fcccafc4d94b093b52838800d054c29603a9bd/frontend/src/components/AplicatieForm.jsx#L49-L81) | querySelectorAll in the console |
| S7-R7 | README Stage 7 section + AI log | [README.md#L152-L171](https://github.com/Bote20/JobTracker/blob/16fcccafc4d94b093b52838800d054c29603a9bd/README.md?plain=1#L152-L171), [ai-log/etapa-07.md](https://github.com/Bote20/JobTracker/blob/16fcccafc4d94b093b52838800d054c29603a9bd/ai-log/etapa-07.md) | read |
| S7-R8 | commit "Stage 7" pushed | [link to the commit](https://github.com/Bote20/JobTracker/commit/16fcccafc4d94b093b52838800d054c29603a9bd) | commit history |
