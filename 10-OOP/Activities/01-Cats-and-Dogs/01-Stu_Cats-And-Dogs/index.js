const dogs = {
  raining: true,
  noise: "woof!",
  makeNoise: function() {
    console.log(this.noise);
  }
};

dogs.makeNoise();

const object = {
  raining: false,
  noise: "meow",
  makeNoise: function() {
    console.log(this.noise);
  }
};

object.makeNoise();
