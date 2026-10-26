# Stage 5: AI log
## Tools
- Gemini

## Conversations
[https://gemini.google.com/app/b800e4edd39f24b8?_gl=1*xx46cz*_gcl_au*MzM5MTIzMTcyLjE3NjQ5MzMyMDU.*_ga*ODM2MzE1NzYzLjE3NjQ5MzMzMTg.*_ga_WC57KJ50ZZ*czE3NjQ5MzMzMTckbzEkZzEkdDE3NjQ5MzM3ODAkajU2JGwwJGgw] (Ghidare pentru implementarea state-ului și evenimentelor în React)

## Key requests
### 1. Trecerea la date interactive prin state
Asked: Să rezolvăm etapa 5, transformând lista statică într-una interactivă.
- Got: Explicația necesității utilizării `useState` în `App.jsx` și a transmiterii funcțiilor `onToggle` și `onDelete` ca props către componentele copil. S-a furnizat codul aferent pentru cele trei fișiere `.jsx`.
Changed or rejected: Am integrat codul direct, deoarece implementează corect modificările imutabile (folosind `map` și `filter`) și menține contorul ca valoare derivată.

### 2. Integrarea temei dark/light
Asked: Comenzile și pașii exacți pentru a rula aplicația actualizată.
- Got: Pe lângă comenzile de terminal, au fost furnizate regulile CSS actualizate care folosesc atributul `data-theme` pentru a comuta culorile și a face suprascrierea corectă a setărilor sistemului de operare.
Changed or rejected: Am copiat regulile și am validat vizual că tranziția și butonul funcționează conform cerințelor.

## What I learned / what did not work
Ce am învățat: Am înțeles că o componentă React se randează din nou atunci când se schimbă state-ul ei. Am învățat să țin state-ul în componenta părinte (top-level) și să cobor funcțiile de actualizare prin props până la butonul/checkbox-ul care le declanșează. De asemenea, am descoperit cum se creează elemente de formular controlate (folosind `checked` legat de state și `onChange` pentru actualizare) și cum se manipulează atributele pe tag-ul `<html>` pentru a comuta global o temă de culori.