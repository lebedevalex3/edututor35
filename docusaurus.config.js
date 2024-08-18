// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Школьная математика: от теории к практике',
  tagline: 'Умножаем знания, делим трудности',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://edututor.ru',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      { quality: 80, max: 800, disableInDev: false },
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],



  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          blogSidebarTitle: 'Мои статьи',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      docs:{
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      }} ,
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Edututor',
        logo: {
          alt: 'Логотип сайта',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'arifmet',
            label: 'Арифметика',
          },
          {
            type: 'docSidebar',
            sidebarId: 'algebra',
            position: 'left',
            label: 'Алгебра',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'geo',
            label: 'Геометрия',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            //title: 'Community',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@edututor9539',
              },

            ],
          },
          {
            //title: 'Community',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@edututor9539',
              },

            ],
          },

        ],
        copyright: `Все права защищены © ${new Date().getFullYear()} `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
