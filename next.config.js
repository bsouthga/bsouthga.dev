const withTM = require("next-transpile-modules")(["style9"]);
const withStyle9 = require("style9/next");

module.exports = withStyle9()(
  withTM({
    serverRuntimeConfig: {
      PROJECT_ROOT: __dirname,
    },
  })
);
