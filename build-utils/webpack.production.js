module.exports = (mode) => {
  const modeConfigOut = {
    output: {
      filename: "[chunkhash].js"
    }
  }
  return modeConfigOut
}
