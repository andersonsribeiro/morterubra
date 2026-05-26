import sanslogique from "../../assets/img/LOJA_CAMISETA-THUMB-SANSLOGIQUE-A.png";
import maliceCollection from "../../assets/img/malicemizer-collection.jpg";
import direngrey from "../../assets/img/LOJA_THUMB-DEG-BLACK-A.jpg";
import bucktick from "../../assets/img/LOJA_CAMISETA-THUMB-DARKER-A.png";
import gulugulu from "../../assets/img/LOJA_CAMISETA-THUMB-GULUGULU-A.png";

export default function CrossSell() {
  return (
    <>
      <section id="cross-sell" className="py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-amber-100">
            Não deixe de conferir nossa{" "}
            <span className="text-red-600">coleção completa</span> de camisetas
            do <span className="text-red-600">Malice Mizer</span>
          </h2>
          <img
            className="my-10"
            src={maliceCollection}
            alt="Coleção completa de camisetas Malice Mizer"
          />
          <a
            className="block my-10 border-2 text-red-600 rounded-full py-3 px-5 border-red-600
              hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
            href="https://loja.morterubra.com.br/malice-mizer-sans-logique-ta9qd?o=bWFsaWNlLW1pemVyLXNhbnMtbG9naXF1ZS10YTlxZF9vY3RfMjYwMzg2"
          >
            VER COLEÇÃO COMPLETA
          </a>
        </div>

        <h2 className="text-center text-4xl mt-16 font-sans font-bold text-red-600">
          Explore mais do universo visual kei:
        </h2>
        <ul
          id="products"
          className="py-10 max-w-5xl mx-auto flex flex-wrap justify-center gap-4"
        >
          <li className="flex flex-col">
            <figure>
              <img src={direngrey} alt="Camiseta: Dir en Grey - Gauze" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              Dir en Grey
            </h3>
            <h4 className=" font-sans font-bold">Gauze</h4>

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
          <li className="flex flex-col">
            <figure>
              <img
                src={bucktick}
                alt="Camiseta: BUCK-TICK - darker than darkness -style 93-"
              />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              BUCK-TICK
            </h3>
            <h4 className=" font-sans font-bold">
              darker than darkness{" "}
              <span className="text-nowrap">-style 93-</span>
            </h4>

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
          <li className="flex flex-col">
            <figure>
              <img src={gulugulu} alt="Camiseta: gulu gulu - Gulu gulu" />
            </figure>
            <h3 className=" font-sans font-bold text-3xl text-red-600">
              gulu gulu
            </h3>
            <h4 className=" font-sans font-bold">Gulu gulu </h4>

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
