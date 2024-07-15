import tristania from "../../assets/img/_SITE_CAMISETA-THUMB-TRISTANIA.png";
import theatre from "../../assets/img/_SITE_CAMISETA-THUMB-THEATRE.png";
import tsotb from "../../assets/img/_SITE_CAMISETA-THUMB-TSOTB.png";
// import ulver from "../../assets/img/_SITE_CAMISETA-THUMB-ULVER.png";
// import oldmans from "../../assets/img/_SITE_CAMISETA-THUMB-OLDMANS.png";
// import angeles from "../../assets/img/_SITE_CAMISETA-THUMB-ANGELES.png";
// import blaspheme from "../../assets/img/_SITE_CAMISETA-THUMB-BLASPHEME.png";
// import rhapsody from "../../assets/img/_SITE_CAMISETA-THUMB-RHAPSODY.png";
// import darkmoor from "../../assets/img/_SITE_CAMISETA-THUMB-DARKMOOR.png";
import malice_sans from "../../assets/img/LOJA_CAMISETA-THUMB-MALICE-SANS-A.png";
import malice_memoire from "../../assets/img/LOJA_CAMISETA-THUMB-MALICE-MEMOIRE-A.png";
import malice_voyage from "../../assets/img/LOJA_CAMISETA-THUMB-MALICE-VOYAGE-A.png";
import malice_merveilles from "../../assets/img/LOJA_CAMISETA-THUMB-MALICE-MERVEILLES-A.png";
import malice_bara from "../../assets/img/LOJA_CAMISETA-THUMB-MALICE-BARA-A.png";
import hanoi_stray from "../../assets/img/LOJA_CAMISETA-THUMB-STRAY-A.png";
import hanoi_confidence from "../../assets/img/LOJA_CAMISETA-THUMB-CONFIDENCE-A.png";
import hanoi_under from "../../assets/img/LOJA_CAMISETA-THUMB-UNDER-A.png";
import hanoi_raven from "../../assets/img/LOJA_CAMISETA-THUMB-THE-RAVEN-A.png";
import witchfinder from "../../assets/img/LOJA_CAMISETA-THUMB-WITCHFINDER.jpg";
import trouble from "../../assets/img/LOJA_CAMISETA-THUMB-TROUBLE-PSALM.jpg";
import cathedral from "../../assets/img/LOJA_CAMISETA-THUMB-CATHEDRAL.jpg";
import woods from "../../assets/img/LOJA_CAMISETA-THUMB-WOODS.jpg";

export default function Products() {
  return (
    <>
      <section>
        <ul
          id="products"
          className=" max-w-5xl mx-auto flex flex-wrap justify-center gap-4
          "
        >
          <li className="flex flex-col">
            <figure>
              <img src={woods} alt="Camiseta - Woods of Ypres" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Woods of Ypres
            </h3>
            <h4 className=" font-sans font-bold">
              Woods 5: Grey Skies & Electric Light
            </h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small className=" block">em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/woods-of-ypres-woods-5-grey-skies-e-electric-light-j9dam"
              >
                CAMISETA
              </a>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600 text-right
                          hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/woods-of-ypres-woods-5-grey-skies-e-electric-light-suxhn"
              >
                BABY LOOK
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img src={cathedral} alt="Camiseta - Cathedral" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Cathedral
            </h3>
            <h4 className=" font-sans font-bold">Forest of Equilibrium</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small className=" block">em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/cathedral-forest-of-equelibrium-f5z3u"
              >
                CAMISETA
              </a>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600 text-right
                          hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/cathedral-forest-of-equilibrium-cjuhl"
              >
                BABY LOOK
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img src={trouble} alt="Camiseta - Trouble" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Trouble
            </h3>
            <h4 className=" font-sans font-bold">Psalm 9</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small className=" block">em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/trouble-psalm-9-jyynk"
              >
                CAMISETA
              </a>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600 text-right
                          hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/trouble-psalm-9-rx98c"
              >
                BABY LOOK
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img src={witchfinder} alt="Camiseta - Witchfinder General" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Witchfinder General
            </h3>
            <h4 className=" font-sans font-bold">Death Penalty</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small className=" block">em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/witchfinder-general-death-penalty-j38iy"
              >
                CAMISETA
              </a>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600 text-right
                          hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/witchfinder-general-death-penalty-mlvl4"
              >
                BABY LOOK
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img
                src={hanoi_raven}
                alt="Hanoi and the Underground Opera: The Raven"
              />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Hanoi and the Underground Opera
            </h3>
            <h4 className=" font-sans font-bold">The Raven</h4>

            <p>
              <del className="block text-xl">de R$ 90,00</del>
              <b className="block text-2xl">por R$ 80,00</b>
              <small className=" block">em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/hanoi-and-the-underground-opera-the-raven-7hulo"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img
                src={hanoi_under}
                alt="Hanoi and the Underground Opera: Under the Moon"
              />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Hanoi and the Underground Opera
            </h3>
            <h4 className=" font-sans font-bold">Under the Moon</h4>

            <p>
              <del className="block text-xl">de R$ 90,00</del>
              <b className="block text-2xl">por R$ 80,00</b>
              <small className=" block">em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/hanoi-and-the-underground-opera-under-the-moon-6m3xo"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img
                src={hanoi_confidence}
                alt="Hanoi and the Underground Opera: Confidence Game"
              />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Hanoi and the Underground Opera
            </h3>
            <h4 className=" font-sans font-bold">Confidence Game</h4>

            <p>
              <del className="block text-xl">de R$ 90,00</del>
              <b className="block text-2xl">por R$ 80,00</b>
              <small className=" block">em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/hanoi-and-the-underground-opera-confidence-game-5pdve"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img
                src={hanoi_stray}
                alt="Hanoi and the Underground Opera: Stray Bullet"
              />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Hanoi and the Underground Opera
            </h3>
            <h4 className=" font-sans font-bold">Stray Bullet</h4>

            <p>
              <del className="block text-xl">de R$ 90,00</del>
              <b className="block text-2xl">por R$ 80,00</b>
              <small className=" block">em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/hanoi-and-the-underground-opera-stray-bullet-c24uq"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>

          <li className="flex flex-col">
            <figure>
              <img
                src={malice_sans}
                alt="Eco Bag - Malice Mizer: Sans Logique"
              />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Malice Mizer
            </h3>
            <h4 className=" font-sans font-bold">Sans Logique</h4>

            <p>
              <del className="block text-xl">de R$ 55,00</del>
              <b className="block text-2xl">por R$ 45,00</b>
              <small className=" block">em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/eco-bag-sans-logique-qnb3w"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>

          <li className="flex flex-col">
            <figure>
              <img
                src={malice_memoire}
                alt="Camiseta - Malice Mizer: Memoire"
              />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Malice Mizer
            </h3>
            <h4 className=" font-sans font-bold">Memoire</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small className=" block">em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/malice-mizer-memoire-0v5m2"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>

          <li className="flex flex-col">
            <figure>
              <img
                src={malice_voyage}
                alt="Camiseta - Malice Mizer: Voyage Sans Retour"
              />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Malice Mizer
            </h3>
            <h4 className=" font-sans font-bold">Voyage Sans Retour</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small className=" block">em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/malice-mizer-voyage-sans-retour-0rh71"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>

          <li className="flex flex-col">
            <figure>
              <img
                src={malice_merveilles}
                alt="Camiseta - Malice Mizer: Merveilles"
              />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Malice Mizer
            </h3>
            <h4 className=" font-sans font-bold">Merveilles</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small className=" block">em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/malice-mizer-merveilles-bxylc"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>

          <li className="flex flex-col">
            <figure>
              <img
                src={malice_bara}
                alt="Camiseta - Malice Mizer: Bara no Seidou"
              />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Malice Mizer
            </h3>
            <h4 className=" font-sans font-bold">Bara no Seidou</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small className=" block">em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/malice-mizer-bara-no-seidou-gshfy"
              >
                IR PARA A LOJA
              </a>
            </p>
          </li>

          <li className="flex flex-col">
            <figure>
              <img src={tsotb} alt="Camiseta - The Sins of They Beloved" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              The Sins of Thy Beloved
            </h3>
            <h4 className=" font-sans font-bold">Lake of Sorrow</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small className=" block">em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/the-sins-of-thy-beloved-lake-of-sorrow-v8ru5"
              >
                CAMISETA
              </a>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600 text-right
                          hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/the-sins-of-thy-beloved-lake-of-sorrow-2vnya"
              >
                BABY LOOK
              </a>
            </p>
          </li>
          {/* <li className="flex flex-col">
            <figure>
              <img src={theatre} alt="Camiseta - Theatre of Tragedy" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Theatre of Tragedy
            </h3>
            <h4 className=" font-sans font-bold">Velvet Darkness They Fear</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small className=" block">em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/theatre-of-tragedy-velvet-darkness-they-fear-a62ec"
              >
                CAMISETA
              </a>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600 text-right
                          hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/theatre-of-tragedy-velvet-darkness-they-fear-anmde"
              >
                BABY LOOK
              </a>
            </p>
          </li> */}
          <li className="flex flex-col">
            <figure>
              <img src={tristania} alt="Camiseta - Tristania" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Tristania
            </h3>
            <h4 className=" font-sans font-bold">Widow's Weeds</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small className=" block">em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/tristania-widow-s-weeds-77pnj"
              >
                CAMISETA
              </a>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600 text-right
                          hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/tristania-widow-s-weeds-baby-look-8ax07"
              >
                BABY LOOK
              </a>
            </p>
          </li>
          {/* <li className="flex flex-col">
            <figure>
              <img src={blaspheme} alt="Camiseta - Blaspheme" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Blasphème
            </h3>
            <h4 className=" font-sans font-bold">Blasphème</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small className=" block">em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/blaspheme-jehovah-abolition-ce6sh"
              >
                CAMISETA
              </a>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600 text-right
                          hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/blaspheme-8t3x4"
              >
                BABY LOOK
              </a>
            </p>
          </li>
          <li className="flex- flex-col">
            <figure>
              <img src={angeles} alt="Camiseta - Angeles del Infierno" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Angeles del Infierno
            </h3>
            <h4 className=" font-sans font-bold">Pacto con el Diablo</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small className=" block">em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/angeles-del-infierno-pacto-con-el-diablo-vju48"
              >
                CAMISETA
              </a>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600 text-right
                          hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/angeles-del-infierno-pacto-con-el-diablo-pz7y8"
              >
                BABY LOOK
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img src={rhapsody} alt="Camiseta - Rhapsody" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Rhapsody
            </h3>
            <h4 className=" font-sans font-bold">Legendary Tales</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small className=" block">em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/rhapsody-legendary-tales-yqg60"
              >
                CAMISETA
              </a>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600 text-right
                          hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/rhapsody-legendary-tales-pviz2"
              >
                BABY LOOK
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img src={darkmoor} alt="Camiseta - Dark Moor" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Dark Moor
            </h3>
            <h4 className=" font-sans font-bold">The Gates of Oblivion</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small className=" block">em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/dark-moor-the-gates-of-oblivion-r6r2c"
              >
                CAMISETA
              </a>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600 text-right
                          hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/dark-moor-the-gates-of-oblivion-o7pis"
              >
                BABY LOOK
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img src={ulver} alt="Camiseta - Ulver" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Ulver
            </h3>
            <h4 className=" font-sans font-bold">Nattens Madrigal</h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small className=" block">em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/ulver-nattens-madrigal-ta0b4"
              >
                CAMISETA
              </a>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600 text-right
                          hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/ulver-nattens-madrigal-x1ppw"
              >
                BABY LOOK
              </a>
            </p>
          </li>
          <li className="flex flex-col">
            <figure>
              <img src={oldmans} alt="Camiseta - Old Man's Child" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Old Man's Child
            </h3>
            <h4 className=" font-sans font-bold">
              Ill-Natured Spiritual Invasion
            </h4>

            <p>
              <del className="block text-xl">de R$ 100,00</del>
              <b className="block text-2xl">por R$ 95,00</b>
              <small className=" block">em até 3x sem juros</small>
            </p>
            <p>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/old-man-s-child-ill-natured-spiritual-invasion-qey7o"
              >
                CAMISETA
              </a>
              <a
                className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600 text-right
                          hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                href="https://loja.morterubra.com.br/old-man-s-child-ill-natured-spiritual-invasion-alvt4"
              >
                BABY LOOK
              </a>
            </p>
          </li> */}
        </ul>
      </section>
    </>
  );
}
