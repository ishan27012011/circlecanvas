canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_x,last_y;
var colour="black";
var width=1;
var radius=0;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
mouseEvent="mouseDown";
colour=document.getElementById("colour_input").value;
width=document.getElementById("width_input").value;
radius=document.getElementById("radius_input").value;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseLeave";
}
canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e) {
current_x=e.clientX-canvas.offsetLeft;
current_y=e.clientY-canvas.offsetTop;
if (mouseEvent=="mouseDown") {
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=width;
ctx.arc(current_x,current_y,radius,0,2* Math.PI);
ctx.moveTo(last_x,last_y);
ctx.stroke();
}
last_x=current_x;
last_y=current_y;
}
function clean() {
ctx.clearRect(0,0,canvas.width,canvas.height)
}