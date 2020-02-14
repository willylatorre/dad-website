

module.exports = {
  siteName: 'JI Latorre',
  siteDescription: "JI Latorre's personal website",
  siteUrl: 'https://joseignaciolatorre.com',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.CTF_SPACE_ID, // required
        accessToken: process.env.CTF_CDA_ACCESS_TOKEN, // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
       /* These are the default options. You don't need to set any options to get going.
      options: {
        tailwindConfig: './some/file/js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      }
      */
    }
  ]
}
