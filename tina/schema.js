import { defineSchema } from 'tinacms';

export default defineSchema({
  collections: [
    {
      name: 'services',
      label: 'Services',
      path: 'src/content/services',
      format: 'json',
      fields: [
        { type: 'string', name: 'title', label: 'Title' },
        { type: 'image',  name: 'img',   label: 'Image' },
      ],
    },
    {
      name: 'gallery',
      label: 'Gallery',
      path: 'src/content/gallery',
      format: 'json',
      fields: [
        { type: 'image', name: 'photo', label: 'Photo' },
      ],
    },
  ],
});