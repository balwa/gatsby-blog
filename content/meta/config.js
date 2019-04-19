const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Test blog for GatsbyJS", // <title>
  shortSiteTitle: "Hosted on Netifly", // <title> ending for posts and pages
  siteDescription: "test blog is based on GatsbyJS starter.",
  siteUrl: "https://lucid-pike-e92aa7.netlify.com/",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Tanmay Balwa",
  authorTwitterAccount: "thebalwa",
  // info
  infoTitle: "Tanmay Balwa",
  infoTitleNote: "test blog",
  // manifest.json
  manifestName: "Test blog on gatsby",
  manifestShortName: "TestBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "test@example.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/balwa" }
  ]
};
