import Subscribe from "../Mailchimp/Subscribe";
import Shirts from "./Shirts";

export default function Home() {
  return (
    <>
      <main className=" text-center mt-16 font-serif">
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
      <Shirts />
    </>
  );
}
