//console.log('Loaded!');
// change the text 
//var element= document.getElementById('main-text');
//element.innerHTML="new value";

//var img = document.getElementById('madi');
//var marginRight=0;
//function moveRight()
//{
//    marginRight=marginRight+1;
//    img.style.marginRight= marginRight+'px';
//}
//img.onclick = function ()
//{
//    //img.style.marginLeft='50px';
//    var interval= setInterval(moveRight , 5 );
//};

var button= document.getElementById('counter');

var counter=0;
button.onclick = function()
{
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
    
};