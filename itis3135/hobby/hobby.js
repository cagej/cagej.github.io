function showAbout() {
    document.getElementById("who-section").style.display = "block";
    document.getElementById("what-section").style.display = "none";
    document.getElementById("when-section").style.display = "none";
    document.getElementById("where-section").style.display = "none";
    document.getElementById("how-section").style.display = "none";
    document.getElementById("why-section").style.display = "none";
}

function showHome() {
    document.getElementById("who-section").style.display = "none";
    document.getElementById("what-section").style.display = "block";
    document.getElementById("when-section").style.display = "none";
    document.getElementById("where-section").style.display = "none";
    document.getElementById("how-section").style.display = "none";
    document.getElementById("why-section").style.display = "none";
}

function showCalendar() {
    document.getElementById("who-section").style.display = "none";
    document.getElementById("what-section").style.display = "none";
    document.getElementById("when-section").style.display = "block";
    document.getElementById("where-section").style.display = "none";
    document.getElementById("how-section").style.display = "none";
    document.getElementById("why-section").style.display = "none";
}

function showTracks() {
    document.getElementById("who-section").style.display = "none";
    document.getElementById("what-section").style.display = "none";
    document.getElementById("when-section").style.display = "none";
    document.getElementById("where-section").style.display = "block";
    document.getElementById("how-section").style.display = "none";
    document.getElementById("why-section").style.display = "none";
}

function showRating() {
    document.getElementById("who-section").style.display = "none";
    document.getElementById("what-section").style.display = "none";
    document.getElementById("when-section").style.display = "none";
    document.getElementById("where-section").style.display = "none";
    document.getElementById("how-section").style.display = "block";
    document.getElementById("why-section").style.display = "none";
}

function showExist() {
    document.getElementById("who-section").style.display = "none";
    document.getElementById("what-section").style.display = "none";
    document.getElementById("when-section").style.display = "none";
    document.getElementById("where-section").style.display = "none";
    document.getElementById("how-section").style.display = "none";
    document.getElementById("why-section").style.display = "block";
}

showHome();