// next.config.js
const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  });
  
  module.exports = withPWA({
    // Any other Next.js configuration options can go here
    reactStrictMode: true,
  });
  