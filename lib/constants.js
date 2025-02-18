export const TAGS = {
    collections: "collections",
    products: "products",
    cart: "carg"
};

export const SHOPIFY_GRAPHQL_API_ENDPOINT = "/api/2025-01/graphql.json";

export const defaultSort = {title:"Relevance",slug:null, sortKey:"RELEVANCE",reverse:false};

export const sorting = [
  defaultSort,
  {
    title: "Trending",
    slug: "trending-desc",
    sortKey: "BEST_SELLING",
    reverse: false,
  },
  {
    title: "Last Arrivals",
    slug: "latest-desc",
    sortKey: "CREATED_AT",
    reverse: true,
  },
  {
    title: "Price: Low to High",
    slug: "price-asc",
    sortKey: "PRICE",
    reverse: false,
  },
  {
    title: "Price: High to Low",
    slug: "price-desc",
    sortKey: "PRICE",
    reverse: true,
  },
];