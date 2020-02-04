"use strict";

const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function combineAnimals() {
  try {
    const animals = [];
    const files = ["cat.json", "dog.json", "goldfish.json", "hamster.json"];
    for (const file of files) {
      const fileStr = await readFileAsync(file, "utf8");
      animals.push(JSON.parse(fileStr));
    }
    const sortedAnimals = animals.sort((a, b) => b.age - a.age);

    await writeFileAsync(
      "combined.json",
      JSON.stringify(sortedAnimals, null, 2)
    );
  } catch (err) {
    console.error(err);
  }
}

combineAnimals();
