import {defineType} from "sanity";

export default defineType({
    name: "exhibition",
    type: "object",
    fields: [
        {
            name: "name",
            type: "string",
            validation: (rule) => rule.required(),
        },
        {
            name: "place",
            type: "string",
            validation: (rule) => rule.required(),
        },
        {
            name: "years",
            type: "string",
            validation: (rule) => rule.required(),
        },
        {
            name: "link",
            type: "string",
        },
    ],
});