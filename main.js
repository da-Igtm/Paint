canvas= document.getElementById("myCanvas"); 
ctx=canvas.getContext("2d"); 
var mouseEvent="empty"; 
canvas .addEventListener("mousedown" , my_mousedown); 
function my_mousedown(e)
{ console.log("mousedown") 
col=document.getElementById("col").value;
 width=document.getElementById("Width").value;
  Radi=document.getElementById("Radi").value;
   mouseEvent="mouseDown"; }
   canvas .addEventListener("mouseup" , my_mouseup);
    function my_mouseup(e)
    { console.log("mouseup")
     mouseEvent="mouseUp"; 
    } canvas .addEventListener("mouseleave" , my_mouseleave);
     function my_mouseleave(e)
     { console.log("mouseleave");
      mouseEvent="mouseLeave"; }
       canvas.addEventListener("mousemove" , my_mousemove);
        function my_mousemove(e)
        { console.log("Daksh");
            current_position_of_mouse_x =e.clientX - canvas.offsetLeft;
         current_position_of_mouse_y =e.clientY - canvas.offsetTop; 
         if (mouseEvent=="mouseDown")
         { console.log("Current position of x and y coordinates =");
          console.log("x ="+ current_position_of_mouse_x +"y ="+current_position_of_mouse_y);
           ctx.beginPath();
            ctx.strokeStyle = col ;
             ctx.lineWidth = Width ;
              ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,Radi,0,2*Math.PI);
               ctx.stroke(); } }