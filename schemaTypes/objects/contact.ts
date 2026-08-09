import { defineType } from 'sanity';

export default defineType({
  name: 'contact',
  type: 'object',
  fields: [
    {
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'link',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'icon',
      type: 'image',
      validation: (rule) => rule.required(),
    },
  ],
});