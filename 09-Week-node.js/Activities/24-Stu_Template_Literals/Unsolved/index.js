"use strict";

const music = {
  type: "EDM",
  DJ: "diplo",
  songtitle: "On my Mind"
};

// write code between <p> tags to output the data from the music object above
const songSnippet = `This is the best type of music ${music.type}! ${music.DJ} is my favorite!
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;
