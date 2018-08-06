const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const webpackMerge = require("webpack-merge")

const modeConfig = mode => {
  const modeConfigOut = require(`./build-utils/webpack.${mode}`)(mode)
  return modeConfigOut
}

const presetConfig = require("./build-utils/loadPresets")

module.exports = (
  { mode = 'production', presets = [] } =
  { mode: "production", presets: [] }
) => {

  const configOut = webpackMerge(
    {
      mode,
      output: {
        filename: "bundle.js"
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  )
  return configOut
}
