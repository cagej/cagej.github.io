const date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dateHeadingElement = document.getElementById("date-heading");

dateHeadingElement.innerText = `Today is ${date.toLocaleTimeString(undefined, {hour: "numeric", minute: "numeric", hour12: true})} on ${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`;

const personalInfoElement = document.getElementById("personal-info");
const personalInfoForm = document.getElementById("personal-info-form");
const usernameEntry = document.getElementById("user-name");
const feelingEntry = document.getElementById("feeling");
const polgygonNumberEntry = document.getElementById("number-entry");

personalInfoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    personalInfoElement.innerText = `The Cool Jaguar welcomes you, ${capitalize(usernameEntry.value.toLowerCase())}! We're glad you are doing ${feelingEntry.value.toLowerCase()}!`;
    alert(`Given your number: ${polgygonNumberEntry.value} - Your polygon is a ${getPolygon(parseInt(polgygonNumberEntry.value))}!`);
})

const getPolygon = (num) => {
    let polygonName;

    switch (num) {
        case 0:
            polygonName = "Nonegon";
            break;
        case 1:
            polygonName = "Henagon";
            break;
        case 2:
            polygonName = "Digon";
            break;
        case 3:
            polygonName = "Trigon";
            break;
        case 4:
            polygonName = "Tetragon";
            break;
        case 5:
            polygonName = "Pentagon";
            break;
        case 6:
            polygonName = "Hexagon";
            break;
        case 7:
            polygonName = "Heptagon";
            break;
        case 8:
            polygonName = "Octagon";
            break;
        case 9:
            polygonName = "Enneagon";
            break;
        case 10:
            polygonName = "Decacon";
            break;
    }
    return polygonName;
}

const originalBackgroundColor = document.body.style.backgroundColor;
const jaguar_MP3 = new Audio("./audio/JAGUARS.mp3");

const hondaButton = document.getElementById("honda")
const whiteoutButton = document.getElementById("whiteout")
const blackoutButton = document.getElementById("blackout")
const showMoneyButton = document.getElementById("showMoney")
const jaguarGrowlButton = document.getElementById("jaguarGrowl")

let toggle = button => {
    let element = document.getElementById("myimg");
    let hidden = element.getAttribute("hidden");

    if(hidden) {
        element.removeAttribute("hidden");
    } else {
        element.setAttribute("hidden", "hidden");
    }
}

whiteoutButton.addEventListener('click', () => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
});

blackoutButton.addEventListener('click', () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
});

showMoneyButton.addEventListener('click', () => {
    window.location.href = "https://money.com/";
});

jaguarGrowlButton.addEventListener('click', () => {
    jaguar_MP3.play();
});
