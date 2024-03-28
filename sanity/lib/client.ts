import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";
import { Product } from "@/types";
import OrderByFc from "./orderBy";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

let initQuery = {
  start: 0,
  end: 12,
};
type OrderBy =
  | "featured"
  | "bestSelling"
  | "a-z"
  | "z-a"
  | "lowToHigh"
  | "highToLow"
  | "newToOld"
  | "oldToNew";

export async function getProducts(
  page: number,
  query: { end: number; start: number } = initQuery,
  orderBy: OrderBy = "featured"
) {
  query.start = query.end * (page - 1);
  query.end = query.end * page;
  let orderArgument = {
    order: "_createdAt",
    by: "asc",
  };
  orderArgument = OrderByFc(orderBy);
  console.log(typeof orderBy, orderArgument);
  const req: Product[] = await client.fetch(
    `*[_type == 'products'] | order(${orderArgument.order} ${orderArgument.by})[$start...$end]`,
    {
      start: query.start,
      end: query.end,
    },
    {
      cache: "no-cache",
    }
  );
  return req;
}

export async function getProductsItemsLength() {
  const numberOfItems: number = await client.fetch(
    `count(*[_type == "products"])`
  );
  return numberOfItems;
}
export async function getSaleProductsItemsLength() {
  const numberOfItems: number = await client.fetch(
    `count(*[_type == "products" && onSale.is_sale == $sale])`,
    {
      sale: true,
    }
  );
  return numberOfItems;
}
//

export async function getSaleProducts(
  page: number,
  query: { end: number; start: number } = initQuery,
  orderBy: OrderBy = "featured"
) {
  query.start = query.end * (page - 1);
  query.end = query.end * page;
  let orderArgument = {
    order: "_createdAt",
    by: "asc",
  };
  orderArgument = OrderByFc(orderBy);
  console.log(typeof orderBy, orderArgument);
  const req: Product[] = await client.fetch(
    `*[_type == 'products' && onSale.is_sale == ${true} ] | order(${
      orderArgument.order
    } ${orderArgument.by})[$start...$end]`,
    {
      start: query.start,
      end: query.end,
      sale: true,
    },
    {
      cache: "no-cache",
    }
  );
  return req;
}

export async function getProduct(id: string) {
  const product = (await client.fetch(
    "*[_type == 'products' && _id == $id ][0]",
    { id },
    {
      cache: "no-cache",
    }
  )) as Product;
  return product;
}

export async function youMayLike(category: string, id: string) {
  const data: Product[] = await client.fetch(
    `*[_type == "products" && categories == '${category}' && _id != '${id}'][0...4]`,
    {
      category,
    }
  );
  return data;
}

export async function getCtaegoryProducts(
  page: number,
  query: { end: number; start: number } = initQuery,
  orderBy: OrderBy = "featured",
  category: string
) {
  query.start = query.end * (page - 1);
  query.end = query.end * page;
  let orderArgument = {
    order: "_createdAt",
    by: "asc",
  };
  orderArgument = OrderByFc(orderBy);
  console.log(typeof orderBy, orderArgument);
  const req: Product[] = await client.fetch(
    `*[_type == 'products' && categories == '${category}' ] | order(${orderArgument.order} ${orderArgument.by})[$start...$end]`,
    {
      start: query.start,
      end: query.end,
      sale: true,
    },
    {
      cache: "no-cache",
    }
  );
  return req;
}
export async function getCategoryProductsItemsLength(category: string) {
  const numberOfItems: number = await client.fetch(
    `count(*[_type == "products" && categories == '${category}' ])`,
    {
      category: category,
    },
    {
      cache: "no-cache",
    }
  );
  return numberOfItems;
}
export async function searchProducts(
  page: number,
  query: { end: number; start: number } = initQuery,
  orderBy: OrderBy = "featured",
  searchString: string
) {
  query.start = query.end * (page - 1);
  query.end = query.end * page;
  let orderArgument = {
    order: "_createdAt",
    by: "asc",
  };
  orderArgument = OrderByFc(orderBy);
  console.log(typeof orderBy, orderArgument);
  const req: Product[] = await client.fetch(
    `*[_type == 'products' &&  product_name match '${
      "*" + searchString + "*"
    }' ] | order(${orderArgument.order} ${orderArgument.by})[$start...$end]`,
    {
      start: query.start,
      end: query.end,
      sale: true,
      search: searchString,
    },
    {
      cache: "no-cache",
    }
  );
  return req;
}
export async function searchProudctsLengths(searchString: string) {
  const numberOfItems: number = await client.fetch(
    `count(*[_type == 'products' &&  product_name match '${
      "*" + searchString + "*"
    }' ])`,
    {
      searchString: searchString,
    },
    {
      cache: "no-cache",
    }
  );
  return numberOfItems;
}

export async function getAboutInfo() {
  const data = await client.fetch(
    `*[_type == 'about_us'][0]`,
    {},
    {
      cache: "no-cache",
      next: { revalidate: 1000 },
    }
  );
  return data;
}
export async function getTermsConditions() {
  const data = await client.fetch(
    `*[_type == 'terms_conditions'][0]`,
    {},
    {
      cache: "no-cache",
      next: { revalidate: 1000 },
    }
  );
  return data;
}
