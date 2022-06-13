canvas=document.getElementById("myCanvas");
e=canvas.getContext("2d");
color="purple";

e.beginPath();
e.strokeStyle=color;
e.lineWidth=2;
e.arc(40,300,40,0,2*Math.PI);
e.stroke();

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(j){
color=document.getElementById("color").value;
console.log(color);
x=j.clientX - canvas.offsetLeft;
y=j.clientY - canvas.offsetTop;
console.log("x axis of mouse is" +x);
console.log("y axis of mouse is" +y);
circle(x,y);
}
function circle(x,y){
    e.beginPath();
    e.strokeStyle=color;
    e.lineWidth=2;
    e.arc(x,y,40,0,2*Math.PI);
    e.stroke();
}