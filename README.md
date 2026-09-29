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
| Gemini | Generare schelet HTML, CSS, adaptare layout și fișiere Markdown pentru tema JobTracker |

Details per stage:
Stage 1: Generare structură README, cod HTML semantic și CSS layout (Grid/Flexbox). Vezi folderul `ai-log/`.

## How to run
Open index.html in a browser. No build step, no server.

## Status
[x] Stage 1: static mockup
[ ] Stage 2: data logic in JavaScript

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