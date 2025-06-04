import home_black from "../../assets/img/HOME_BLACK.png";
import home_vkei from "../../assets/img/HOME_VKEI.png";
import home_bathory from "../../assets/img/HOME_BATHORY.png";
import home_death from "../../assets/img/HOME_DEATH.png";
import home_mugs from "../../assets/img/HOME_MUGS.png";
import home_doom from "../../assets/img/HOME_DOOM.png";

import derlanger from "../../assets/img/LOJA_CAMISETA-THUMB-DERLANGER-BLACK-A.png";
import deadman from "../../assets/img/LOJA_CAMISETA-THUMB-DEADMAN-BLACK-A.png";
import kagrra from "../../assets/img/LOJA_CAMISETA-THUMB-KAGRRA-BLACK-A.png";
import moidixmois from "../../assets/img/LOJA_CAMISETA-THUMB-MOIDIXMOIS-BLACK-A.png";

import vintersorg from "../../assets/img/LOJA_CAMISETA-THUMB-VINTERSORG-A.png";
import mithotyn from "../../assets/img/LOJA_CAMISETA-THUMB-MITHOTYN-A.png";
import windir from "../../assets/img/LOJA_CAMISETA-THUMB-WINDIR-A.png";
import ensiferum from "../../assets/img/LOJA_CAMISETA-THUMB-ENSIFERUM-A.png";

import saintvitus from "../../assets/img/LOJA_CAMISETA-THUMB-SAINTVITUS-A.png";
import anathema from "../../assets/img/LOJA_CAMISETA-THUMB-ANATHEMA-A.png";
import paradise from "../../assets/img/LOJA_CAMISETA-THUMB-ICON-A.png";
import reverend from "../../assets/img/LOJA_CAMISETA-THUMB-REVEREND-A.png";

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
              <img src={vintersorg} alt="Camiseta: Vintersorg - Till Fjälls" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Vintersorg
            </h3>
            <h4 className=" font-sans font-bold">Till Fjälls</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/vintersorg-till-fjalls-8gq8i"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img
                src={mithotyn}
                alt="Camiseta: Mithotyn - King of the Distant Forest"
              />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Mithotyn
            </h3>
            <h4 className=" font-sans font-bold">King of the Distant Forest</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/mithotyn-king-of-the-distant-forest-09ril"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img src={windir} alt="Camiseta: Windir - 1184" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Windir
            </h3>
            <h4 className=" font-sans font-bold">1184</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/windir-1184-r0gun"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img src={ensiferum} alt="Camiseta: Ensiferum - Iron" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Ensiferum
            </h3>
            <h4 className=" font-sans font-bold">Iron</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/ensiferum-iron-maoun"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img
                src={saintvitus}
                alt="Camiseta: Saint Vitus - Mournful Cries"
              />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Saint Vitus
            </h3>
            <h4 className=" font-sans font-bold">Mournful Cries</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/saint-vitus-mournful-cries-ht6jf"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img src={anathema} alt="Camiseta: Anathema - Serenades" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Anathema
            </h3>
            <h4 className=" font-sans font-bold">Serenades</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/anathema-serenades-eq0d2"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img src={paradise} alt="Camiseta: Paradise Lost - Icon" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Paradise Lost
            </h3>
            <h4 className=" font-sans font-bold">Icon</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/paradise-lost-icon-ckbmv"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img
                src={reverend}
                alt="Camiseta: Reverend Bizarre - In the Rectory of the Bizarre Reverend"
              />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Reverend Bizarre
            </h3>
            <h4 className=" font-sans font-bold">
              In the Rectory of the Bizarre Reverend
            </h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/reverend-bizzarre-in-the-rectory-of-the-bizzarre-reverend-8554w"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>

          <li className="flex flex-col">
            <figure>
              <img
                src={derlanger}
                alt="Camiseta: D'erlanger - La Vie En Rose"
              />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              D'erlanger
            </h3>
            <h4 className=" font-sans font-bold">La Vie En Rose</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/d-erlanger-la-vie-en-rose-tof7x"
              >
                PRETA
              </a>
              <a
                className="text-right block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/d-erlanger-la-vie-en-rose-bpa0r"
              >
                BRANCA
              </a>
            </p>
          </li>

          <li className="flex flex-col">
            <figure>
              <img
                src={deadman}
                alt="Camiseta: Deadman - In the Direction of Sunrise and Night Light"
              />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Deadman
            </h3>
            <h4 className=" font-sans font-bold">
              In the Direction of Sunrise and Night Light
            </h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/deadman-in-the-direction-of-sunrise-and-night-light-cpk10"
              >
                PRETA
              </a>
              <a
                className="text-right block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/deadman-in-the-direction-of-sunrise-and-night-light-ydtht"
              >
                BRANCA
              </a>
            </p>
          </li>

          <li className="flex flex-col">
            <figure>
              <img src={kagrra} alt="Camiseta: Kagrra, - San" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Kagrra,
            </h3>
            <h4 className=" font-sans font-bold">San</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/kagrra-san-wfcl1"
              >
                PRETA
              </a>
              <a
                className="text-right block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/kagrra-san-ldma0"
              >
                BRANCA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img
                src={moidixmois}
                alt="Camiseta: Moi Dix Mois - Dix Infernal"
              />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Moi Dix Mois
            </h3>
            <h4 className=" font-sans font-bold">Dix Infernal</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small>em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/moi-dix-mois-dix-infernal-hgges"
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
