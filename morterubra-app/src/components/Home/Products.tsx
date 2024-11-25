import home_black from "../../assets/img/HOME_BLACK.png";
import home_vkei from "../../assets/img/HOME_VKEI.png";
import home_bathory from "../../assets/img/HOME_BATHORY.png";
import home_death from "../../assets/img/HOME_DEATH.png";
import home_mugs from "../../assets/img/HOME_MUGS.png";
import home_doom from "../../assets/img/HOME_DOOM.png";

import heavens from "../../assets/img/LOJA_CAMISETA-THUMB-HEAVENS-A.jpg";
import kamelot from "../../assets/img/LOJA_CAMISETA-THUMB-KAMELOT-A.jpg";
import dreamevil from "../../assets/img/LOJA_CAMISETA-THUMB-DREAMEVIL-A.jpg";
import galneryus from "../../assets/img/LOJA_CAMISETA-THUMB-GALNERYUS-A.jpg";

export default function Products() {
  return (
    <>
      <section id="products">
        <ul
          id="section-1"
          className=" max-w-5xl mx-auto flex flex-wrap justify-center gap-4"
        >
          <li className="flex flex-col">
            <figure>
              <img
                src={heavens}
                alt="Camiseta: Heaven's Gate - Livin' in Hysteria"
              />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Heaven's Gate
            </h3>
            <h4 className=" font-sans font-bold">Livin' in Hysteria</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/heaven-s-gate-livin-in-hysteria-i52j5"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img src={kamelot} alt="Camiseta: Kamelot - The Fourth Legacy" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Kamelot
            </h3>
            <h4 className=" font-sans font-bold">The Fourth Legacy</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/kamelot-the-fourth-legacy-i0w7h"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img src={dreamevil} alt="Camiseta: Dream Evil - Dragonslayer" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Dream Evil
            </h3>
            <h4 className=" font-sans font-bold">Dragonslayer</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/dream-evil-dragonslayer-1npt0"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img
                src={galneryus}
                alt="Camiseta: Galneryus - The Flag of Punishment"
              />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Galneryus
            </h3>
            <h4 className=" font-sans font-bold">The Flag of Punishment</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/galneryus-the-flag-of-punishment-b72up"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>

          <li className="flex flex-col">
            <figure className="bg-yellow-400">
              <a
                className=" opacity-100 hover:opacity-85 transition"
                href="https://loja.morterubra.com.br/caneca-dead-ztoqe"
              >
                <img src={home_mugs} alt="Canecas - Coleção: Mugs on Musg" />
              </a>
            </figure>
            <h4 className=" font-sans font-bold">Coleção</h4>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Mugs on Mugs
            </h3>

            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/caneca-dead-ztoqe"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>

          <li className="flex flex-col">
            <figure className="bg-red-700">
              <a
                className=" opacity-100 hover:opacity-85 transition"
                href="https://loja.morterubra.com.br/?cat=black-metal"
              >
                <img
                  src={home_black}
                  alt="Camisetas - Coleção: Hordes from the Black"
                />
              </a>
            </figure>
            <h4 className=" font-sans font-bold">Coleção</h4>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Hordes from the Black
            </h3>

            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/?cat=black-metal"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>

          <li className="flex flex-col">
            <figure className="bg-red-700">
              <a
                className=" opacity-100 hover:opacity-85 transition"
                href="https://loja.morterubra.com.br/?cat=visual-kei"
              >
                <img
                  src={home_vkei}
                  alt="Camisetas - Coleção: Visual Kei Assault"
                />
              </a>
            </figure>
            <h4 className=" font-sans font-bold">Coleção</h4>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              V系 Assault
            </h3>

            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/?cat=visual-kei"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure className="bg-red-700">
              <a
                className=" opacity-100 hover:opacity-85 transition"
                href="https://loja.morterubra.com.br/?cat=viking-metal"
              >
                <img
                  src={home_bathory}
                  alt="Camisetas - Coleção: Visual Kei Assault"
                />
              </a>
            </figure>
            <h4 className=" font-sans font-bold">Coleção</h4>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Bathory - The Norse Years
            </h3>

            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/?cat=viking-metal"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure className="bg-red-700">
              <a
                className=" opacity-100 hover:opacity-85 transition"
                href="https://loja.morterubra.com.br/?cat=death-metal"
              >
                <img
                  src={home_death}
                  alt="Camisetas - Coleção: Melodies of Death"
                />
              </a>
            </figure>
            <h4 className=" font-sans font-bold">Coleção</h4>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Melodies of Death
            </h3>

            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/?cat=death-metal"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure className="bg-red-700">
              <a
                className=" opacity-100 hover:opacity-85 transition"
                href="https://loja.morterubra.com.br/?cat=doom-metal"
              >
                <img src={home_doom} alt="Camisetas - Coleção: Times of Doom" />
              </a>
            </figure>
            <h4 className=" font-sans font-bold">Coleção</h4>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Times of Doom
            </h3>

            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/?cat=doom-metal"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          {/* <li className="flex flex-col">
            <figure>
              <img src={home_black} alt="Camisetas - Coleção: Hordes from the Black" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">Hordes from the Black</h3>
            <h4 className=" font-sans font-bold">Coleção</h4>

            <p>
              <del className="block text-xl">de R$ 55,00</del>
              <b className="block text-2xl">por R$ 50,00</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/caneca-dead-ztoqe"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li> */}
        </ul>
      </section>
    </>
  );
}
