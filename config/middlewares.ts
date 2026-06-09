export default ({ env }) => [
  'strapi::logger',
  'strapi::errors',

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

  {
    name: 'strapi::cors',
    config: {
      origin: ["http://localhost:3000",
  "https://patters0n58-roku-admin-gyc0ixai4-nagalakshmi-s-projects.vercel.app/",
  "https://roku-strapi.onrender.com"
],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      headers: ["Content-Type", "Authorization"],
    },
  },

  'strapi::poweredBy',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',

  {
    name: 'strapi::body',
    config: {
      formLimit: '60mb',
      jsonLimit: '10mb',
      textLimit: '10mb',
      multipart: true,
      formidable: {
        maxFileSize: 30 * 1024 * 1024,
      },
    },
  },
];