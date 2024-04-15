function showHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("locations").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("application").style.display = "none";
    document.getElementById("routes").style.display = "none";
}

function showAbout() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("locations").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("application").style.display = "none";
    document.getElementById("routes").style.display = "none";
}

function showLocations() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("locations").style.display = "block";
    document.getElementById("contact").style.display = "none";
    document.getElementById("application").style.display = "none";
    document.getElementById("routes").style.display = "none";
}

function showContact() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("locations").style.display = "none";
    document.getElementById("contact").style.display = "block";
    document.getElementById("application").style.display = "none";
    document.getElementById("routes").style.display = "none";
}

function showApplication() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("locations").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("application").style.display = "block";
    document.getElementById("routes").style.display = "none";
}

function showRoutes() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("locations").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("application").style.display = "none";
    document.getElementById("routes").style.display = "block";
}

showHome();