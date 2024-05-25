import Subscribe from "./Mailchimp/Subscribe";

export default function Home() {
  return (
    <>
      <main className=" text-center my-16 leading-loose">
        <span className=" text-4xl">A MORTE RUBRA alcançará a todos</span>
        <p>A camiseta que você procura pode estar por aqui</p>
      </main>
      <Subscribe />
    </>
  );
}
