import albumCover from "../../assets/img/baranoseidou-album-cover.png";
import bgAlbum from "../../assets/img/baranoseidou-bg-album.gif";

export default function Album() {
  return (
    <>
      <section
        id="album"
        style={{ backgroundImage: `url(${bgAlbum})`, backgroundSize: "cover" }}
        className="py-20 px-10"
      >
        <div className="max-w-5xl mx-auto flex gap-6 max-sm:flex-col">
          <figure>
            <img
              className="min-w-60"
              src={albumCover}
              alt="Malice Mizer - Bara no Seidou"
            />
          </figure>
          <div>
            <h2 className="mb-10 text-amber-100">
              Sobre <span className="italic">Bara no Seidou</span> do{" "}
              <span className="italic">Malice Mizer</span>
            </h2>
            <p className="my-4">
              <span className="bg-black inline">
                Lançado em 2000, <b>Bara no Seidou</b> é um dos álbuns mais
                emblemáticos da fase final do <b>Malice Mizer</b>. Com uma
                abordagem ainda mais sombria e teatral, o disco aprofunda os
                elementos góticos e clássicos que definiram a identidade da
                banda.
              </span>
            </p>
            <p className="my-4">
              <span className="bg-black inline">
                A atmosfera do álbum é marcada por arranjos densos, influências
                de música erudita e uma estética visual cuidadosamente
                construída — elementos que transformaram essa fase em uma das
                mais cultuadas pelos fãs.
              </span>
            </p>
            <p className="my-4">
              <span className="bg-black inline">
                <b>Bara no Seidou</b> não é apenas um álbum: é uma experiência
                imersiva dentro do universo decadente e sofisticado do Visual
                Kei.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
