const htmlmin = require("html-minifier");
const { DateTime } = require("luxon");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const anchorsPlugin = require('@orchidjs/eleventy-plugin-ids');
const wordStats = require('@photogabble/eleventy-plugin-word-stats');
const recentChanges = require('eleventy-plugin-recent-changes');

module.exports = function (eleventyConfig) {

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

  eleventyConfig.addNunjucksShortcode("currentYear", () => `${(new Date()).getFullYear()}`);

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
    dir: { input: 'src', output: '_site' }
  };
};
