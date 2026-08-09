import { defineType} from "sanity";

export default defineType({
    name: "titleSection",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            validation: (rule) => rule.required(),
        },
        {
            name: "surname",
            type: "string",
            validation: (rule) => rule.required(),
        },
        {
            name: "about",
            type: "string",
            validation: (rule) => rule.required(),
        },
        {
            name: "image",
            type: "image",
            validation: (rule) => rule.required(),
        }
    ],
});