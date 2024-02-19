var today=new Date();
document.write("Today is: ");
document.write(today.toDateString());

const personalInfoElement = document.getElementById("get-personal");
const personalInfoForm = document.getElementById("info-form");
const usernameEntry = document.getElementById("user-name");
const feelingEntry = document.getElementById("feeling");
const polgygonNumberEntry = document.getElementById("num-entry");

personalInfoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    personalInfoElement.innerText = `Cool Jaguar, ${capitalize(usernameEntry.value.toLowerCase())}! We're glad you are doing ${feelingEntry.value.toLowerCase()}!`;
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