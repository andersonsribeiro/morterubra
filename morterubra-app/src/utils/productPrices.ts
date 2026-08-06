export type ProductType =
  | "t-shirt-black"
  | "t-shirt-white"
  | "oversized-black-front"
  | "oversized-black"
  | "oversized-off-white"
  | "oversized-white"
  | "estonada"
  | "estonada-front"
  | "premium-shirt-red"
  | "premium-shirt-off-white"
  | "bag"
  | "mug";

export type ProductPrice = {
  name: string;
  original: number;
  sale: number;
  release: number;
};

const productPrices: Record<ProductType, ProductPrice> = {
  "t-shirt-black": {
    name: "Camiseta Preta",
    original: 109.9,
    sale: 99.9,
    release: 89.9,
  },
  "t-shirt-white": {
    name: "Camiseta Branca",
    original: 109.9,
    sale: 99.9,
    release: 89.9,
  },
  "oversized-black": {
    name: "Camiseta Oversized Preta",
    original: 169.9,
    sale: 159.9,
    release: 149.9,
  },
  "oversized-black-front": {
    name: "Camiseta Oversized Preta",
    original: 159.9,
    sale: 149.9,
    release: 139.9,
  },
  "oversized-white": {
    name: "Camiseta Oversized Branca",
    original: 169.9,
    sale: 159.9,
    release: 149.9,
  },
  "oversized-off-white": {
    name: "Camiseta Oversized Off-White",
    original: 169.9,
    sale: 159.9,
    release: 149.9,
  },
  "premium-shirt-red": {
    name: "Malha Premium Vermelha",
    original: 109.9,
    sale: 99.9,
    release: 97.9,
  },
  "premium-shirt-off-white": {
    name: "Malha Premium Off-White",
    original: 109.9,
    sale: 99.9,
    release: 97.9,
  },
  estonada: {
    name: "Estonada",
    original: 129.9,
    sale: 119.9,
    release: 104.9,
  },
  "estonada-front": {
    name: "Estonada",
    original: 119.9,
    sale: 109.9,
    release: 104.9,
  },
  bag: {
    name: "Ecobag",
    original: 69.9,
    sale: 59.9,
    release: 49.9,
  },
  mug: {
    name: "Caneca",
    original: 49.9,
    sale: 39.9,
    release: 34.9,
  },
};

export function getProductPrice(type: ProductType): ProductPrice {
  return (
    productPrices[type] ?? {
      original: 0,
      sale: 0,
    }
  );
}
