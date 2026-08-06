import shirtSize from "../../assets/img/shirt-size.png";

export default function Tamanhos() {
  return (
    <>
      <section id="tamanhos" className="py-16 px-3 bg-red-800 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-amber-100">Informações importantes</h2>

          {/* <img className="mr-7" src={shirtSize} width="300" alt="" /> */}
          <h3 className="font-sans text-4xl mt-8 font-bold">
            <span className="text-black">Sua primeira compra com a gente?</span>{" "}
            Confira nossa tabela de medidas para não errar na escolha.
          </h3>
          <ul className="my-10 flex flex-wrap justify-center gap-4">
            <li className="inline-block">
              <img className="mr-7" src={shirtSize} width="200" alt="" />
            </li>
            <li className="bg-black p-6 inline-block">
              <h4 className="font-sans font-bold text-5xl mb-5">P</h4>
              <div>
                <b>LARGURA</b>
                <br />
                <span className="text-red-600">46-50cm</span>
              </div>
              <div>
                <b className="">COMPRIMENTO</b>
                <br />
                <span className="text-red-600">65-69cm</span>
              </div>
            </li>
            <li className="bg-black p-6 inline-block">
              <h4 className="font-sans font-bold text-5xl mb-5">M</h4>
              <div>
                <b>LARGURA</b>
                <br />
                <span className="text-red-600">48-52cm</span>
              </div>
              <div>
                <b>COMPRIMENTO</b>
                <br />
                <span className="text-red-600">67-71cm</span>
              </div>
            </li>
            <li className="bg-black p-6 inline-block">
              <h4 className="font-sans font-bold text-5xl mb-5">G</h4>
              <div>
                <b>LARGURA</b>
                <br />
                <span className="text-red-600">53-57cm</span>
              </div>
              <div>
                <b>COMPRIMENTO</b>
                <br />
                <span className="text-red-600">69-73cm</span>
              </div>
            </li>
            <li className="bg-black p-6 inline-block">
              <h4 className="font-sans font-bold text-5xl mb-5">GG</h4>
              <div>
                <b>LARGURA</b>
                <br />
                <span className="text-red-600">56-60cm</span>
              </div>
              <div>
                <b>COMPRIMENTO</b>
                <br />
                <span className="text-red-600">72-76cm</span>
              </div>
            </li>
            <li className="bg-black p-6 inline-block">
              <h4 className="font-sans font-bold text-5xl mb-5">XGG</h4>
              <div>
                <b>LARGURA</b>
                <br />
                <span className="text-red-600">59-63cm</span>
              </div>
              <div>
                <b>COMPRIMENTO</b>
                <br />
                <span className="text-red-600">73-77cm</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
