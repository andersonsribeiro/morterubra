import darker from "../assets/img/LOJA_CAMISETA-THUMB-DARKER-A.png";
import darker_over from "../assets/img/LOJA_CAMISETA-THUMB-DARKER-OVERSIZED-A.png";
import sanslogique from "../assets/img/LOJA_CAMISETA-THUMB-SANSLOGIQUE-A.png";
import sanslogique_over from "../assets/img/LOJA_CAMISETA-THUMB-SANSLOGIQUE-OVERSIZED-A.png";

import home_black from "../assets/img/HOME_BLACK.png";
import home_vkei from "../assets/img/HOME_VKEI.png";
import home_bathory from "../assets/img/HOME_BATHORY.png";
import home_death from "../assets/img/HOME_DEATH.png";
import home_mugs from "../assets/img/HOME_MUGS.png";
import home_doom from "../assets/img/HOME_DOOM.png";

export default function Lancamento() {
  return (
    <>
      <section id="products">
        <ul
          id="section-1"
          className=" max-w-5xl mx-auto flex flex-wrap justify-center gap-4"
        >
          <li className="flex flex-col">
            <figure>
              {/* <img
                src={sanslogique}
                alt="Camiseta: Malice Mizer - Sans Logique"
              /> */}
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Malice Mizer
            </h3>
            <h4 className=" font-sans font-bold">Sans Logique</h4>

            <p>
              <del className="block text-xl">de R$ 89,90</del>
              <b className="block text-2xl">por R$ 84,90</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/malice-mizer-sans-logique-ta9qd?o=bWFsaWNlLW1pemVyLXNhbnMtbG9naXF1ZS10YTlxZF9vY3RfMjYwMzg2"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}
