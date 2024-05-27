import logo from "../assets/img/logo_red.png";

export default function Header() {
  return (
    <header
      className="p-8 flex justify-center
        max-sm:text-center max-sm:flex-none"
    >
      <h1 className="w-40 max-sm:mx-auto">
        <img className=" w-full" src={logo} alt="" />
      </h1>
      <a
        className="hidden border-2 transition border-amber-100 rounded-lg px-4 py-3
        max-sm:my-4 hover:border-red-600 hover:text-red-600"
        href="https://loja.morterubra.com.br"
      >
        Ir para a loja
      </a>
    </header>
  );
}
