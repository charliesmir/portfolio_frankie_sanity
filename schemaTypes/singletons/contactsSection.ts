import { defineType } from "sanity";

export default defineType({
    name: "contactsSection",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            validation: (rule) => rule.required(),
        },
        {
            name: "contacts",
            type: "array",
            of: [{ type: "contact" }],
            validation: (rule) => rule.required(),
        },
    ],
});