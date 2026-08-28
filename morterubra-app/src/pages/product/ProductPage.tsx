import { useParams } from "react-router-dom";
import FAQ from "./FAQ";
import Tamanhos from "./Tamanhos";
import {
  getProductPrice,
  ProductType,
  ProductPrice,
} from "../../utils/productPrices";

interface Product {
  title: string;
  bandName: string;
  bandSlug: string;
  album: string;
  albumSlug: string;
  category: string;
  categorySlug: string;
  description: string;
  imageBase: string;
  products: {
    type: ProductType;
    name: ProductPrice["name"];
    original: ProductPrice["original"];
    sale: ProductPrice["sale"];
    url: string;
  }[];
}

const productFiles = import.meta.globEager(
  "../../data/products/**/*.json",
) as Record<string, Product>;

export default function ProductPage() {
  const { bandSlug, albumSlug } = useParams<{
    bandSlug: string;
    albumSlug: string;
  }>();

  const productPath = `../../data/products/${bandSlug}/${albumSlug}.json`;

  const product = productFiles[productPath] as Product;

  if (!product) {
    return (
      <>
        <div className="max-w-4xl mt-36 mx-auto p-4">
          <h1>Produto não encontrado</h1>
        </div>

        <FAQ />
      </>
    );
  }

  return (
    <>
      <main className="bg-red-800 py-8">
        <div className="max-w-5xl mx-auto mt-36">
          <h1 className="text-amber-100">{product.title}</h1>
          <p className="py-6 text-black">{product.description}</p>
        </div>
      </main>

      <section className="mt-12 max-w-5xl mx-auto">
        <h2 className="text-3xl">Escolha seu produto</h2>

        <ul id="products" className="mt-5">
          {product.products.map((item) => {
            const price = getProductPrice(item.type);
            return (
              <li>
                <figure>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={product.imageBase + "/" + item.type + ".webp"}
                      alt={product.title + " (" + item.name + ")"}
                    />
                  </a>
                </figure>

                <h3 className=" font-sans font-bold">{item.name}</h3>
                <p>
                  <del className="block text-xl">
                    de R$ {price.original.toFixed(2).replace(".", ",")}
                  </del>
                  por apenas
                  <b className="block text-2xl">
                    <span>
                      R${" "}
                      {(albumSlug === "beyond-the-veil" || albumSlug === "aegis"
                        ? price.release
                        : price.sale
                      )
                        .toFixed(2)
                        .replace(".", ",")}
                    </span>
                  </b>
                  <small>em até 3x sem juros</small>
                </p>

                <a
                  className="block my-4 border-2 text-red-600 rounded-full py-3 px-5 border-red-600 hover:bg-red-600 hover:text-amber-100 hover:font-bold transition"
                  key={item.type}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  COMPRAR
                </a>
              </li>
            );
          })}
        </ul>
      </section>

      <Tamanhos />
      <FAQ />
    </>
  );
}
