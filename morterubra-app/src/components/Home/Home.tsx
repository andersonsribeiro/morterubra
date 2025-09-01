import Subscribe from "../Mailchimp/Subscribe";

export default function Home() {
  return (
    <>
      <main className=" text-center mt-16 font-serif pt-20 max-sm:pt-32">
        <span
          className=" text-6xl bg-red-800 px-4 text-black
         max-sm:text-4xl"
        >
          <i>A Morte Rubra alcançará a todos.</i>
        </span>
        <br />
        <br />
        <span
          className=" text-6xl bg-red-800 px-4 text-black
         max-sm:text-4xl"
        >
          <i>A camiseta que você procura pode estar por aqui.</i>
        </span>
      </main>
      <div className=" text-center my-10 py-4 px-2 bg-amber-100 text-black">
        camisetas 100% algodão / meia malha penteada / fio 30.1 / impressão em
        silk digital com alta definição
      </div>
    </>
  );
}
