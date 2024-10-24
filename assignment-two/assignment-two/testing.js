// Create a variable for the filter value to be stored within
var xFunction;

var pullOne = "symbolmap.json"; // Import the map to be sent to figure

// Once the map has been inserted to the HTML, we can pull its view to inspect for any X filter
vegaEmbed('#vis1', pullOne).then(function(result) {
    // Access the Vega View instance
    var view = result.view;

    // Pull the X_Select value
    view.addEventListener('click', function(event, item) {
        var selectedRange = item.datum.XSelect;
        xFunction(selectedRange);
    });
}).catch(console.error);

// Now the bar chart can be imported, sent to figure, but checked for the filter on the way
var pullTwo = "barchart.json" // Import the bar chart to be sent to figure

vegaEmbed('#vis2', pullTwo).then(function(result) {
    // Access the Vega View instance
    var view = result.view

    // Push the state that is caught on click into the value to filter the chart
    xHold = function updateParameter(newValue) {
        view.signal('XSelect', newValue).run();
    }
})