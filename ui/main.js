console.log('Loaded!');
// change the text 
var element= document.getElementById('main-text');
element.innerHTML="new value";

var img = document.getElementById('madi');
var marginRight=0;
function moveRight()
{
    marginRight=marginRight+1;
    img.style.marginRight= marginRight+'px';
}
img.onclick = function ()
{
    //img.style.marginLeft='50px';
    var interval= setInterval(moveRight , 5 );
};