let driver = 0;
let tech = 0;
let pit = 0;
let media = 0;
let scout = 0;

let q1a1 = document.querySelector("#q1a1");
let q1a2 = document.querySelector("#q1a2");
let q1a3 = document.querySelector("#q1a3");
let q1a4 = document.querySelector("#q1a4");

let q2a1 = document.querySelector("#q2a1");
let q2a2 = document.querySelector("#q2a2");
let q2a3 = document.querySelector("#q2a3");
let q2a4 = document.querySelector("#q2a4");

let q3a1 = document.querySelector("#q3a1");
let q3a2 = document.querySelector("#q3a2");
let q3a3 = document.querySelector("#q3a3");
let q3a4 = document.querySelector("#q3a4");

let questions = document.querySelector(".questions");
let q1 = document.querySelector("#q1");
let q2 = document.querySelector("#q2");
let q3 = document.querySelector("#q3");

let resultDiv = document.querySelector("#resultDiv");
let result = document.querySelector("#result");

function transparentQ1() {
    q1a1.style.backgroundColor = "#333333CC";
    q1a2.style.backgroundColor = "#333333CC";
    q1a3.style.backgroundColor = "#333333CC";
    q1a4.style.backgroundColor = "#333333CC";
}

function opaqueQ1() {
    q1a1.style.backgroundColor = "#333";
    q1a2.style.backgroundColor = "#333";
    q1a3.style.backgroundColor = "#333";
    q1a4.style.backgroundColor = "#333";
}

function q1Buttons(button) {
    if (button.style.backgroundColor === "rgb(17, 17, 17)") {
        opaqueQ1();
        button.style.backgroundColor = "#333";
        q2.style.display = "none";
        q3.style.display = "none";
    }
    else {
        transparentQ1();
        button.style.backgroundColor = "#111";
        q2.style.display = "grid";
        q2.scrollIntoView();
    }
}

q1a1.addEventListener("click", () => {scout += 1; pit += 2;  q1Buttons(q1a1); });
q1a2.addEventListener("click", () => {media += 1; tech += 1; q1Buttons(q1a2); });
q1a3.addEventListener("click", () => {pit += 1; driver += 1; q1Buttons(q1a3); });
q1a4.addEventListener("click", () => {driver += 2;           q1Buttons(q1a4); });




function transparentQ2() {
    q2a1.style.backgroundColor = "#333333CC";
    q2a2.style.backgroundColor = "#333333CC";
    q2a3.style.backgroundColor = "#333333CC";
    q2a4.style.backgroundColor = "#333333CC";
}

function opaqueQ2() {
    q2a1.style.backgroundColor = "#333";
    q2a2.style.backgroundColor = "#333";
    q2a3.style.backgroundColor = "#333";
    q2a4.style.backgroundColor = "#333";
}

function q2Buttons(button) {
    if (button.style.backgroundColor === "rgb(17, 17, 17)") {
        opaqueQ2();
        button.style.backgroundColor = "#333";
        q3.style.display = "none";
    }
    else {
        transparentQ2();
        button.style.backgroundColor = "#111";
        q3.style.display = "grid";
        q3.scrollIntoView();
    }
}

q2a1.addEventListener("click", () => {pit += 4; driver += 1;   q2Buttons(q2a1); });
q2a2.addEventListener("click", () => {tech += 4;  driver += 1; q2Buttons(q2a2); });
q2a3.addEventListener("click", () => {media += 3;              q2Buttons(q2a3); });
q2a4.addEventListener("click", () => {scout += 2;              q2Buttons(q2a4); });




function transparentQ3() {
    q3a1.style.backgroundColor = "#333333CC";
    q3a2.style.backgroundColor = "#333333CC";
    q3a3.style.backgroundColor = "#333333CC";
    q3a4.style.backgroundColor = "#333333CC";
}

function opaqueQ3() {
    q3a1.style.backgroundColor = "#333";
    q3a2.style.backgroundColor = "#333";
    q3a3.style.backgroundColor = "#333";
    q3a4.style.backgroundColor = "#333";
}

function q3Buttons(button) {
    if (button.style.backgroundColor === "rgb(17, 17, 17)") {
        opaqueQ3();
        button.style.backgroundColor = "#333";
    }
    else {
        transparentQ3();
        button.style.backgroundColor = "#111";
        results();
    }
}

q3a1.addEventListener("click", () => {driver += 4;         q3Buttons(q3a1);});
q3a2.addEventListener("click", () => {scout += 4;          q3Buttons(q3a2);});
q3a3.addEventListener("click", () => {media += 3;          q3Buttons(q3a3);});
q3a4.addEventListener("click", () => {tech += 1; pit += 1; q3Buttons(q3a4);});


function results() {
    questions.style.display = "none";
    resultDiv.style.display = "block";
    resultDiv.scrollIntoView();
    const findMax = [driver, pit, tech, scout, media];
    const results = ["a driver", "in pit crew", "a tech", "a scout", "media"];
    let max = Math.max(...findMax);
    let i = 0;
    for (i; i < findMax.length; i++) {
        if (findMax[i] === max) {
            break;
        }   
    }
    result.textContent = "You are " + results[i];
    count++;
    counter.textContent = "Times completed: " + count;
}

let count = 0;
let counter = document.querySelector("#counter")
let retake = document.querySelector("#retake");
retake.addEventListener("click", () => {
    driver = 0;
    tech = 0;
    pit = 0;
    media = 0;
    scout = 0;
    opaqueQ1();
    opaqueQ2();
    opaqueQ3();
    
    q2.style.display = "none";
    q3.style.display = "none";
    resultDiv.style.display = "none";
    questions.style.display = "grid";
});