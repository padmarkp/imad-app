console.log('Loaded!');
// change the text 
var element= document.getElementById('main-text');
element.innerHTML="new value";

var img = document.getElementById('madi');
var marginLeft=0;
function moveLeft()
{
    marginLeft=marginLeft+10;
    img.style.marginLeft= marginLeft+'px';
}
img.onclick = function ()
{
    //img.style.marginLeft='50px';
    var interval= setInterval(moveLeft , 10 );
};