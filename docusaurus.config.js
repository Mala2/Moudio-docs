const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {

  title: 'MouDio',
  tagline: 'Bluetooth Speaker',
  url: 'https://github.com',
  baseUrl: '/Moudio-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'Mala2', // Usually your GitHub org/user name.
  projectName: 'Moudio-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  
  scripts: [
    'https://www.instagram.com/embed.js'
  ],
  themeConfig: {
    navbar: {
      title: 'MouDio',
      logo: {
        alt: 'Moudio by Mo',
        src: 'img/sqfmi_logo_32x32.svg',
      },
      items: [
        {
          to: 'docs/getting-started',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'watchfaces',
          activeBasePath: 'watchfaces',
          label: 'Watch Faces',
          position: 'left',
        },
        {
          to: 'watchcases',
          activeBasePath: 'watchcases',
          label: 'Watch Cases',
          position: 'left',
        },
        {
          to: 'gallery',
          activeBasePath: 'gallery',
          label: 'Gallery',
          position: 'left',
        },
        // {
        //   to: 'contest',
        //   activeBasePath: 'contest',
        //   label: 'Case Design Contest',
        //   position: 'left',
        // },                                   
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://www.mouser.com/manufacturer/sqfmi/',
          label: 'Buy Watchy!',
          position: 'right',
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
              to: 'docs/getting-started',
            },
            // {
            //   label: 'Hardware',
            //   to: 'docs/hardware',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/sqfmi/',
            },                        
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              to: 'https://discord.gg/ZXDegGV8E7',
            },                       
          ],
        },        
        {
          title: 'Social',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/sqfmi',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/sqfmi',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UC9SAc8ikvU7KuYw3OfogFFA',
            },
          ],
        },
        {
          title: 'Shop',
          items: [
            {
              label: 'SQFMI Shop',
              href: 'https://shop.sqfmi.com',
            },
            {
              label: 'Mouser',
              href: 'https://www.mouser.com/manufacturer/sqfmi/',        
            },
            {
              label: 'Crowd Supply',
              href: 'https://www.crowdsupply.com/sqfmi/watchy',        
            },
          ],
        },        
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a class="footer__link-item" href="https://www.sqfmi.com"> Squarofumi</a>. Built with Docusaurus.`,
    },
     
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
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
            'https://github.com/sqfmi/watchy-docs/edit/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};