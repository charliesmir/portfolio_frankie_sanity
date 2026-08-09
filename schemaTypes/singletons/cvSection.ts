import { defineType } from "sanity";

export default defineType({
  name: "cvSection",
  type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            validation: (rule) => rule.required(),
        },
        {
            name: "statement",
            type: "text",
            validation: (rule) => rule.required(),
        },
        {
            name: "exhibitions",
            type: "array",
            of: [{ type: "exhibition" }],
            validation: (rule) => rule.required(),
        },
        {
            name: "educations",
            type: "array",
            of: [{ type: "education" }],
            validation: (rule) => rule.required(),
        },
        {
            name: "experiences",
            type: "array",
            of: [{ type: "experience" }],
            validation: (rule) => rule.required(),
        }
    ],
});