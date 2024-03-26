import { ImageAsset } from "sanity";

const products = {
  title: "Products",
  type: "document",
  name: "products",
  fields: [
    {
      name: "product_images",
      title: "Porduct Images",
      type: "array",
      of: [{ type: "image" }],
      validation: (r: any) =>
        r.custom((props: ImageAsset[]) => {
          console.log(props);
          if (props.length > 5) {
            return "You can't have more than 5 images";
          }
          if (props.length < 1 || !props) {
            return "you need to have at least one product image";
          }
          return true;
        }),
    },
    {
      name: "product_name",
      title: "Product Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "availability",
      title: "Availability",
      description: "please double check the quanity field",
      type: "object",
      fields: [
        {
          name: "inStock",
          title: "InStock ?",
          type: "boolean",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "quantity",
          type: "number",
          title: "Quanity",
        },
      ],
      initialValue: {
        inStock: false,
        quantity: 0,
      },
      validation: (rule: any) =>
        rule.custom(
          (props: { inStock: boolean; quantity: undefined | number }) => {
            if (!props.inStock && props.quantity && props.quantity > 0) {
              return "Please make sure there are products in stock before setting the quantity";
            }
            console.log(props, Boolean(props.quantity));
            if (props.inStock && !Boolean(props.quantity)) {
              return "You can't have less than one item in stock. If out of stock, please tick 'In Stock'.";
            }
            return true;
          }
        ),
    },
    {
      title: "Categories",
      name: "categories",
      type: "string",
      options: {
        list: [
          { title: "Messangers", value: "messangers" },
          { title: "Laptop Bags", value: "laptop_bags" },
          { title: "Travel Luggage", value: "travel_luggage" },
          { title: "Backpacks", value: "backpacks" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "onSale",
      title: "On Sale",
      type: "object",
      fields: [
        {
          name: "is_sale",
          title: "Is Sale?",
          type: "boolean",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "salePrice",
          title: "Sale Price",
          type: "number",
          description:
            "note that if onSale true and the value of salePrice is less than 1 or empty the price is free",
        },
      ],
      initialValue: {
        is_sale: false,
        salePrice: 0,
      },
    },
  ],
  preview: {
    select: {
      title: "product_name",
      subtitle: "price",
      media: "product_images",
    },
    prepare({
      title,
      subtitle,
      media,
    }: {
      title: string;
      subtitle: string;
      media: ImageAsset;
    }) {
      return {
        title: `${title}`,
        subtitle: `Price is: ${subtitle}$`,
        media: media[0],
      };
    },
  },
};
export default products;
