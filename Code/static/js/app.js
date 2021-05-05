// from data.js assign array of objects to descriptive variable
var tableData = data;
// console.log(ufoData);
// Select the button
// var dateButton = d3.select("#filter-btn");
var tbody = d3.select("tbody");



function table(data){
    // d3.event.preventDefault();

    data.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
        table(tableData);

// function table(data){
// tableData.forEach((sighting) => {
//     var row = tbody.append("tr");
//     Object.entries(sighting).forEach(([key, value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });     
// }
// table(tableData);

// console.log(dateButton);
var dateButton = d3.select("#filter-btn");

dateButton.on("click", function(){
    // this line clears out dataset
    // Clear any rows and cells from prior table (if any)
    tbody.html("");

    //Select the datetime input element html raw code
    var inputDateElement = d3.select("#datetime");

    //Get the value of the datetime input element
    var inputDateValue = inputDateElement.property("value");

    console.log("inputDateValue:",inputDateValue);
    // console.log(ufoData);

    var Datedata = tableData.filter(sighting => sighting.datetime === inputDateValue);

    console.log(Datedata);

    table(Datedata)
    

});