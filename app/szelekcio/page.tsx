export default function SzelekcioPage() {
  // Szelekció fajtái:
  // - Egy ág: if
  // - Két ág: if-else
  // - Több ág: if - else if - else if - ... - else
  // - Több ág: switch-case

  // Példa egy ágú szelekcióra:
  // let és a const
  const x: number = -420;
  let abs: number = x;
  if (x < 0) {
    abs = x * -1;
  }
  console.log(`${x} abszolút értéke: ${abs}`);

  // JS-TS-ben mi számít igaznak és mi hamisnak?
  // Hamis:
  // - false literál, vagy ilyen értékű kifejezés
  // - nulla (0) érték
  // - üres sztring ("")
  // - NaN (Not a Number), pl.: parseInt("alma")
  // - undefined
  // - null
  // Minden más igaz értéknek számít!
  const input = 123;
  if (input) console.log(`'${input}' - igaz`);
  else console.log(`'${input}' - hamis`);

  // Két ágú szelekció
  const kétág = 12;
  if (kétág % 2 == 0) console.log("páros");
  else console.log("páratlan");

  // Példa: switch - case
  const jegy: number = 3;
  let értékelés: string = "";
  switch (jegy) {
    case 1:
      értékelés = "Elégtelen";
      break;
    case 2:
      értékelés = "Elégséges";
      break;
    case 3:
      értékelés = "Közepes";
      break;
    case 4:
      értékelés = "Jó";
      break;
    case 5:
      értékelés = "Jeles";
      break;
    default:
      értékelés = "Nem osztályzat";
      break;
  }

  const jegy2: number = 6;
  let értékelés2: string = "";
  if (jegy2 == 1) {
    értékelés2 = "Elégtelen";
  } else if (jegy2 == 2) {
    értékelés2 = "Elégséges";
  } else if (jegy2 == 3) {
    értékelés2 = "Közepes";
  } else if (jegy2 == 4) {
    értékelés2 = "Jó";
  } else if (jegy2 == 5) {
    értékelés2 = "Jeles";
  } else {
    értékelés2 = "Nem osztályzat";
  }

  return (
    <>
      <div>Szelekciók</div>
      <p>
        {x} abszolút értéke: {abs}
      </p>
      <p>Igaz vagy hamis érték?</p>
      <p>
        &apos;{String(input)}&apos; - {input ? "igaz" : "hamis"}
      </p>
      <p>Páros vagy páratlan?</p>
      <p>
        {kétág} - {kétág % 2 == 0 ? "páros" : "páratlan"}
      </p>
      <p>
        A(z) {jegy} jegy szöveges jelentése: {értékelés}
      </p>
      <p>
        A(z) {jegy2} jegy2 szöveges jelentése: {értékelés2}
      </p>
    </>
  );
}
