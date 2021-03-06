'use strict';

module.exports = {
  title: 'Input search',
  status: 'beta',
  handle: 'input-search',
  context: {
    placeholder: 'Placeholder input search',
    search_name: 'search_name',
    search_id: 'search_id'
  },
  variants: [
    {
      name: 'default',
      handle: 'input-search'
    },
    {
      name: 'success',
      hidden: 'hidden',
      context: {
        modifier: 'success'
      }
    },
    {
      name: 'error',
      hidden: 'hidden',
      context: {
        modifier: 'error'
      }
    },
    {
      name: 'disabled',
      hidden: 'hidden',
      context: {
        disabled: true
      }
    }
  ]
};
