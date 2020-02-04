"use strict";

function waitFor(seconds) {
  return new Promise((resolve, reject) => {
    if (isNaN(seconds) || seconds < 1) {
      return reject(Error("failed"));
    }

    setTimeout(() => {
      resolve("success");
    }, seconds * 1000);
  });
}

waitFor(2)
  .then(console.log)
  .catch(console.error);
