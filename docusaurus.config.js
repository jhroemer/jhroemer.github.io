// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Jens Rømer blog",
  tagline: "Jens Rømer - Personal blog",
  url: "https://jensroemer.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "jhroemer",
  projectName: "jensroemer.github.io",

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // pages: {
        //   path: "./contact",
        //   routeBasePath: "/contact",
        // },
        blog: {
          path: "./blog",
          routeBasePath: "/",
          showReadingTime: true,
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: "Jens Rømer",
        // TODO: own logo?
        // logo: {
        //   alt: "My Site Logo",
        //   src: "img/logo.svg",
        // },
        items: [
          { to: "/", label: "Blog", position: "right" },
          {
            href: "https://github.com/jhroemer",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
