const cypressTypeScriptPreprocessor = require("./cy-ts-preprocessor");
const fs = require('fs-extra')
const path = require('path')

module.exports = (on) => {
  on("file:preprocessor", cypressTypeScriptPreprocessor);
};


function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress/', 'config', `${file}.json`)

  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  // accept a configFile value or use dev by default
  const file = config.env.configFile || 'develop'

  return getConfigurationByFile(file)
}