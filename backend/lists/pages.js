const { Text, Url, Checkbox, Relationship } = require('@keystonejs/fields');
const { atTracking, byTracking } = require('@keystonejs/list-plugins');

module.exports = {
  adminDoc: 'A list of all pages.',
  schemaDoc: 'A list of all pages.',
  labelResolver: item => `${item.name}`,
  labelField: 'name',
  access: {
    // 1. Only admins can read deactivated user accounts
    read: ({ authentication: { item } }) => {
      if (item.isAdmin) {
        return {}; // Don't filter any items for admins
      }
      // Approximately; users.filter(user => user.state !== 'deactivated');
      return {
        isComplete: 'checked',
      };
    },
  },
  fields: {
    // existing fields
    website: {
      type: Relationship,
      ref: 'Websites',
      many: false,
      isRequired: true,
    },
    name: {
      type: Text,
      isRequired: true,
    },
    url: {
      type: Url,
      isRequired: true,
    },
    isActive: {
      type: Checkbox,
      defaultValue: true,
    },
  },
  adminConfig: {
    defaultColumns: 'name, url, isActive',
    defaultPageSize: 10,
    // defaultSort: 'date',
  },
  plugins: [
    byTracking(

    ),
    atTracking(

    ),
  ],
  label: 'Page',
};