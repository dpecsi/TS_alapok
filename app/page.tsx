export default function HomePage() {
  // Egyszerű változók használata (egy érték tárolására használjuk őket)
  const szöveg: string = "Körte";
  let szám: number = 3.14;
  const logikai: boolean = true; // false

  // Értékadás:
  szám = 12;
  console.log(szám);

  // Egyszerű aritmetikai operátorok: +, -, *, /
  // Maradékos osztás: %
  // Egész osztás: Math.floor(5/2);

  // Relációs operátorok: <, >, <=, <==, >=, >==, !=, !==, ==, ===

  // Vezérlési szerkezetek:
  // - szekvencia
  // - szelekció (eldöntés)
  // - iteráció (ismétlődés)

  // JSX kóddal visszatérő függvénynek csak egy gyökéreleme lehet
  // A gyökér elem gyakran React fragment: <> </>
  // JSX kódban nincs class attribútum,
  // helyette a className attribútumot kell használni
  // a return után akkor kell zárójel "()", ha a JSX kód több soros
  // JSX kódban kapcsos zárójelek közé JavaScript kifejezések kerülhetnek
  // A kapcsos zárójelek közé JavaScript utasítások (if, for, stb.) nem kerülhetnek

  return (
    <div>
      <h1 className="text-red-600">Hello World!</h1>
      <div>A szám változó értéke: {szám}</div>
    </div>
  );
}
