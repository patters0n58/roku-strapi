import SpacingIcon from './components/SpacingIcon';
import ColorIcon from './components/ColorIcon';
import CornerIcon from './components/CornerIcon';

export default {
  register(app: any) {
    app.registerPlugin({
      id: 'ui',
      name: 'ui',
    });

    app.customFields.register({
      name: 'spacing_field',
      pluginId: 'ui',
      type: 'string',
      intlLabel: {
        id: 'ui.custom-fields.spacing.label',
        defaultMessage: 'Spacing field',
      },
      intlDescription: {
        id: 'ui.custom-fields.spacing.description',
        defaultMessage: 'Configuration for spacing',
      },
      icon: SpacingIcon,
      components: {
        Input: async () => import('./components/Spacing').then((module) => ({ default: module.SpacingInput })),
      },
      options: {},
    });

    app.customFields.register({
      name: 'color_field',
      pluginId: 'ui',
      type: 'string',
      intlLabel: {
        id: 'ui.custom-fields.color.label',
        defaultMessage: 'Color field',
      },
      intlDescription: {
        id: 'ui.custom-fields.color.description',
        defaultMessage: 'Configuration for color',
      },
      icon: ColorIcon,
      components: {
        Input: async () => import('./components/Color').then((module) => ({ default: module.ColorInput })),
      },
      options: {},
    });

    app.customFields.register({
      name: 'corner_field',
      pluginId: 'ui',
      type: 'string',
      intlLabel: {
        id: 'ui.custom-fields.corner.label',
        defaultMessage: 'Corner field',
      },
      intlDescription: {
        id: 'ui.custom-fields.corner.description',
        defaultMessage: 'Configuration for corner',
      },
      icon: CornerIcon,
      components: {
        Input: async () => import('./components/Corner').then((module) => ({ default: module.CornerInput })),
      },
      options: {},
    });
  },
};
