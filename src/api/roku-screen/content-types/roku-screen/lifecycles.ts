import { errors } from '@strapi/utils';
const { ValidationError } = errors;

export default {
  async beforeCreate(event) {
    const { data } = event.params;
    validateUniqueLoginComponent(data.page_blocks);
  },

  async beforeUpdate(event) {
    const { data } = event.params;
    validateUniqueLoginComponent(data.page_blocks);
  },
};

function validateUniqueLoginComponent(pageBlocks: any[]) {
  if (!pageBlocks || !Array.isArray(pageBlocks)) {
    return;
  }

  // Count instances of the roku.login component inside the dynamic zone
  const loginComponents = pageBlocks.filter(block => block.__component === 'roku.login');

  if (loginComponents.length > 1) {
    throw new ValidationError('You can only add the Login component once in a Roku Screen.');
  }
}
