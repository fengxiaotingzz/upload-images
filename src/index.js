const installObj = {
  react: require("../node_modules/react"),
};

const installKeys = Object.keys(installObj);

const hasInstall = installKeys.every((key) => installObj[key]);

if (!hasInstall) {
  throw new Error("本插件依赖于:react，请安装之后再使用");
} else {
  module.exports = require("./upload/index.js");
}
