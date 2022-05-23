let studentName = ["Jake", "Nick", "Jared", "Amanda", "Seth"];
let hometown = ["Detroit", "Grandville", "Grand Rapids", "Amsterdam", "New York"];
let favFood = ["Spaghetti", "Pizza", "Glizzy", "Cookies", "Donuts"];
let index = -1;
let displayType = "";
let response = "";
let goOn = true;

while (goOn) { // Loops the program if users wants to run again.
    while (true) { // Gets a good index number from user.

        response = prompt(`Enter a number to search for a student. Valid numbers are 0 to ${studentName.length}. Enter 0 for all students.`
        + ` Additionally, you can search by student name.`).toLowerCase().trim();
    
        if (studentName.findIndex((name) => name.toLowerCase() === response) > -1) { // Checks if response was a student name.
            index = studentName.findIndex((name) => name.toLowerCase() === response) + 1;
            break;
        }
        else {
            index = parseInt(response);
        }
        
        if (index <= studentName.length && index >= 0) {
            break;
        }
        else {
            console.log("That was not a correct value. Let's try again.");
        }
    }
    
    if (index == 0) {
        for (let i = 0; i < studentName.length; i++) {
            console.log(`${studentName[i]}'s favorite food is ${favFood[i].toLocaleLowerCase()} and their hometown is ${hometown[i]}.`)
        }
    }
    else {
        while (true){
            displayType = prompt("Please enter what data you'd like to see for this student. "
            + "Enter hometown or favorite food.").toLowerCase().trim();
            
            if (displayType == "hometown" || displayType == "ht" || displayType == "town" || displayType == "home" ) {
                console.log(`${studentName[index - 1]}'s hometown is ${hometown[index - 1]}.`);
                break;
            }
            else if (displayType == "favorite food" || displayType == "food" || displayType == "favorite" || displayType == "fav" ) {
                console.log(`${studentName[index - 1]}'s favorite food is ${favFood[index - 1].toLowerCase()}.`);
                break;
            }
            else {
                console.log("I'm sorry, I didn't understand that option. Let's try again.")
            }
        }
    }

    goOn = keepRunning();
}

function keepRunning() {

    let input = prompt("Would you like to continue? y/n").toLowerCase().trim();

    if (input === "y") 
    {
        return true;
    }
    else if (input === "n") 
    {
        console.log("Goodbye!");
        return false;
    }
    else 
    {
        prompt("I didn't understand that. Let's try again.");
        return keepRunning();
    }
}