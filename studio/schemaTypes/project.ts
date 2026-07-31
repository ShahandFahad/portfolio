import { defineField, defineType } from 'sanity'

/**
 * Sanity Schema for Projects
 */
export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tech',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'preview',
      title: 'Preview Link',
      type: 'url',
    }),
    defineField({
      name: 'repo',
      title: 'Repository Link',
      type: 'url',
    }),
  ],
})
