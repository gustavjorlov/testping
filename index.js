const { fork } = require("child_process");
const notifier = require("node-notifier");
const { readRuntimeConfig } = require("./read_config");

module.exports = async () => {
  console.log(process.cwd());
  try {
    const runtimeConfig = await readRuntimeConfig();
  } catch (e) {
    console.log(e.message, e);
  }
};

// ok, make this somehow execute jest or mocha, or whatever the user wants
// output everything to the console
// invoke the node-notifier when any test breaks

// done
