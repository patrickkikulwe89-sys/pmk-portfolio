module.exports = function(eleventyConfig) {
  // Eleventy to copy my CSS and JS folders to the final build
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("admin"); // <-- This line allows the admin folder to be copied to the output directory

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site" // This is where the final compiled site will go
    }
  };
};