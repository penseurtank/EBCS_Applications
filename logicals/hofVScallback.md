🚫 Higher-Order Functions are not the same as Callback Functions.
But:

A callback function is often used inside a higher-order function.

You can say:
✅ "A higher-order function takes a callback"
❌ But not: "A higher-order function is a callback."

✅ Definitions:
| Concept | Meaning |
| ------------------------------- | ----------------------------------------------------------------------------------------------- |
| **Callback Function** | A function that is **passed as an argument** to another function and is **executed later**. |
| **Higher-Order Function (HOF)** | A function that **takes another function as an argument**, or **returns a function** (or both). |

✅ Example:

function greet(name) {
console.log("Hello", name);
}

function processUserInput(callback) {
const name = "Ravi";
callback(name); // <-- callback is used here
}

processUserInput(greet); // greet is a callback

processUserInput is a higher-order function

greet is a callback function

--
🔁 Think of it like this:

| Role         | Example                                                                             |
| ------------ | ----------------------------------------------------------------------------------- |
| **HOF**      | `Array.map()`, `setTimeout()`, your own custom function that takes another function |
| **Callback** | The function **you pass** to a HOF (like inside `.map()` or `setTimeout()`)         |

--
✅ In short:
Every function that uses a callback is a higher-order function. But not every higher-order function is a callback.
