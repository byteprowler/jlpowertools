module.exports = {
  siteUrl: 'https://www.jlpowertools.com.ng',
  generateRobotsTxt: true,
  exclude: ['/admin/*', '/cart/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/cart'],
      }
    ],
  },
};