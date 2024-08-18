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
  trailingSlash: false,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Set the production url of your site here
  url: 'https://edututor.ru',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  headTags: [
    {
      tagName: 'script',
      innerHTML: `
         (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
         m[i].l=1*new Date();
         for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
         k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
         (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  
         ym(92029994, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true
         });
         
         document.write('<noscript><div><img src="https://mc.yandex.ru/watch/92029994" style="position:absolute; left:-9999px;" alt="" /></div></noscript>');
      `,
      attributes: {
        type: 'text/javascript',
      },
    },
  ],


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
     [
      '@docusaurus/plugin-sitemap',
      {
        lastmod: 'date',
        changefreq: 'weekly',
        priority: 0.5,
        ignorePatterns: ['/tags/**'],
        filename: 'sitemap.xml',
        createSitemapItems: async (params) => {
          const {defaultCreateSitemapItems, ...rest} = params;
          const items = await defaultCreateSitemapItems(rest);
          return items.filter((item) => !item.url.includes('/page/'));
        },
      }
    ]
    
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
      
        colorMode: {
          disableSwitch: true,  // Отключает переключатель темы
        },
        metadata: [
          {name: 'keywords', content: 'математика, алгебра, геометрия, ЕГЭ по математике'},
                  ],
   
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
          { to: '/blog', label: 'Блог', position: 'left' },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            
            items: [
              {
                label: 'VK',
                href: 'https://vk.com/edututor_ru',
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
                label: 'Карта сайта',
                to: '/welcome',
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
