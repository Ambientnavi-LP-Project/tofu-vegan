module.exports = function(eleventyConfig) {
  // Copy /src/tofu-image directly to output (no processing)
  // NOTE: This brand uses `tofu-image/` folder name
  eleventyConfig.addPassthroughCopy({ "src/tofu-image": "tofu-image" });

  eleventyConfig.addFilter("urlencode", function(str) {
    return encodeURIComponent(str || "");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
