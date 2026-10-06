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