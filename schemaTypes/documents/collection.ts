import {defineType} from "sanity";

export default defineType({
  name: "collection",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "description",
      type: "text",
      validation: (rule) => rule.required(),
    },
    {
      name: "artworks",
      type: "array",
      of:[{ type: "reference", to: [{type: "artwork"}] }],
      validation: (rule) => rule.required(),
    },
    {
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "artworks.0.image",
    },
  },
  
}); 