export const terms_conditions = {
  type: "document",
  title: "Terms Conditions",
  name: "terms_conditions",
  singleton: true,
  fields: [
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
