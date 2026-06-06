export default ({ env }) => [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::body',
    config: {
      formLimit: '60mb', // ⛔ blocks form submissions >60MB
      jsonLimit: '10mb', // ⛔ blocks JSON payloads >10MB
      textLimit: '10mb', // ⛔ blocks raw text >10MB
      multipart: true,
      formidable: {
        maxFileSize: 30 * 1024 * 1024, // ✅ 60 MB multipart limit
      },
    },
  },
  {
  name: 'strapi::cors',
  config: {
    origin: ['https://patters0n58-roku-admin-973ktk8ew-nagalakshmi-s-projects.vercel.app/'],
  },
},
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            `${env('AWS_BUCKET')}.s3.${env('AWS_REGION')}.amazonaws.com`,
            env('CDN_DOMAIN'),
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            `${env('AWS_BUCKET')}.s3.${env('AWS_REGION')}.amazonaws.com`,
            env('CDN_DOMAIN'),
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
