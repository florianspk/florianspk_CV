module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3051390d62e8c73ad71b8c2bab9b1bfc'),
  },
});
