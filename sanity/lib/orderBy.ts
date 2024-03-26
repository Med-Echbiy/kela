type OrderBy =
  | "featured"
  | "bestSelling"
  | "a-z"
  | "z-a"
  | "lowToHigh"
  | "highToLow"
  | "newToOld"
  | "oldToNew";
export default function OrderByFc(orderArg: OrderBy) {
  let orderBy = orderArg;
  let orderArgument = {
    order: "_createdAt",
    by: "asc",
  };
  switch (orderBy) {
    case "a-z":
      orderArgument = {
        order: "product_name",
        by: "asc",
      };
      break;
    case "z-a":
      console.log("=>z-a");
      orderArgument.by = "desc";
      orderArgument.order = "product_name";
      break;
    case "newToOld":
      orderArgument = {
        order: "_createdAt",
        by: "asc",
      };
      break;
    case "oldToNew":
      orderArgument = {
        order: "_createdAt",
        by: "desc",
      };
      break;
    case "highToLow":
      orderArgument = {
        order: "price",
        by: "desc",
      };
      break;
    case "lowToHigh":
      orderArgument = {
        order: "price",
        by: "asc",
      };
      break;
  }
  return orderArgument;
}
