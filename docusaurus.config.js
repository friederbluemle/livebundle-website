module.exports = {
  title: 'LiveBundle',
  tagline: 'For React Native',
  url: 'https://electrode-io.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'electrode-io', // Usually your GitHub org/user name.
  projectName: 'livebundle-website', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/electrode-io/livebundle',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Walmart. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
          remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
        },
      },
    ],
  ],
};
