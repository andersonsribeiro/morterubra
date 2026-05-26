import shirt from "../../assets/img/baranoseidou-hero-shirt.jpg";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    document.title = "Camiseta Malice Mizer - Bara no Seidou | Morte Rubra";
  }, []);

  return (
    <>
      <section
        id="hero"
        className="max-w-5xl mt-7 mx-auto flex gap-8 max-sm:flex-col max-sm:text-center"
      >
        <div id="hero-shirt">
          <img src={shirt} alt="Camiseta Malice Mizer - Bara no Seidou" />
        </div>

        <div id="hero-details">
          <h1 className="flex flex-col">
            <span className=" text-2xl">Camiseta</span>
            <span>Malice Mizer</span>
            <span className=" text-5xl">Bara no Seidou</span>
          </h1>

          <p className="py-10">
            Uma das fases mais icônicas da banda, mergulhada na estética gótica
            e obscura, que conquista fãs até hoje.
          </p>

          <p className="text-base text-red-600">
            camiseta 100% algodão / malha penteada / silk digital HD / estampa
            exclusiva / envio para todo o Brasil / até 3x sem juros
          </p>

          <a
            className="block my-10 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
            href="https://loja.morterubra.com.br/malice-mizer-sans-logique-ta9qd"
          >
            VER CAMISETA NA LOJA
          </a>
        </div>
      </section>
    </>
  );
}
