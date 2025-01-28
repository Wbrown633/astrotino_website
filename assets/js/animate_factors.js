import { SVG } from "https://esm.sh/@svgdotjs/svg.js";
var tick_num = 12;
var charcoal_black = "#36454F";
var sqrt_line_color = "#00FF00";
var canvas_width = 800;
var canvas_height = 200;
var tick_inset = 10;
var min_tick_spacing = 15;
var factors = [];

var path_colors = [
  "#FF0000",
  "#800000",
  "#FFFF00",
  "#808000",
  "#00FF00",
  "#008000",
  "#00FFFF",
  "#008080",
  "#0000FF",
  "#000080",
  "#FF00FF",
  "#800080"
];

// shape vars

var circle_diam = 20;
var tick_width = 5;
var tick_height = 35;
var text_offset = 30;

var draw = SVG().addTo("#animation_canvas").size(canvas_width, canvas_height);

let btn = document.getElementById("button");
btn.addEventListener("click", () => {
  tick_num = Number.parseInt(ticks.value);
  if (tick_num > 5 && tick_num < 100) {
    draw.clear();
    if (checkPrime(tick_num)) {
      drawIfPrime(tick_num);
    } else {
      drawNumberline();
    }
  }
});

let path_btn = document.getElementById("path_button");
path_btn.addEventListener("click", () => {
  drawAllPaths();
});

// TODO: fix the text labels not centered
// TODO: add fewer labels when it gets crowded?
function drawNumberline() {
  var rect = draw
    .rect(canvas_width - 2 * tick_inset, tick_width)
    .attr({ fill: charcoal_black });

  let input_ticks = rect.move(tick_inset, canvas_height / 2 - tick_width / 2);
  //var tick_spacing = canvas_width / adjust_tick;
  var tick_spacing = 20;
  factors = getFactors(tick_num);
  var adjust_tick = tick_num - 2;
  drawSqrtLine(tick_num);
  for (let i = 0; i < adjust_tick; i++) {
    var temp = draw
      .rect(tick_width, tick_height)
      .attr({ fill: charcoal_black });
    var coords = getCoords(i, adjust_tick);
    var x_coord = coords[0];
    var y_coord = coords[1];
    temp.move(x_coord, canvas_height / 2 - tick_height / 2);
    if (factors.includes(i + 2)) {
      var text = draw.text(i + 2);
      text.move(x_coord, canvas_height / 2 + text_offset);
    }
    // get circle coords
    // circles need to be offset by 2
    // to account for the fact that the
    // number line starts at 2

    var circle_coords = getCoords(i - 2, adjust_tick);

    if (factors.includes(i)) {
      var circle = draw.circle(20).attr({ fill: "#C70039" });
      circle.move(
        circle_coords[0] - 10 + 2.5,
        circle_coords[1] - circle_diam / 2
      );
    }
  }
}

function drawAllPaths() {
  var cloneFactors = [...factors];

  while (cloneFactors.length > 1) {
    var factor1 = cloneFactors.shift();
    var factor2 = cloneFactors.pop();
    drawPath(factor1, factor2);
  }
  factors = [];
}

// currently draws the path for only one set of factors
function drawPath(factor1, factor2) {
  console.log("try to draw path");

  if (factors.length < 2) {
    console.log("no factors, exiting!");
    return;
  }
  var x_coord_1 = getCoords(factor1 - 2, tick_num - 2)[0];
  var x_coord_2 = getCoords(factor2 - 2, tick_num - 2)[0];
  var dist_between_pts = x_coord_2 - x_coord_1;

  var y_peak = getPathPeak(dist_between_pts);

  var path_string = `M${x_coord_1},100 C${x_coord_1 * 1.5},${y_peak} ${
    x_coord_2 * 0.75
  },${y_peak} ${x_coord_2}, 100`;
  var path = draw
    //.path("M" + x_coord_1 + ",100 C125,50  250,50 " + x_coord_2 + ",100")
    .path(path_string)
    .stroke({
      color: getPathColor(),
      width: 5,
      linecap: "round",
      linejoin: "round"
    })
    .fill("none");
}

// draw a straight vertical line at sqrt(n)
function drawSqrtLine(max_number) {
  var line_width = 5;
  var line_height = canvas_height / 2;

  // need to get coords for the sqrt location
  var sqrt_coords = getCoords(Math.sqrt(max_number) - 2, max_number - 2);
  var rect = draw.rect(line_width, line_height).attr({ fill: sqrt_line_color });

  rect.move(
    sqrt_coords[0] + tick_width / 2 - line_width / 2,
    sqrt_coords[1] - line_height / 2
  );
}

function getFactors(number) {
  const local_factors = [];
  for (let i = 2; i < tick_num; i++) {
    if (number % i == 0) {
      local_factors.push(i);
    }
  }
  return local_factors;
}

// Calculate the position for a number on the number line given the max number on the number line
function getCoords(number, max_number) {
  var tick_spacing = canvas_width / max_number;
  if (tick_spacing < min_tick_spacing) {
    tick_spacing = min_tick_spacing;
  }
  var x_coord = tick_inset + number * tick_spacing;
  var y_coord = canvas_height / 2;
  console.log(number, max_number);
  console.log([x_coord, y_coord]);
  return [x_coord, y_coord];
}

function getPathColor() {
  var color = path_colors.shift();
  path_colors.push(color);
  return color;
}

function getPathPeak(dist) {
  return -0.13 * dist + 100.0;
}

function checkPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

function drawIfPrime(num) {
  var text = draw.text(`${num} is a prime number!`);
  text.move(25, 25);
}
