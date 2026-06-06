// export default () => ({});

export default ({ env }) => ({
  documentation: {
    enabled: true,
    config: {
      openapi: '3.0.0',
      info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'Auto-generated docs for Strapi endpoints',
      },
    },
  },
  'export-csv': {
    enabled: true,
    config: {
      // Global settings (apply to all content types)
      batchSize: 50,
    },
  },
  upload: {
    config: {
      provider: '@strapi/provider-upload-aws-s3',
      providerOptions: {
        baseUrl: env('CDN_URL'),
        rootPath: env('CDN_ROOT_PATH'), // optional, default value is an empty string
        s3Options: {
          region: env('AWS_REGION'),
          params: {
            Bucket: env('AWS_BUCKET'),
            ACL: env('AWS_ACL'),
            // signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
      sizeLimit: 30 * 1024 * 1024,
    },
  },
  ui: {
    enabled: true,
    resolve: './src/plugins/ui',
  },
});
