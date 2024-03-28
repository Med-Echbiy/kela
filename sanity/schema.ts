import { type SchemaTypeDefinition } from "sanity";
import products from "./products";
import { about } from "./about";
import { terms_conditions } from "./terms_condition";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, about, terms_conditions],
};
