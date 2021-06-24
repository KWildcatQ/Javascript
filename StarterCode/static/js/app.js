// from data.js
var tableData = data;
console.log(tableData);

// Create reference to the table body
var tbody = d3.select("tbody");

// Values for columns (loop)
tableData.forEach(function(sightings){
    console.log(sightings);
    // appending rows for sightings
    var row = tbody.append("tr"); 
     Object.entries(sightings).forEach(function([key, value]){
         console.log(key, value);
            var data = row.append("td");
                data.text(value);})})

// Select the button
var button = d3.select("#filter-btn")
var filters = d3.select("#filters")

// Create event handler
button.on("click", runEnter);

// Complete the event handler for the filter
function runEnter() {
    //console.log("abc");

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
        console.log(inputValue);
    tbody.html("");
     var filteredData = tableData.filter(sightings => sightings.datetime === inputValue);
        console.log(filteredData);
            filteredData.forEach(function(sightings){
                 console.log(sightings);
                     // appending rows for sightings
                         var row = tbody.append("tr"); 
                            Object.entries(sightings).forEach(function([key, value]){
                            console.log(key, value);
                                var data = row.append("td");
                                data.text(value);})})}





