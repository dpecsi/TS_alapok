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
    </>
  );
}
