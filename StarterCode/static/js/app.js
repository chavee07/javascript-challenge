// from data.js assign array of objects to descriptive variable
var tableData = data;
// console.log(ufoData);
// Select the button
// var dateButton = d3.select("#filter-btn");
var tbody = d3.select("tbody");

function table(data){
    data.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
        table(tableData);

// console.log(dateButton);
var dateButton = d3.select("#filter-btn");



