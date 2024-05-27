export default function Footer() {
  return (
    <footer className="text-center py-16 bg-red-800">
      <h3 className=" text-2xl font-sans font-bold text-black">MORTE RUBRA</h3>
      <p className=" my-3">
        E-mail:{" "}
        <a
          className=" underline hover:text-white"
          href="mailto:sac@morterubra.com.br"
        >
          sac@morterubra.com.br
        </a>
      </p>
      <p className=" my-3">
        <a
          className=" underline hover:text-white"
          href="https://instagram.com/morterubrashop"
        >
          @morterubrashop
        </a>
      </p>
    </footer>
  );
}
