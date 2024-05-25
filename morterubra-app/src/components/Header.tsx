export default function Header() {
  return (
    <header
      className="p-8 flex-none justify-between
    max-sm:text-center max-sm:flex-none"
    >
      <h1 className="w-40 max-sm:mx-auto">
        <img className=" w-full" src="./src/assets/img/logo_red.png" alt="" />
      </h1>
      <a
        className="border-2 border-l-rose-100 rounded-lg px-4 py-3 inline-block max-sm:my-4
         hover:border-red-700 hover:text-red-700"
        href="https://loja.morterubra.com.br"
      >
        Ir para a loja
      </a>
    </header>
  );
}
