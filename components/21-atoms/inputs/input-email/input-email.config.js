'use strict';

module.exports = {
  title: 'Input email',
  status: 'beta',
  handle: 'input-email',
  context: {
    email_name: 'email_name',
    email_id: 'email_id'
  },
  variants: [
    {
      name: 'default',
      handle: 'input-email'
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
