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

var button= document.getElementById('button');

var counter=0;
button.onclick = function()
{
    var request = new XMLHttpRequest();
    request.onreadyStateChange =  function()
    {
        if (request.readystate === XMLHttpRequest.DONE);
        
        if (request.status === 200) 
        {
         var counter=request.responseTest;
         var span = document.getElementById('count');
         span.innerHTML= counter.toString();
        }
        
    };
    
    request.open('GET' , 'http://padmarkp.imad.hasura-app.io/counter', true);
    request.send(null);
    
    
};