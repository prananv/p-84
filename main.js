canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");

var nasa_images=["img1.jpg","img2.jpg","img3.jpg","img4.jpg"];
var random_number=Math.floor(Math.random()* 4);
console.log(random_number);

rover_width=100;
rover_height=90;

background_image=nasa_images[random_number];
rover_image="rover.png";
rover_x=10;
rover_y=10;

function add(){
    background_imagetag=new Image();
    background_imagetag.onload=uploadbackground;
    background_imagetag.src=background_image;

    rover_imagetag=new Image();
    rover_imagetag.onload=uploadrover;
    rover_imagetag.src=rover_image;
}

function uploadbackground(){
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="37"){
        console.log("left");
        left();
    } 
    if(keypressed=="38"){
        console.log("up");
        up();
    }
    if(keypressed=="39") {
        console.log("right");
        right();
    }
    if(keypressed=="40"){
        console.log("down");
        down();
    }
}

function left(){
    if (rover_x>=0) {
        rover_x=rover_x -10;
        console.log("When the left arrow is pressed, x= "+ rover_x + ",y= "+ rover_y);
        uploadbackground();
        uploadrover();
    }
}

function right(){
    if (rover_x<=800) {
        rover_x=rover_x +10;
        console.log("When the right arrow is pressed, x= "+ rover_x + ",y= "+ rover_y);
        uploadbackground();
        uploadrover();
    }
}

function up(){
    if (rover_y<=500) {
        rover_y=rover_y -10;
        console.log("When the up arrow is pressed, y= "+ rover_y+ ",x= "+ rover_x);
        uploadbackground();
        uploadrover();
    }
}

function down(){
    if (rover_y>=0) {
        rover_y=rover_y +10;
        console.log("When the down arrow is pressed, y= "+ rover_y+ ",x= "+ rover_x);
        uploadbackground();
        uploadrover();
    }
}