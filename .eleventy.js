module.exports = function(eleventyConfig) {

eleventyConfig.addPassthroughCopy('./src/style.css')
eleventyConfig.addPassthroughCopy('./src/assets')

return { 
    dir: {
        input: "src",
        output: "_site",
    },
}
}
function validateForm() {
    let x = document.forms["contact"]["email"].value;
    if (x == "") {
      alert("Please add your email so we can get back to you!");
      return false;
    }
  }