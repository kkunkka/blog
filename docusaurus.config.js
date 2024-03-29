// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import { themes } from 'prism-react-renderer'
const lightCodeTheme = themes.dracula;
const darkCodeTheme = themes.github;

const announcementBarContent = `⭐️ 如果这个网站能帮助到你，欢迎给一个star支持作者 <a href="https://github.com/kkunkka/blog" target="_blank">GitHub</a>`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kkun Kka',
  tagline: '再次鼓起丧失的勇气',
  favicon: 'img/kkunkka.webp',

  // Set the production url of your site here
  url: 'https://kkunkka.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/blog/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kkunkka', // Usually your GitHub org/user name.
  projectName: 'kkunkka.blog', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          blogSidebarTitle: '全部博文',
          //在侧边栏显示近期博文, 默认为5
          // blogSidebarCount: 0  //不显示侧边栏
          // blogSidebarCount: 'ALL' //侧边栏显示所有博文
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: 'navigation',
        path: 'navigation',
        routeBasePath: 'navigation',
        sidebarPath: require.resolve('./sidebarsNavigation.js'),
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'myAnnouncementBar',
        content: announcementBarContent,
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Kkun Kka',
        hideOnScroll: true, // 往下滚动页面时自动隐藏导航栏
        // logo: {
        //   alt: 'Kkuna Kka Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          { to: 'blog', label: '博客', position: 'left' },
          {
            type: 'dropdown', label: '工具', position: 'right',
            items: [
              { to: 'tool/passwd', label: '密码生成' }
            ]
          },
          { to: 'category', label: '导航', position: 'right' },
          {
            href: 'https://github.com/kkunkka/blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
