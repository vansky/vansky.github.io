  var w = 975;
  var h = 735;


  var svg = d3.selectAll(".svg")
  //.selectAll("svg")
  .append("svg")
  .attr("width", w)
  .attr("height", h)
  .attr("class", "svg");


    var taskArray = [
  {
    task: "Courses",
    type: "First",
    startTime: "2020-9-1", //year/month/day
    endTime: "2021-1-1",
},
      {
    task: "Courses",
    type: "First",
    startTime: "2021-2-1", //year/month/day
    endTime: "2021-6-1",
},
            {
    task: "NSF GRFP",
    type: "First",
    startTime: "2020-10-1", //year/month/day
    endTime: "2020-11-1",
},
      {
    task: "Courses",
    type: "Second",
    startTime: "2020-9-1", //year/month/day
    endTime: "2021-1-1",
},
      {
    task: "Courses",
    type: "Second",
    startTime: "2021-2-1", //year/month/day
    endTime: "2021-6-1",
},
       {
    task: "Publish",
    type: "Second",
    startTime: "2020-11-1",
    endTime: "2021-1-1",
},
      {
    task: "Q work",
    type: "Second",
    startTime: "2020-12-1",
    endTime: "2021-1-1",
},
      {
    task: "Q-paper",
    type: "Second",
    startTime: "2021-4-1",
    endTime: "2021-5-1",
},
      {
    task: "Q-exam",
    type: "Second",
    startTime: "2021-5-1",
    endTime: "2021-6-1",
},
      {
    task: "Conferences",
    type: "Second",
    startTime: "2021-6-1",
    endTime: "2021-9-1",
},
      {
    task: "Publish",
    type: "Third",
    startTime: "2020-11-1",
    endTime: "2021-1-1",
},
      {
    task: "A work",
    type: "Third",
    startTime: "2020-12-1",
    endTime: "2021-1-1",
},
      {
    task: "A-paper",
    type: "Third",
    startTime: "2021-4-1",
    endTime: "2021-5-1",
},
      {
    task: "A-exam",
    type: "Third",
    startTime: "2021-5-1",
    endTime: "2021-6-1",
},
      {
    task: "Conferences",
    type: "Third",
    startTime: "2021-6-1",
    endTime: "2021-9-1",
},
      {
    task: "Market Prep (soft)",
    type: "Third",
    startTime: "2021-6-1",
    endTime: "2021-9-1",
},
            {
    task: "Publish",
    type: "Fourth",
    startTime: "2020-11-1",
    endTime: "2021-1-1",
},
      {
    task: "P-exam",
    type: "Fourth",
    startTime: "2020-12-1",
    endTime: "2021-1-1",
},
      {
    task: "Conferences",
    type: "Fourth",
    startTime: "2021-6-1",
    endTime: "2021-9-1",
},
      {
    task: "Market Prep",
    type: "Fourth",
    startTime: "2021-6-1",
    endTime: "2021-9-1",
},
       {
    task: "Job Market (soft)",
    type: "Fourth",
    startTime: "2020-9-1",
    endTime: "2021-1-1",
},
      
{
    task: "Diss Draft",
    type: "Fifth",
    startTime: "2021-1-1",
    endTime: "2021-2-1",
},
{
    task: "Submit Diss",
    type: "Fifth",
    startTime: "2021-3-1",
    endTime: "2021-4-1",
},
{
    task: "B-exam",
    type: "Fifth",
    startTime: "2021-4-1",
    endTime: "2021-5-1",
},
{
    task: "Job Market",
    type: "Fifth",
    startTime: "2020-9-1",
    endTime: "2021-1-1",
},
      
];

var dateFormat = d3.time.format("%Y-%m-%d");

var timeScale = d3.time.scale()
        .domain([d3.min(taskArray, function(d) {return dateFormat.parse(d.startTime);}),
                 d3.max(taskArray, function(d) {return dateFormat.parse(d.endTime);})])
        .range([0,w-150]);

var categories = new Array();

for (var i = 0; i < taskArray.length; i++){
    categories.push(taskArray[i].type);
}

var catsUnfiltered = categories; //for vert labels

categories = checkUnique(categories);


makeGant(taskArray, w, h);

var title = svg.append("text")
              .text("PhD Timeline")
              .attr("x", w/2)
              .attr("y", 25)
              .attr("text-anchor", "middle")
              .attr("font-size", 18)
              .attr("fill", "#009FFC");



function makeGant(tasks, pageWidth, pageHeight){

var barHeight = 20;
var gap = barHeight + 4;
var topPadding = 75;
var sidePadding = 75;

var colorScale = d3.scale.linear()
    .domain([0, categories.length])
    .range(["#00B9FA", "#F95002"])
    .interpolate(d3.interpolateHcl);
makeGrid(sidePadding, topPadding, pageWidth, pageHeight);
drawRects(tasks, gap, topPadding, sidePadding, barHeight, colorScale, pageWidth, pageHeight);
vertLabels(gap, topPadding, sidePadding, barHeight, colorScale);

}


function drawRects(theArray, theGap, theTopPad, theSidePad, theBarHeight, theColorScale, w, h){

var bigRects = svg.append("g")
    .selectAll("rect")
   .data(theArray)
   .enter()
   .append("rect")
   .attr("x", 0)
   .attr("y", function(d, i){
      return i*theGap + theTopPad - 2;
  })
   .attr("width", function(d){
      return w-theSidePad/2;
   })
   .attr("height", theGap)
   .attr("stroke", "none")
   .attr("fill", function(d){
    for (var i = 0; i < categories.length; i++){
        if (d.type == categories[i]){
          return d3.rgb(theColorScale(i));
        }
    }
   })
   .attr("opacity", 0.2);


     var rectangles = svg.append('g')
     .selectAll("rect")
     .data(theArray)
     .enter();


   var innerRects = rectangles.append("rect")
             .attr("rx", 3)
             .attr("ry", 3)
             .attr("x", function(d){
              return timeScale(dateFormat.parse(d.startTime)) + theSidePad;
              })
             .attr("y", function(d, i){
                return i*theGap + theTopPad;
            })
             .attr("width", function(d){
                return (timeScale(dateFormat.parse(d.endTime))-timeScale(dateFormat.parse(d.startTime)));
             })
             .attr("height", theBarHeight)
             .attr("stroke", "none")
             .attr("fill", function(d){
              for (var i = 0; i < categories.length; i++){
                  if (d.type == categories[i]){
                    return d3.rgb(theColorScale(i));
                  }
              }
             })
   

         var rectText = rectangles.append("text")
               .text(function(d){
                return d.task;
               })
               .attr("x", function(d){
                return (timeScale(dateFormat.parse(d.endTime))-timeScale(dateFormat.parse(d.startTime)))/2 + timeScale(dateFormat.parse(d.startTime)) + theSidePad;
                })
               .attr("y", function(d, i){
                  return i*theGap + 14+ theTopPad;
              })
               .attr("font-size", 11)
               .attr("text-anchor", "middle")
               .attr("text-height", theBarHeight)
               .attr("fill", "#fff");


}


function makeGrid(theSidePad, theTopPad, w, h){

var xAxis = d3.svg.axis()
    .scale(timeScale)
    .orient('bottom')
    .ticks(d3.time.months, 1)
    .tickSize(-h+theTopPad+20, 0, 0)
    .tickFormat(d3.time.format('%b'));

var grid = svg.append('g')
    .attr('class', 'grid')
    .attr('transform', 'translate(' +theSidePad + ', ' + (h - 50) + ')')
    .call(xAxis)
    .selectAll("text")  
            .style("text-anchor", "start")
            .attr("fill", "#000")
            .attr("stroke", "none")
            .attr("font-size", 10)
            .attr("dy", "1em")
            .attr("dx", "2.2em");
}

function vertLabels(theGap, theTopPad, theSidePad, theBarHeight, theColorScale){
  var numOccurances = new Array();
  var prevGap = 0;

  for (var i = 0; i < categories.length; i++){
    numOccurances[i] = [categories[i], getCount(categories[i], catsUnfiltered)];
  }

  var axisText = svg.append("g") //without doing this, impossible to put grid lines behind text
   .selectAll("text")
   .data(numOccurances)
   .enter()
   .append("text")
   .text(function(d){
    return d[0];
   })
   .attr("x", 10)
   .attr("y", function(d, i){
    if (i > 0){
        for (var j = 0; j < i; j++){
          prevGap += numOccurances[i-1][1];
         // console.log(prevGap);
          return d[1]*theGap/2 + prevGap*theGap + theTopPad;
        }
    } else{
    return d[1]*theGap/2 + theTopPad;
    }
   })
   .attr("font-size", 11)
   .attr("text-anchor", "start")
   .attr("text-height", 14)
   .attr("fill", function(d){
    for (var i = 0; i < categories.length; i++){
        if (d[0] == categories[i]){
        //  console.log("true!");
          return d3.rgb(theColorScale(i)).darker();
        }
    }
   });

}

//from this stackexchange question: http://stackoverflow.com/questions/1890203/unique-for-arrays-in-javascript
function checkUnique(arr) {
    var hash = {}, result = [];
    for ( var i = 0, l = arr.length; i < l; ++i ) {
        if ( !hash.hasOwnProperty(arr[i]) ) { //it works with objects! in FF, at least
            hash[ arr[i] ] = true;
            result.push(arr[i]);
        }
    }
    return result;
}

//from this stackexchange question: http://stackoverflow.com/questions/14227981/count-how-many-strings-in-an-array-have-duplicates-in-the-same-array
function getCounts(arr) {
    var i = arr.length, // var to loop over
        obj = {}; // obj to store results
    while (i) obj[arr[--i]] = (obj[arr[i]] || 0) + 1; // count occurrences
    return obj;
}

// get specific from everything
function getCount(word, arr) {
    return getCounts(arr)[word] || 0;
}
