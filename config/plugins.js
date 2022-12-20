module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("CLOUDINARY_NAME"),
      api_key: env("CLOUDINARY_KEY"),
      api_secret: env("CLOUDINARY_SECRET"),
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
  email: {
    config: {
        provider: 'strapi-provider-email-sendinblue',
        providerOptions: {
            sendinblue_api_key: env('SENDINBLUE_API_KEY'),
            sendinblue_default_replyto: 'mohanganesh@gmail.com',
            sendinblue_default_from: 'mohanganesh@gmail.com',
            sendinblue_default_from_name: 'mohanganesh@gmail.com'
        },
    },
  },
  // ...
});
