module.exports = {
  siteUrl: 'https://www.jlpowertools.biz',
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