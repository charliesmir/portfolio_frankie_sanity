import { defineType } from "sanity";

export default defineType({
    name: "artworksSection",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            validation: (rule) => rule.required(),
        },
        {
            name: "collections",
            type: "array",
            of: [{ type: "reference", to: [{ type: "collection" }] }],
            validation: (rule) => rule.required(),
        } 
    ],
});