'use strict';

module.exports = {
  title: 'Date',
  status: 'beta',
  handle: 'date',
  collated: true,
  context: {
    label: 'Label date',
    for: 'date_id',
    label_optional: 'Optional',

    field_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex pellentesque neque, nec ultrices dui enim ut diam. Nam pellentesque velit pharetra, accumsan ante at, gravida turpis. Cras venenatis velit ut ipsum molestie pretium. Vivamus tellus metus, pretium eu nibh vitae, eleifend luctus dolor. Morbi feugiat tristique ante eu egestas. Nunc ligula magna, fringilla sed consequat id, pellentesque at risus. Nunc ex elit, tincidunt at lorem vel, mattis gravida nisl. Praesent sodales nibh massa, id ultrices metus viverra id.',
    field_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet, urna sit amet convallis rhoncus, felis ex.',
    description: 'Description date field.',

    date_id: 'date_id',
    date_name: 'date_name'
  },
  variants: [
    {
      name: 'default',
      handle: 'date'
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
