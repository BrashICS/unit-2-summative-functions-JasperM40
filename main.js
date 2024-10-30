/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);
document.getElementById("rect_prism_volume").addEventListener("click", rect_prism_vol)
document.getElementById("rect_prism_area").addEventListener("click", rect_prism_area)
document.getElementById("sphere_vol").addEventListener("click", sphere_vol)
document.getElementById("length_of_coords").addEventListener("click", length_on_page)
document.getElementById("slope").addEventListener("click", slope_of_coords)
document.getElementById("midpoint").addEventListener("click", midpoint_of_coords)
document.getElementById("zeros").addEventListener("click", zeros) 

/*** Functions ***/

// Round to the nearest `decimals` number of decimals
function round(value, decimals) {
    return Math.round(value * 10**decimals) / 10**decimals;
}

// Round to the user's number of decimals
function round_user(value) {
    // Get the number of decimals from the "rounding" box
    let d = Number(document.getElementById("rounding").value)

}

// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {
    let y= (a * x**2) + (b * x) + c
    return y 
}

// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {
    let x1 = -(Number (document.getElementById("b").value))+ Math.sqrt(Number(document.getElementById("b").value)
    -4 * (Number(document.getElementById("a").value))*(Number(document.getElementById("c").value))) /2 * (Number(document.getElementById("a").value))
    
    let x2 = -(document.getElementById("b").value)
    +
     Math.sqrt((document.getElementById("b").value) + 4 *
     (Number(document.getElementById("a").value)*
     (Number(document.getElementById("c").value))))
     /(2 *(Number(document.getElementById("a").value)))
    console.log(x1, x2)
     document.getElementById("quadratic_output").textContent = `The zeros are ${x1}, ${x2}`
}

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {
    
}

function delta(a, b) {
    let answer = a - b 
    return answer
}


function slope (x1, y1, x2, y2) {
   let xt = ((delta(x1, x2)) )
   let yt = (delta(y1, y2))
    return xt / yt
} 

function average (a, b) {
    return (a + b) / 2
}

function round_user(value) {
    let d = Number(document.getElementById("rounding").value)
    return Math.round(value * 10**d) / 10**d
}

  function length(x1, y1, x2, y2) {
    let dx = (delta(x2, x1))
    let dy = (delta(y2, y1))
    let distance = Math.sqrt(dx**2 + dy**2)
    return distance 
  }

  function rect_prism_vol() {
    let width = Number(document.getElementById("width").value)
    let height = Number(document.getElementById("height").value)
    let length = Number(document.getElementById("length").value)
    document.getElementById("div_answer").textContent= `The answer is ${width*height*length}` 
  }

  function rect_prism_area() {
    let width = Number(document.getElementById("width").value)
    let height = Number(document.getElementById("height").value)
    let length = Number(document.getElementById("length").value)
    document.getElementById("div_answer").textContent= `The answer is ${2*(width*length+height*length+height*width)}`
  }

  function sphere_vol(){
    let radius = Number(document.getElementById("radius").value)
    document.getElementById("div_answer").textContent= `the answer is ${4/3 * Math.PI * radius**3} `
  }

  function length_on_page() {
    let dx = (delta(Number(document.getElementById("x2").value), (Number(document.getElementById("x1").value))))
    let dy = (delta(Number(document.getElementById("y2").value), (Number(document.getElementById("y1").value))))
    let distance = Math.sqrt(dx**2 + dy**2)
    let length4 = round_user(distance)
    document.getElementById("div_answer_coords").textContent= `The length is ${length4}` 
  }
function slope_of_coords() {
    let dy = (delta(Number(document.getElementById("y2").value), (Number(document.getElementById("y1").value))))
    let dx = (delta(Number(document.getElementById("x2").value), (Number(document.getElementById("x1").value))))
    let slope = dy/dx
    let roundedSlope= round_user(slope)
    document.getElementById("div_answer_coords").textContent= `The slope is ${roundedSlope}`
}

function midpoint_of_coords() {
    let dx = (average(Number(document.getElementById("x2").value), (Number(document.getElementById("x1").value))))
    let dy = (average(Number(document.getElementById("y2").value), (Number(document.getElementById("y1").value))))
    let midpoint_rounded_X = round_user(dx)
    let midpoint_rounded_Y = round_user(dy)
    document.getElementById("div_answer_coords").textContent= `The midpoint is (${midpoint_rounded_X}, ${midpoint_rounded_Y})`
}

