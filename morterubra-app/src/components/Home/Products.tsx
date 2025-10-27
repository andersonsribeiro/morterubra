import home_black from "../../assets/img/HOME_BLACK.png";
import home_vkei from "../../assets/img/HOME_VKEI.png";
import home_bathory from "../../assets/img/HOME_BATHORY.png";
import home_death from "../../assets/img/HOME_DEATH.png";
import home_mugs from "../../assets/img/HOME_MUGS.png";
import home_doom from "../../assets/img/HOME_DOOM.png";

import gulu_bag from "../../assets/img/LOJA_BAG-THUMB-GULUGULU.png";
import gulu_over from "../../assets/img/LOJA_OVERSIZED-THUMB-GULUGULU-A.png";
import gulu from "../../assets/img/LOJA_CAMISETA-THUMB-GULUGULU-A.png";

import plastic_bag from "../../assets/img/LOJA_BAG-THUMB-PLASTICTREE.png";
import plastic_over from "../../assets/img/LOJA_OVERSIZED-THUMB-PLASTICTREE-A.png";
import plastic from "../../assets/img/LOJA_CAMISETA-THUMB-PLASTICTREE-A.png";

import d_bag from "../../assets/img/LOJA_BAG-THUMB-D.png";
import d_over from "../../assets/img/LOJA_OVERSIZED-THUMB-D-A.png";
import d from "../../assets/img/LOJA_CAMISETA-THUMB-D-A.png";

import larc_bag from "../../assets/img/LOJA_BAG-THUMB-LARC.png";
import larc_over from "../../assets/img/LOJA_OVERSIZED-THUMB-LARC-A.png";
import larc from "../../assets/img/LOJA_CAMISETA-THUMB-LARC-A.png";

import typeo from "../../assets/img/LOJA_CAMISETA-THUMB-TYPEONEGATIVE-A.png";
import moonspell from "../../assets/img/LOJA_CAMISETA-THUMB-MOONSPELL-A.png";
import gathering from "../../assets/img/LOJA_CAMISETA-THUMB-THEGATHERING-A.png";
import sentenced from "../../assets/img/LOJA_CAMISETA-THUMB-SENTENCED-A.png";

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
                src={gulu_bag}
                alt="EcoBag: gulu gulu - Gulu Gulu Ryuushutsu Ongen Shuu"
              />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              gulu gulu
            </h3>
            <h4 className=" font-sans font-bold">
              Gulu Gulu Ryuushutsu Ongen Shuu
            </h4>

            <p>
              <del className="block text-xl">de R$ 60,00</del>
              <b className="block text-2xl">por R$ 55,00</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/gulu-gulu-gulu-gulu-ryuushutsu-ongen-shuu-ecobag-ck47m"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img
                src={gulu}
                alt="Camiseta: gulu gulu - Gulu Gulu Ryuushutsu Ongen Shuu"
              />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              gulu gulu
            </h3>
            <h4 className=" font-sans font-bold">
              gulu gulu - Gulu Gulu Ryuushutsu Ongen Shuu
            </h4>

            <p>
              <del className="block text-xl">de R$ 104,90</del>
              <b className="block text-2xl">por R$ 97,90</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/gulu-gulu-gulu-gulu-ryuushutsu-ongen-shuu-camiseta-ck6ew"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img
                src={gulu_over}
                alt="Oversized: gulu gulu - Gulu Gulu Ryuushutsu Ongen Shuu"
              />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              gulu gulu
            </h3>
            <h4 className=" font-sans font-bold">
              Gulu Gulu Ryuushutsu Ongen Shuu
            </h4>

            <p>
              <del className="block text-xl">de R$ 160,00</del>
              <b className="block text-2xl">por R$ 150,00</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/gulu-gulu-gulu-gulu-ryuushutsu-ongen-shuu-oversized-jmoj9"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>

          <li className="flex flex-col">
            <figure>
              <img src={plastic_bag} alt="EcoBag: Plastic Tree - Ink" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Plastic Tree
            </h3>
            <h4 className=" font-sans font-bold">Ink</h4>

            <p>
              <del className="block text-xl">de R$ 60,00</del>
              <b className="block text-2xl">por R$ 55,00</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/plastic-tree-ink-ecobag-bwi8d"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img src={plastic} alt="Camiseta: Plastic Tree - Ink" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Plastic Tree
            </h3>
            <h4 className=" font-sans font-bold">Ink</h4>

            <p>
              <del className="block text-xl">de R$ 104,90</del>
              <b className="block text-2xl">por R$ 97,90</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/plastic-tree-ink-camiseta-68fsr"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img src={plastic_over} alt="Oversized: Plastic Tree - Ink" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Plastic Tree
            </h3>
            <h4 className=" font-sans font-bold">Ink</h4>

            <p>
              <del className="block text-xl">de R$ 160,00</del>
              <b className="block text-2xl">por R$ 150,00</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/plastic-tree-ink-oversized-yo6he"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>

          <li className="flex flex-col">
            <figure>
              <img src={d_bag} alt="EcoBag: D - Genetic World" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">D</h3>
            <h4 className=" font-sans font-bold">Genetic World</h4>

            <p>
              <del className="block text-xl">de R$ 60,00</del>
              <b className="block text-2xl">por R$ 55,00</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/d-genetic-world-ecobag-qn5q4"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img src={d} alt="Camiseta: D - Genetic World" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">D</h3>
            <h4 className=" font-sans font-bold">Genetic World</h4>

            <p>
              <del className="block text-xl">de R$ 104,90</del>
              <b className="block text-2xl">por R$ 97,90</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/d-genetic-world-camiseta-bthpx"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img src={d_over} alt="Oversized: D - Genetic World" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">D</h3>
            <h4 className=" font-sans font-bold">Genetic World</h4>

            <p>
              <del className="block text-xl">de R$ 160,00</del>
              <b className="block text-2xl">por R$ 150,00</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/d-genetic-world-oversized-aeama"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>

          <li className="flex flex-col">
            <figure>
              <img src={larc_bag} alt="EcoBag: L'arc en Ciel - True" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              L'arc en Ciel
            </h3>
            <h4 className=" font-sans font-bold">True</h4>

            <p>
              <del className="block text-xl">de R$ 60,00</del>
              <b className="block text-2xl">por R$ 55,00</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/l-arc-en-ciel-true-ecobag-txct5"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img src={larc} alt="Camiseta: L'arc en Ciel - True" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              L'arc en Ciel
            </h3>
            <h4 className=" font-sans font-bold">True</h4>

            <p>
              <del className="block text-xl">de R$ 104,90</del>
              <b className="block text-2xl">por R$ 97,90</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/l-arc-en-ciel-p5q1n"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img src={larc_over} alt="Oversized: L'arc en Ciel - True" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              L'arc en Ciel
            </h3>
            <h4 className=" font-sans font-bold">True</h4>

            <p>
              <del className="block text-xl">de R$ 160,00</del>
              <b className="block text-2xl">por R$ 150,00</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/l-arc-en-ciel-qjjcx"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>

          <li className="flex flex-col">
            <figure>
              <img
                src={typeo}
                alt="Camiseta: Type O Negative - Bloody Kisses"
              />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Type O Negative
            </h3>
            <h4 className=" font-sans font-bold">Bloody Kisses</h4>

            <p>
              <del className="block text-xl">de R$ 104,90</del>
              <b className="block text-2xl">por R$ 97,90</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/type-o-negative-bloody-kisses-rjpgl"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img src={moonspell} alt="Camiseta: Moonspell - Wolfheart" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Moonspell
            </h3>
            <h4 className=" font-sans font-bold">Wolfheart</h4>

            <p>
              <del className="block text-xl">de R$ 104,90</del>
              <b className="block text-2xl">por R$ 97,90</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/moonspell-wolfheart-3d3qm"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img src={gathering} alt="Camiseta: The Gathering - Mandylion" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              The Gathering
            </h3>
            <h4 className=" font-sans font-bold">Mandylion</h4>

            <p>
              <del className="block text-xl">de R$ 104,90</del>
              <b className="block text-2xl">por R$ 97,90</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/the-gathering-mandylion-v8m67"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img
                src={sentenced}
                alt="Camiseta: Sentenced - The Cold White Light"
              />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Sentenced
            </h3>
            <h4 className=" font-sans font-bold">The Cold White Light</h4>

            <p>
              <del className="block text-xl">de R$ 104,90</del>
              <b className="block text-2xl">por R$ 97,90</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/sentenced-the-cold-white-light-qs051"
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
