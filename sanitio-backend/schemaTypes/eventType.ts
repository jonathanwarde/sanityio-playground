import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source:'name'},
      validation: (rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any } } }) => rule.required().error('Slug must be generated')
    }),
    defineField({
      name: 'eventType',
      type: 'string',
      options: {
        list: ['in-person', 'online'],
        layout: 'radio'
      }
    }),
    defineField({
      name: 'date',
      type: 'datetime',
    }),
    defineField({
      name: 'doorsOpen',
      description: 'Minutes before event starts',
      type: 'number',
      initialValue: 60
    }),
    defineField({
      name: 'venue',
      type: 'reference',
      to: [{type: 'venue'}]
    }),
    defineField({
      name: 'headline',
      type: 'reference',
      to: [{type: 'artist'}]
    }),
    defineField(
      {
        name: 'details',
        type: 'array',
        of: [{type: 'block'}]
      },
    ),
    defineField(
      {
        name: 'tickets',
        type: 'url',
      },
    )
  ],
})