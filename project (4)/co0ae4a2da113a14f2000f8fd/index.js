import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://playground-5f380-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const moviesInDB = ref(database, "playground");

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value.trim(); // Trim whitespace from input
    
    if (inputValue !== "") { // Check if input is not empty
        push(moviesInDB, inputValue)
            .then(() => {
                console.log(`${inputValue} added to database`);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    } else {
        console.log("Input value is empty");
    }
});
