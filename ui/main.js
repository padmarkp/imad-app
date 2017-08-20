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

button.onclick = function()
{
    var request = new XMLHttpRequest();
    request.onreadyStateChange =  function()
    {
        if (request.readystate === XMLHttpRequest.DONE);
        {
        if (request.status === 200) 
        {
         var counter=request.responseText;
         var span = document.getElementById('counter');
         span.innerHTML= counter.toString();
        }
        }
    };
    
    request.open('GET', 'http://padmarkp.imad.hasura-app.io/counter', true);
    request.send(null);
    
    
};

var submit= document.getElementById('submit_btn');
submit.onClick = function()
{
   var request = new XMLHttpRequest();
    request.onreadyStateChange =  function()
    {
        if (request.readystate === XMLHttpRequest.DONE);
        {
        if (request.status === 200) 
        {
         var names = request.responseText;
    names = JSON.parse(names);
    var list='';
    for(var i=0; i< name.length ; i++)
    {
    list +='<li>' + names[i] + '</li>';
    
     }
var ul= document.getElementById('namelist');
ul.innerhtml =list;
}
}
}
var nameInput= document.getElementById('name');
var name = nameInput.value;

request.open('GET', 'http://padmarkp.imad.hasura-app.io/submit-name?name='+ name, true);
    request.send(null);
};