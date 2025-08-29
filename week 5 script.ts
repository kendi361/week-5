let userName = "Kendi";
let userAge = 25;
let isMember = true;

const outputDiv = document.getElementById("output");

if (userAge >= 18 && isMember) {
  outputDiv.innerHTML += `<p>Welcome, ${userName}! You are an adult member.</p>`;
} else if (userAge >= 18) {
  outputDiv.innerHTML += `<p>Welcome, ${userName}! You are an adult guest.</p>`;
} else {
  outputDiv.innerHTML += `<p>Welcome, ${userName}! You are a minor.</p>`;
}


 * @param {string} name
 * @returns {string}
 */
function greet(name) {
  return `Hello, ${name}! Have a great day!`;
}

 * @param {string} fruit
 */
function addFruitToList(fruit) {
  const fruitList = document.getElementById("fruitList");
  const li = document.createElement("li");
  li.textContent = fruit;
  fruitList.appendChild(li);
}

let numbers = [1, 2, 3, 4, 5];
outputDiv.innerHTML += "<p>Numbers: ";
for (let i = 0; i < numbers.length; i++) {
  outputDiv.innerHTML += numbers[i] + " ";
}
outputDiv.innerHTML += "</p>";

let fruits = ["Apple", "Banana", "Cherry"];
outputDiv.innerHTML += "<p>Fruits: ";
for (let fruit of fruits) {
  outputDiv.innerHTML += fruit + " ";
}
outputDiv.innerHTML += "</p>";


document.getElementById("greetBtn").addEventListener("click", function() {
  outputDiv.innerHTML += `<p>${greet(userName)}</p>`;
});

document.getElementById("addFruitBtn").addEventListener("click", function() {
  let newFruit = prompt("Enter a fruit name:");
  if (newFruit) {
    addFruitToList(newFruit);
  }
});

document.getElementById("toggleThemeBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");
});

outputDiv.style.border = "1px solid #2d6cdf";
outputDiv.style.padding = "1em";
outputDiv.style.borderRadius = "6px";
outputDiv.style.backgroundColor = "#f0f8ff";