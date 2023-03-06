// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Metis',
  tagline: 'Knowledge is power',
  url: 'https://github.com',
  baseUrl: '/metis/',
  onBrokenLinks: 'ignore',
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
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
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
            label: 'Docs',
            position: 'left',
            items: [
              {
                label: 'Info',
                to: 'docs/info/',
              },
              {
                label: 'Personal',
                to: 'docs/personal/',
              },
              {
                label: 'Development',
                to: 'docs/development/',
              },
              {
                label: 'Digital',
                to: 'docs/digital/',
              },
              {
                label: 'Business',
                to: 'docs/business/',
              },
            ],
          },
          {
            label: 'Checklists',
            position: 'left',
            to: 'docs/checklists/',
            items: [
              {
                label: 'Code Review',
                to: 'docs/checklists/codereview',
              },
              {
                label: 'SSH',
                to: 'docs/checklists/ssh',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Snippets - Code',
            position: 'left',
            to: 'code',
            items: [
              {
                label: 'Units',
                to: 'code/units',
              },
              {
                label: 'Best Practices',
                to: 'code/bestpractices',
              },
            ],
          },
          {
            label: 'Snippets - Components',
            position: 'left',
            to: 'comp',
          },

          {
            label: 'Snippets - Templates',
            position: 'left',
            to: 'templates'
          },
          { to: 'docs/athena', label: 'Athena', position: 'right' },
          { to: 'docs/projects', label: 'Projects', position: 'right' },
          // { to: '/blog', label: 'Blog', position: 'right' },
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
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: true,
      }
    }),
};

module.exports = config;
