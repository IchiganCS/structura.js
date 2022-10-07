import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Structura.js",
  base: "/structura.js/",
  description:
    "Fast typescript library for creating immutable states with structural sharing by using a mutable syntax",
  themeConfig: {
    //siteTitle: false,
    //logo: "/pics/logo.png",
    //logo: "/pics/structural-sharing-1.jfif",
    logo: "https://github.com/GiuseppeRaso/structura.js/raw/master/docs/pics/structural-sharing-1.jfif",
    siteTitle: "Structura.js",
    nav: [
      { text: "GitHub", link: "https://github.com/GiuseppeRaso/structura.js" },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Getting Started", link: "/getting-started" },
          { text: "Why Structura?", link: "/why-structura" },
          { text: "Freezing", link: "/freezing" },
          { text: "Edge cases", link: "/edge-cases" },
          { text: "Gotchas", link: "/gotchas" },
          { text: "Benchmarks", link: "/benchmarks" },
        ],
      },
    ],
  },
});
