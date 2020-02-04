"use strict";

const FileIO = require("../fileIO");

describe("FileIO", () => {
  describe("read", () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      const file = new FileIO();
      FileIO.prototype.write(writeFileSync(file));
    });
  });

  describe("write", () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // Your code here
    });
  });
});
