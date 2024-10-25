color = ["red", "green", "blue"];
let [firstcolor, secondcolor, thirdcolor] = color;
console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);

//Question2
const person = {
  name: "Alice",
  age: 25,
  city: "wonderland",
};
let { name, age, city } = person;
console.log(name);
console.log(age);
console.log(city);

//question3
const settings = {
  theme: "dark",
  language: "en",
};
let { theme, language, mode = "light" } = settings;
console.log(theme);
console.log(language);
console.log(mode);
