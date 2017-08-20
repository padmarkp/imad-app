var button= document.getElementById('counter');
var counter=0;
button.onclick = function()
{
    counter= counter + 1;
    var span=document.getElementById('count');
    span.innerHTML = counter.toString();
    
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