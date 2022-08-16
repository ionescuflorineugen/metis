// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Metis',
  tagline: 'Knowledge is power',
  url: 'https://github.com',
  baseUrl: '/metis/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ionescuflorineugen', // Usually your GitHub org/user name.
  projectName: 'metis', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Metis',
        logo: {
          alt: 'Metis Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Docs Categories',
            position: 'left',
            items: [
              {
                label: 'Development',
                to: 'docs/development/',
              },
              {
                label: 'Digital',
                to: 'docs/digital/',
              },
              {
                label: 'Industries',
                to: 'docs/industries/',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Snippets',
            position: 'left',
            to: 'atomic/snippets',
            items: [
              {
                label: 'HTML',
                to: 'atomic/snippets/html',
              },
              {
                label: 'CSS',
                to: 'atomic/snippets/css',
              },
              {
                label: 'JAVASCRIPT',
                to: 'atomic/snippets/javascript',
              },
            ],
          },
          { to: 'atomic/components', label: 'Components(draft)', position: 'left' },
          { to: 'atomic/templates', label: 'Templates(draft)', position: 'left' },
          { to: 'atomic/athena', label: 'Athena(draft)', position: 'left' },
          { to: '/projects', label: 'PROJECTS', position: 'right' },
          { to: '/blog', label: 'BLOG', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Metis.`,
      },
      prism: {
        theme: darkCodeTheme,
      },
    }),
};

module.exports = config;
