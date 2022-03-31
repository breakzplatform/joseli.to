const htmlmin = require("html-minifier");
const { DateTime } = require("luxon");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const anchorsPlugin = require('@orchidjs/eleventy-plugin-ids');
const wordStats = require('@photogabble/eleventy-plugin-word-stats');
const recentChanges = require('eleventy-plugin-recent-changes');
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItFootnote = require("markdown-it-footnote");

module.exports = function (eleventyConfig) {

  markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  })
    .use(markdownItAnchor, {
      permalink: true,
      permalinkClass: "direct-link",
      permalinkSymbol: "#",
    })
    .use(markdownItFootnote);
  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(anchorsPlugin);
  eleventyConfig.addPlugin(wordStats, {
    output: function (stats) {
      return `${stats.words} palavras, ${stats.minutes}`;
    },
  });
  eleventyConfig.addPlugin(recentChanges);

  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/_redirects');
  eleventyConfig.addPassthroughCopy('src/robots.txt');
  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/cdn.js': './assets/alpine.js',
  })

  eleventyConfig.addNunjucksShortcode("currentYear", () => `${(new Date()).getFullYear()}`);

  eleventyConfig.addCollection("postsByYear", (collection) => {
    const posts = collection.getFilteredByTags('posts').reverse();
    const years = posts.map(post => post.date.getFullYear());
    const uniqueYears = [...new Set(years)];
  
    const postsByYear = uniqueYears.reduce((prev, year) => {
      const filteredPosts = posts.filter(post => post.date.getFullYear() === year);
  
      return [
        ...prev,
        [year, filteredPosts]
      ]
    }, []);
  
    return postsByYear;
  });

  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  eleventyConfig.addFilter("filterCollectionByLocale", function(collection, locale) {
    return collection.filter(item => item?.data?.locale === locale);
  });

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat('yy-MM-dd');
  });

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat("dd-MM-yyyy");
  });

  eleventyConfig.addFilter("slugDate", dateObj => {
    return (DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat("X") / 100);
  });

  return {
    markdownTemplateEngine: "njk",
    dir: { input: 'src', output: '_site' }
  };
};
