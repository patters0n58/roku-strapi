module.exports = {
  register({ strapi }) {
    strapi.customFields.register({
      name: 'spacing_field',
      plugin: 'ui',
      type: 'string',
    });

    strapi.customFields.register({
      name: 'color_field',
      plugin: 'ui',
      type: 'string',
    });

    strapi.customFields.register({
      name: 'corner_field',
      plugin: 'ui',
      type: 'string',
    });
  },
};
