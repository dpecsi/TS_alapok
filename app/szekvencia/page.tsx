function terület(a: number, b: number): number {
  return a * b;
}
function kerület(a: number, b: number): number {
  return 2 * (a + b);
}
export default function SzekvenciaPage() {
  const a: number = 12;
  const b: number = 34;
  const T: number = terület(a, b);
  const K: number = kerület(a, b);
  return (
    <>
      <h1>Téglalap területe és kerülete</h1>
      <p>Kérem az oldalak hosszát!</p>
      <p>a = {a}</p>
      <p>b = {b}</p>
      <p>T = {T}</p>
      <p>K = {K}</p>
    </>
  );
}
