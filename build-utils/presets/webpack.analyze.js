const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = env => {
  const presetOut = {
    plugins: [new BundleAnalyzerPlugin() ]
  };
  return presetOut;
}
