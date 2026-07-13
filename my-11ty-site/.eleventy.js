module.exports = function(eleventyConfig) {
  // Copy CSS and JS folders to the final build
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  
  // Copy the admin folder so the CMS works on the live site
  eleventyConfig.addPassthroughCopy("admin"); 

  // Map the CMS images folder to the root so pictures show up properly
  eleventyConfig.addPassthroughCopy({
    "my-11ty-site/images": "images"
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site" // Final compiled site will go here - and over server
    }
  };
};