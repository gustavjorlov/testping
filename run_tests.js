const { spawn } = require("child_process");
const EventEmitter = require("events");

module.exports.runTests = command => {
  const testEmitter = new EventEmitter();
  const forkHandle = spawn(command.split(" ")[0], [command.split(" ")[1]]);

  const emitEvent = status => data => {
    testEmitter.emit("event", { status, data });
  };

  // forkHandle.stdout.on("data", emitEvent("green"));
  forkHandle.stderr.on("data", emitEvent("red"));

  return testEmitter;
};
