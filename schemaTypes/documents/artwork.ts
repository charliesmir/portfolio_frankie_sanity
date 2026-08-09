import {defineType} from "sanity";

export default defineType({
  name: "artwork",
    type: "document",
    fields: [
        {
            name: "name",
            type: "string",
            validation: (rule) => rule.required(),
        },
        {
            name: "info",
            type: "text",
            validation: (rule) => rule.required(),
        },
        {
            name: "image",
            type: "image",
            validation: (rule) => rule.required(),
        },
        {
            name: "description",
            type: "string",
        },
    ],
});