const { fork } = require("child_process");
const minimist = require("minimist");
const notifier = require("node-notifier");

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  console.log(args);
  console.log(process.cwd());
};
