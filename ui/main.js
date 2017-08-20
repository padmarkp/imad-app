var button= document.getElementById('counter');
button.onclick = function()
{
    var request = new XMLHttpRequest();
    request.onreadyStateChange =  function()
    {
        if (request.readystate === XMLHttpRequest.DONE);
        {
        if (request.status === 200) 
        {
            var counter = request.responseText();
            var span=document.getElementById('count');
            span.innerHTML=counter.toString();
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