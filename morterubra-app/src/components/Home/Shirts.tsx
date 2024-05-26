import theatre from "../../assets/img/SITE_CAMISETA-THUMB-TRISTANIA.png";
import tristania from "../../assets/img/SITE_CAMISETA-THUMB-THEATRE.png";
import tsotb from "../../assets/img/SITE_CAMISETA-THUMB-TSOTB.png";
import ulver from "../../assets/img/SITE_CAMISETA-THUMB-ULVER.png";
import oldmans from "../../assets/img/SITE_CAMISETA-THUMB-OLDMANS.png";
import angeles from "../../assets/img/SITE_CAMISETA-THUMB-ANGELES.png";
import blaspheme from "../../assets/img/SITE_CAMISETA-THUMB-BLASPHEME.png";
import rhapsody from "../../assets/img/SITE_CAMISETA-THUMB-RHAPSODY.png";
import darkmoor from "../../assets/img/SITE_CAMISETA-THUMB-DARKMOOR.png";

export default function Shirts() {
  return (
    <>
      <div className="bg-red-800 py-12">
        <p className=" max-w-2xl mx-auto text-center text-black font-sans text-5xl p-5 font-bold">
          Lançamento dia <span className="text-amber-100">01/06</span> com{" "}
          <span className="text-amber-100">9 estampas</span> em design exclusivo
        </p>
      </div>
      <div className=" text-center py-4 px-2 bg-amber-100 text-black">
        camisetas 100% algodão / fio penteado 30.1 / impressão em silk digital
        com alta definição
      </div>

      <section className=" my-16 relative max-w-5xl mx-auto flex flex-wrap justify-center">
        <img
          className="w-1/3 max-sm:w-3/4 max-sm:mb-4"
          src={theatre}
          alt="Camiseta - Theatre of Tragedy"
        />
        <img
          className="w-1/3 max-sm:w-3/4 max-sm:mb-4"
          src={tristania}
          alt="Camiseta - Tristania"
        />
        <img
          className="w-1/3 max-sm:w-3/4 max-sm:mb-4"
          src={tsotb}
          alt="Camiseta - Ths Sins of Thy Beloved"
        />
        <img
          className="w-1/3 max-sm:w-3/4 max-sm:mb-4"
          src={ulver}
          alt="Camiseta - Ulver"
        />
        <img
          className="w-1/3 max-sm:w-3/4 max-sm:mb-4"
          src={oldmans}
          alt="Camiseta - Old Man's Child"
        />
        <img
          className="w-1/3 max-sm:w-3/4 max-sm:mb-4"
          src={angeles}
          alt="Camiseta - Angeles del Infierno"
        />
        <img
          className="w-1/3 max-sm:w-3/4 max-sm:mb-4"
          src={blaspheme}
          alt="Camiseta - Blaspheme"
        />
        <img
          className="w-1/3 max-sm:w-3/4 max-sm:mb-4"
          src={rhapsody}
          alt="Camiseta - Rhapsody"
        />
        <img
          className="w-1/3 max-sm:w-3/4 max-sm:mb-4"
          src={darkmoor}
          alt="Camiseta - Dark Moor"
        />
      </section>
    </>
  );
}
