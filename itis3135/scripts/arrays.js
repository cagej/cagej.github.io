let person = [];
let salaries = [];

function addSalary(){
    let name = document.getElementById("name").value;
    let salary = document.getElementById("salary").value;
    
    if (name == ""){
        document.getElementById("nameNull").innerHTML = "Please enter a name";
        alert("Please enter a name");
    }
    if (salary == ""){
        document.getElementById("salaryNull").innerHTML = "Please enter a salary";
        alert("Please enter a salary");
    }
    if (name != "" && salary!= ""){
        person.push(name);
        salaries.push(salary);
        alert("Salary added");
    }     
}
function displayResults(){
    var highest = 0, average = 0;
    for (var j = 0; j < salaries.length; j++){
        average += salaries[j];
        if (salaries[j] > highest){
            highest = salaries[j];
        }
    }
    if (salaries.length != 0){
        average = average/salaries.length;
    }
    let result = document.getElementById("results");
    result.innerHTML = "<h2>Highest Salary</h2>";
    result.innerHTML += "<p>" + highest + "</p>";
    result.innerHTML += "<h2>Average Salary</h2>";
    result.innerHTML += "<p>" + average + "</p>"
}
function displaySalary(){
    let table = document.getElementById("result_table");
    table.innerHTML = "<tr><th>Name</th><th>Salary</th></tr>";
    for (var j = 0; j < person.length; j++){
        table.innerHTML += "<tr><td>" + person[j] + "</td><td>" + salaries[j] + "</td></tr>";
    }
}
function displayEmployees(){
    let employees = document.getElementById("employees");
    employees.innerHTML = "";
    for (var j = 0; j < person.length; j++){
        employees.innerHTML += "<option>" + person[j] + "</option>";
    }      
}