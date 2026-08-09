import {defineType} from "sanity";

export default defineType({
    name: "education",
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
    ],
});