export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    sessions: {
      maxSessionLifespan: 3600, // Access token/session lifespan
      maxRefreshTokenLifespan: 604800, // Refresh token lifespan
      accessTokenLifespan: 3600, // Access token/session lifespan in seconds
    },
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: false,
    promoteEE: false,
  },
  preview: {
    enabled: false,
  },
});
