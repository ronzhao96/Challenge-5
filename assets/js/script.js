var today = moment().format("MMM Do, YYYY");
var TIME_SECONDS = moment();

$("#currentDay").text(today);

if (TIME_SECONDS>=moment("00:00:00","HH:mm:ss") && TIME_SECONDS<moment("08:59:59","HH:mm:ss")) {
    $("#5pm").css('background-color', 'green');
    $("#4pm").css('background-color', 'green');
    $("#3pm").css('background-color', 'green');
    $("#2pm").css('background-color', 'green');
    $("#1pm").css('background-color', 'green');
    $("#12pm").css('background-color', 'green');
    $("#11am").css('background-color', 'green');
    $("#10am").css('background-color', 'green');
    $("#9am").css('background-color', 'green');
}

if (TIME_SECONDS>=moment("09:00:00","HH:mm:ss")) {
    $("#5pm").css('background-color', 'green');
    $("#4pm").css('background-color', 'green');
    $("#3pm").css('background-color', 'green');
    $("#2pm").css('background-color', 'green');
    $("#1pm").css('background-color', 'green');
    $("#12pm").css('background-color', 'green');
    $("#11am").css('background-color', 'green');
    $("#10am").css('background-color', 'green');
    $("#9am").css('background-color', 'orange');
}

if (TIME_SECONDS>moment("09:59:59","HH:mm:ss")) {
    $("#5pm").css('background-color', 'green');
    $("#4pm").css('background-color', 'green');
    $("#3pm").css('background-color', 'green');
    $("#2pm").css('background-color', 'green');
    $("#1pm").css('background-color', 'green');
    $("#12pm").css('background-color', 'green');
    $("#11am").css('background-color', 'green');
    $("#10am").css('background-color', 'orange');
    $("#9am").css('background-color', 'gray');
}
if (TIME_SECONDS>moment("10:59:59","HH:mm:ss")) {
    $("#5pm").css('background-color', 'green');
    $("#4pm").css('background-color', 'green');
    $("#3pm").css('background-color', 'green');
    $("#2pm").css('background-color', 'green');
    $("#1pm").css('background-color', 'green');
    $("#12pm").css('background-color', 'green');
    $("#11am").css('background-color', 'orange');
    $("#10am").css('background-color', 'gray');
    $("#9am").css('background-color', 'gray');
}
if (TIME_SECONDS>moment("11:59:59","HH:mm:ss")) {
    $("#5pm").css('background-color', 'green');
    $("#4pm").css('background-color', 'green');
    $("#3pm").css('background-color', 'green');
    $("#2pm").css('background-color', 'green');
    $("#1pm").css('background-color', 'green');
    $("#12pm").css('background-color', 'orange');
    $("#11am").css('background-color', 'gray');
    $("#10am").css('background-color', 'gray');
    $("#9am").css('background-color', 'gray');
}
if (TIME_SECONDS>moment("12:59:59","HH:mm:ss")) {
    $("#5pm").css('background-color', 'green');
    $("#4pm").css('background-color', 'green');
    $("#3pm").css('background-color', 'green');
    $("#2pm").css('background-color', 'green');
    $("#1pm").css('background-color', 'orange');
    $("#12pm").css('background-color', 'gray');
    $("#11am").css('background-color', 'gray');
    $("#10am").css('background-color', 'gray');
    $("#9am").css('background-color', 'gray');
}
if (TIME_SECONDS>moment("13:59:59","HH:mm:ss")) {
    $("#5pm").css('background-color', 'green');
    $("#4pm").css('background-color', 'green');
    $("#3pm").css('background-color', 'green');
    $("#2pm").css('background-color', 'orange');
    $("#1pm").css('background-color', 'gray');
    $("#12pm").css('background-color', 'gray');
    $("#11am").css('background-color', 'gray');
    $("#10am").css('background-color', 'gray');
    $("#9am").css('background-color', 'gray');
}
if (TIME_SECONDS>moment("14:59:59","HH:mm:ss")) {
    $("#5pm").css('background-color', 'green');
    $("#4pm").css('background-color', 'green');
    $("#3pm").css('background-color', 'orange');
    $("#2pm").css('background-color', 'gray');
    $("#1pm").css('background-color', 'gray');
    $("#12pm").css('background-color', 'gray');
    $("#11am").css('background-color', 'gray');
    $("#10am").css('background-color', 'gray');
    $("#9am").css('background-color', 'gray');
}
if (TIME_SECONDS>moment("15:59:59","HH:mm:ss")) {
    $("#5pm").css('background-color', 'green');
    $("#4pm").css('background-color', 'orange');
    $("#3pm").css('background-color', 'gray');
    $("#2pm").css('background-color', 'gray');
    $("#1pm").css('background-color', 'gray');
    $("#12pm").css('background-color', 'gray');
    $("#11am").css('background-color', 'gray');
    $("#10am").css('background-color', 'gray');
    $("#9am").css('background-color', 'gray');
}
if (TIME_SECONDS>moment("16:59:59","HH:mm:ss")) {
    $("#5pm").css('background-color', 'orange');
    $("#4pm").css('background-color', 'gray');
    $("#3pm").css('background-color', 'gray');
    $("#2pm").css('background-color', 'gray');
    $("#1pm").css('background-color', 'gray');
    $("#12pm").css('background-color', 'gray');
    $("#11am").css('background-color', 'gray');
    $("#10am").css('background-color', 'gray');
    $("#9am").css('background-color', 'gray');
}
if (TIME_SECONDS>moment("17:59:59","HH:mm:ss") && TIME_SECONDS<moment("23:59:59","HH:mm:ss")) {
    $("#5pm").css('background-color', 'gray');
    $("#4pm").css('background-color', 'gray');
    $("#3pm").css('background-color', 'gray');
    $("#2pm").css('background-color', 'gray');
    $("#1pm").css('background-color', 'gray');
    $("#12pm").css('background-color', 'gray');
    $("#11am").css('background-color', 'gray');
    $("#10am").css('background-color', 'gray');
    $("#9am").css('background-color', 'gray');
}

var saveButton = document.getElementsByClassName("saveBtn");
var savedEvent = document.getElementsByClassName("savedText");

saveButton[0].addEventListener("click", function(event) {
    event.preventDefault();
    saveLastEvent0();
    renderLastEvent0();
});

function saveLastEvent0() {    
    var userEvent0 = {savedEvent0: savedEvent[0].value};
    localStorage.setItem("userEvent0", JSON.stringify(userEvent0));  
}

function renderLastEvent0() {
    var lastEvent0 = JSON.parse(localStorage.getItem("userEvent0"));
    if (lastEvent0 !== null) {
        savedEvent[0].innerHTML = lastEvent0.savedEvent0;
    }
    else {
        return;
    }
}

saveButton[1].addEventListener("click", function(event) {
    event.preventDefault();
    saveLastEvent1();
    renderLastEvent1();
});

function saveLastEvent1() {    
    var userEvent1 = {savedEvent1: savedEvent[1].value};
    localStorage.setItem("userEvent1", JSON.stringify(userEvent1)); 
}

function renderLastEvent1() {
    var lastEvent1 = JSON.parse(localStorage.getItem("userEvent1"));
    if (lastEvent1 !== null) {
        savedEvent[1].innerHTML = lastEvent1.savedEvent1;
    }
    else {
        return;
    }
}

saveButton[2].addEventListener("click", function(event) {
    event.preventDefault();
    saveLastEvent2();
    renderLastEvent2();
});

function saveLastEvent2() {    
    var userEvent2 = {savedEvent2: savedEvent[2].value};
    localStorage.setItem("userEvent2", JSON.stringify(userEvent2)); 
}

function renderLastEvent2() {
    var lastEvent2 = JSON.parse(localStorage.getItem("userEvent2"));
    if (lastEvent2 !== null) {
        savedEvent[2].innerHTML = lastEvent2.savedEvent2;
    }
    else {
        return;
    }
}

saveButton[3].addEventListener("click", function(event) {
    event.preventDefault();
    saveLastEvent3();
    renderLastEvent3();
});

function saveLastEvent3() {    
    var userEvent3 = {savedEvent3: savedEvent[3].value};
    localStorage.setItem("userEvent3", JSON.stringify(userEvent3)); 
}

function renderLastEvent3() {
    var lastEvent3 = JSON.parse(localStorage.getItem("userEvent3"));
    if (lastEvent3 !== null) {
        savedEvent[3].innerHTML = lastEvent3.savedEvent3;
    }
    else {
        return;
    }
}

saveButton[4].addEventListener("click", function(event) {
    event.preventDefault();
    saveLastEvent4();
    renderLastEvent4();
});

function saveLastEvent4() {    
    var userEvent4 = {savedEvent4: savedEvent[4].value};
    localStorage.setItem("userEvent4", JSON.stringify(userEvent4)); 
}

function renderLastEvent4() {
    var lastEvent4 = JSON.parse(localStorage.getItem("userEvent4"));
    if (lastEvent4 !== null) {
        savedEvent[4].innerHTML = lastEvent4.savedEvent4;
    }
    else {
        return;
    }
}

saveButton[5].addEventListener("click", function(event) {
    event.preventDefault();
    saveLastEvent5();
    renderLastEvent5();
});

function saveLastEvent5() {    
    var userEvent5 = {savedEvent5: savedEvent[5].value};
    localStorage.setItem("userEvent5", JSON.stringify(userEvent5));  
}

function renderLastEvent5() {
    var lastEvent5 = JSON.parse(localStorage.getItem("userEvent5"));
    if (lastEvent5 !== null) {
        savedEvent[5].innerHTML = lastEvent5.savedEvent5;
    }
    else {
        return;
    }
}

saveButton[6].addEventListener("click", function(event) {
    event.preventDefault();
    saveLastEvent6();
    renderLastEvent6();
});

function saveLastEvent6() {    
    var userEvent6 = {savedEvent6: savedEvent[6].value};
    localStorage.setItem("userEvent6", JSON.stringify(userEvent6)); 
}

function renderLastEvent6() {
    var lastEvent6 = JSON.parse(localStorage.getItem("userEvent6"));
    if (lastEvent6 !== null) {
        savedEvent[6].innerHTML = lastEvent6.savedEvent6;
    }
    else {
        return;
    }
}

saveButton[7].addEventListener("click", function(event) {
    event.preventDefault();
    saveLastEvent7();
    renderLastEvent7();
});

function saveLastEvent7() {    
    var userEvent7 = {savedEvent7: savedEvent[7].value};
    localStorage.setItem("userEvent7", JSON.stringify(userEvent7));
    console.log(userEvent7.savedEvent);  
}

function renderLastEvent7() {
    var lastEvent7 = JSON.parse(localStorage.getItem("userEvent7"));
    if (lastEvent7 !== null) {
        savedEvent[7].innerHTML = lastEvent7.savedEvent7;
    }
    else {
        return;
    }
}

saveButton[8].addEventListener("click", function(event) {
    event.preventDefault();
    saveLastEvent8();
    renderLastEvent8();
});

function saveLastEvent8() {    
    var userEvent8 = {savedEvent8: savedEvent[8].value};
    localStorage.setItem("userEvent8", JSON.stringify(userEvent8));  
}

function renderLastEvent8() {
    var lastEvent8 = JSON.parse(localStorage.getItem("userEvent8"));
    if (lastEvent8 !== null) {
        savedEvent[8].innerHTML = lastEvent8.savedEvent8;
    }
    else {
        return;
    }
}

function init() {
    renderLastEvent0 ();
    renderLastEvent1 ();
    renderLastEvent2 ();
    renderLastEvent3 ();
    renderLastEvent4 ();
    renderLastEvent5 ();
    renderLastEvent6 ();
    renderLastEvent7 ();
    renderLastEvent8 ();
}

init();



