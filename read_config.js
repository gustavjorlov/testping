const fs = require("fs");
const path = require("path");

module.exports.readRuntimeConfig = () =>
  new Promise((res, rej) => {
    fs.readFile(
      path.resolve(__dirname, ".testpingrc"),
      { encoding: "utf-8" },
      (err, data) => {
        if (err) rej(err);
        else res(JSON.parse(data));
      }
    );
  });
