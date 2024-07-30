import logo from "../assets/img/logo_red.png";

export default function Header() {
  return (
    <header
      className="p-8 w-full flex justify-between
        max-sm:text-center max-sm:flex-col fixed top-0 left-0 bg-black"
    >
      <h1 className="w-40 max-sm:mx-auto">
        <img className=" w-full" src={logo} alt="" />
      </h1>
      <a
        className="block border-2 transition border-amber-100 rounded-lg px-4 py-3
        max-sm:my-4 hover:border-red-600 hover:text-red-600"
        href="https://loja.morterubra.com.br"
      >
        TODOS OS PRODUTOS
      </a>
    </header>
  );
}
