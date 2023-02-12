require('dotenv').config()
const contentfulManagement = require("contentful-management")

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.MANAGEMENT_API_ACCESS_TOKEN,
  })

  return contentfulClient
    .getSpace(process.env.SPACE_ID)
    .then(space => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT))
};