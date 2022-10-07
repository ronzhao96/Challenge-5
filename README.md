# Work Day Scheduler Starter Code
<br>

## Objective 
Refactor the starter code so that the website includes:
* A working date display at the top of the page
* Time blocks for standard business hours 
* Generates random password given user selected criteria
<br>

## Technologies Used
* Javascript
* HTML
* CSS
<br>

## Knowledge Leared
* Learned how to use while loops 
```
 while (otherCriteria != "Y" && otherCriteria != "N") {
    otherCriteria = prompt("Do you wish to include lowercase, uppercase, numeric, and/or special characters? (Y for Yes and N for No)");
  }
```
* Leared how to generate random numbers 
```
for (var i = 0; i < length - 1; i++) {
      randomNumber = Math.floor(Math.random() * chars.length);
      passwordText += randomNumber;
    }
```
* Learned how to select characters from a string randomly using substring and random numbers
```
randomNumber1 = Math.floor(Math.random() * letters.length);
    passwordText += letters.substring(randomNumber1, randomNumber1 + 1);
```
<br>

## Bugs


for (i=0; i<=8; i++)  {
    saveButton[i].addEventListener("click", function(event) {
        event.preventDefault();
        saveLastEvent();
        renderLastEvent();
    });

    function saveLastEvent() {   
        console.log(savedEvent[i].value) 
        var userEvent = [savedEvent[i].value];
        localStorage.setItem("userEvent", JSON.stringify(userEvent));  
    }

    function renderLastEvent() {
        var lastEvent = JSON.parse(localStorage.getItem("userEvent"));
        console.log(lastEvent);
        if (lastEvent !== null) {
            savedEvent[i].textContent = lastEvent.savedEvent;
        }
        else {
            return;
        }
    }

    function init() {
        renderLastEvent();
    }

    init();
}
