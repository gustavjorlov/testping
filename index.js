const notifier = require("node-notifier");
const { readRuntimeConfig } = require("./read_config");
const { runTests } = require("./run_tests");

let latestStatus = "";

const sendNotification = config => message => {
  notifier.notify(message);
};

const handleEventChange = event => {
  const eventMessage = Buffer.from(event.data).toString();
  const passOrFail = eventMessage.match(/PASS|FAIL/);

  if (!!passOrFail && passOrFail[0] !== latestStatus) {
    latestStatus = passOrFail[0];
    sendNotification()(passOrFail[0]);
  }
};

module.exports = async () => {
  try {
    const runtimeConfig = await readRuntimeConfig();
    runTests(runtimeConfig.run).on("event", event => {
      process.stdout.write(event.data);
      handleEventChange(event);
    });
  } catch (e) {
    console.log(e.message, e);
  }
};

// ok, make this somehow execute jest or mocha, or whatever the user wants
// output everything to the console
// invoke the node-notifier when any test breaks

// done
process.stdin.resume();
