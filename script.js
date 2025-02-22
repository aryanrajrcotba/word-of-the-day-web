document.addEventListener("DOMContentLoaded", function() {
    // Set current date
    const dateElement = document.getElementById("date");
    const today = new Date();
    dateElement.textContent = today.toDateString();

    // Word of the Day Data for 7 Days
    const words = [
        { word: "Eloquent", meaning: "Fluent or persuasive in speaking or writing.", example: "She gave an eloquent speech at the conference." },
        { word: "Resilient", meaning: "Able to recover quickly from difficulties.", example: "He remained resilient despite the setbacks." },
        { word: "Serendipity", meaning: "Finding something good without looking for it.", example: "Our meeting was pure serendipity." },
        { word: "Tenacious", meaning: "Holding tightly onto something or persistently determined.", example: "Her tenacious spirit led her to success." },
        { word: "Ubiquitous", meaning: "Present, appearing, or found everywhere.", example: "Smartphones have become ubiquitous in modern society." },
        { word: "Meticulous", meaning: "Showing great attention to detail; very careful and precise.", example: "She was meticulous in completing her project." },
        { word: "Altruistic", meaning: "Showing a selfless concern for the well-being of others.", example: "His altruistic actions helped many in need." }
    ];

    // Motivational Quotes Data for 7 Days
    const quotes = [
        "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "Do what you can, with what you have, where you are.",
        "Hardships often prepare ordinary people for an extraordinary destiny.",
        "Don’t watch the clock; do what it does. Keep going.",
        "Act as if what you do makes a difference. It does.",
        "The best way to predict the future is to create it."
    ];

    // Select a word and quote based on the day of the week
    const dayIndex = today.getDay();
    const wordData = words[dayIndex];
    const quoteData = quotes[dayIndex];

    // Set Word of the Day
    document.getElementById("word").textContent = wordData.word;
    document.getElementById("meaning").textContent = wordData.meaning;
    document.getElementById("example").textContent = wordData.example;

    // Set Motivational Quote
    document.getElementById("quote").textContent = quoteData;
});