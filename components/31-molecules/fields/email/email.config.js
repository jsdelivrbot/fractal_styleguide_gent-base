'use strict';

module.exports = {
  title: 'Email',
  status: 'beta',
  handle: 'email',
  collated: true,
  context: {
    label: 'Label email',
    for: 'email_id',
    label_optional: 'Optional',

    field_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex pellentesque neque, nec ultrices dui enim ut diam. Nam pellentesque velit pharetra, accumsan ante at, gravida turpis. Cras venenatis velit ut ipsum molestie pretium. Vivamus tellus metus, pretium eu nibh vitae, eleifend luctus dolor. Morbi feugiat tristique ante eu egestas. Nunc ligula magna, fringilla sed consequat id, pellentesque at risus. Nunc ex elit, tincidunt at lorem vel, mattis gravida nisl. Praesent sodales nibh massa, id ultrices metus viverra id.',
    field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex.',
    description: 'Description email.',

    email_id: 'email_id',
    email_name: 'email_name'
  },
  variants: [
    {
      name: 'default',
      handle: 'email'
    },
    {
      name: 'with-error',
      context: {
        modifier: 'error'
      }
    },
    {
      name: 'with-success',
      context: {
        modifier: 'success'
      }
    }
  ]
};
