import baranoseidouHeader from "../../assets/img/baranoseidou_header.gif";
import bgAlbum from "../../assets/img/baranoseidou-bg-album.gif";
import Hero from "./Hero";
import Proof from "./Proof";
import Album from "./Album";
import Design from "./Design";
import CTA from "./CTA";
import CrossSell from "./CrossSell";
import Tamanhos from "./Tamanhos";
import FAQ from "./FAQ";

export default function Page() {
  return (
    <>
      <div
        className="h-24 mt-32"
        style={{ backgroundImage: `url(${bgAlbum})`, backgroundSize: "cover" }}
      ></div>
      <Hero />
      <Proof />
      <Album />
      <Design />
      <CTA />
      <CrossSell />
      <Tamanhos />
      <FAQ />
    </>
  );
}
