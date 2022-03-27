// const axios = require("axios");
const Parser = require('rss-parser');
const parser = new Parser();

module.exports = async () => {
    const feed = await parser.parseURL('https://world.hey.com/joselito/feed.atom');
    return feed;
};