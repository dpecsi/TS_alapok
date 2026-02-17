export default function IteracioPage() {
  // LNKO - Kivonásos algoritmus - Elöltesztelő ciklus
  let a: number = 13;
  const eredetiA = a;
  let b: number = 8;
  const eredetiB = b;
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  console.log(`LNKO(${eredetiA},${eredetiB}) = `, a, b);
  const lnko: number = a || b;

  // LNKO - Euklideszi algoritmus - Hátultesztelő
  let a2: number = 130;
  let b2: number = 970;
  const eredetiA2 = a2;
  const eredetiB2 = b2;
  let m: number = 0;
  do {
    m = a2 % b2; // osztás maradéka
    a2 = b2; // Előző "kör" maradéka
    b2 = m;
  } while (m != 0);
  const lnko2: number = a2;
  console.log("LNKO2() = " + a2);
  console.log("LNKO2() = " + b2); // Itt már nulla a "b2" értéke

  // Növekményes ciklus (for ciklus, számláló vezérelt ciklus)
  // Faktoriális meghatározása
  // n! = ?
  const n: number = 2250;
  let faktor: bigint = 1n;
  let e: bigint = 2n;
  for (; e <= n; e++) {
    faktor = faktor * e;
  }

  let db: number = 0; // "l" betűk számát tároló változó
  const szöveg = "Hello 13KE";
  for (const e of szöveg) {
    if (e === "l") db++;
    console.log(e);
  }
  console.log('Az "l" betűk száma: ' + db + " db");
  console.log("Az \"l\" betűk száma: " + db + " db");
  console.log(`Az "l" betűk száma: ${db} db`);

  return (
    <>
      <p>Iterációk (ciklusok)</p>
      <p>
        LNKO({eredetiA},{eredetiB}) = {lnko}
      </p>
      <p>
        LNKO2({eredetiA2},{eredetiB2}) = {lnko2}
      </p>
      <p className="wrap-break-word">
        {n}! = {faktor}
      </p>
    </>
  );
}
