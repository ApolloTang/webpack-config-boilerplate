const webpackMerge = require("webpack-merge")

const applyPresets = (env = {presets: []}) => {
  const presets = env.presets || []
  const presetList = [].concat(...[presets])

  const mergedConfigs = presetList.map(presetName =>
    require(`./presets/webpack.${presetName}`)(env)
  )

  return webpackMerge({}, ...mergedConfigs)
}

module.exports = applyPresets
