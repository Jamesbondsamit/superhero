var canvas=new fabric.Canvas("myCanvas");

player_x=10;
player_y=10;

block_image_width=30;
block_image_height=30;

var player_object="";
var block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img)
    {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);

        player_object.set({
            top:player_y,
            left:player_x
        });
        
        canvas.add(player_object);
    });
}
function new_image(get_image){
fabric.Image.fromURL(get_image,function(Img){
    block_image_object=Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);

    block_image_object.set({
        top:player_y,
        left:player_x
    });

    canvas.add(block_image_object);
});
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
}
if (e.shiftKey==true&&keyPressed=='77'){
    console.log("m and shift pressed together ");
    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;   
    
    
    if(keyPressed=='83'){
        new_image("spiderman mask.jpg");
        console.log("spider man");
    }
    if(keyPressed=='67'){
        new_image("sheild.jpg")
        console.log("Sheild")
    }
    if(keyPressed=='73'){
        new_image("helmet_ironman.jpg")
        console.log("Iron man helmet")
    }
    if(keyPressed=='71'){
        new_image("gauntlet iron man.jpg")
        console.log("Iron man gauntlet")
    }
    if(keyPressed=='72'){
        new_image("hulk body.jpg")
        console.log("Hulk smash ")
    }
    if(keyPressed=='74'){
        new_image("hulk hand.jpg")
        console.log("hulk Hand smash")
    }
    if(keyPressed=='76'){
        new_image("hulk legs.jpg")
        console.log("hulk leg smach")
    }
