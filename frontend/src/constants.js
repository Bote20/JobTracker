// Valorile fixe și etichetele lor, într-un singur loc.
export const MODURI_LUCRU = [
  { value: "hibrid", label: "Hibrid" },
  { value: "remote", label: "Remote" },
  { value: "birou", label: "La birou" },
];

export const ETICHETE_MOD_LUCRU = Object.fromEntries(
  MODURI_LUCRU.map((m) => [m.value, m.label])
);
