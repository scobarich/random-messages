const messages = [
    "Richard",
    "Carol",
    "Oscar",
    "Nicolay",
    "Yessica",
    "Lucy",
    "Pool"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };