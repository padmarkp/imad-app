var button= document.getElementById('counter');

button.onclick = function()
{
    var request = new XMLHttpRequest();   //create request
    request.onreadystatechange =  function()
    {
        if (request.readystate === XMLHttpRequest.DONE)
        {
        if (request.status === 200) 
        {
            var counter = request.responseText();                
            
            //we r making a request to webserver without refreshing is called     singlepage apps and al the changes happen withing that page.this action is called client sidde action like gmail.
            
            var span=document.getElementById('count');
            span.innerHTML = counter.toString();
        }
        }
    }; 
    request.open('GET', 'http://padmarkp.imad.hasura-app.io/counter', true);//make request
    request.send(null);
};


var submit= document.getElementById('submit_btn');
submit.onclick = function()
{
  var request = new XMLHttpRequest();
    request.onreadystatechange =  function()
    {
        if (request.readystate === XMLHttpRequest.DONE);
        {
        if (request.status === 200) 
        {
         var names = request.responseText;
         names = JSON.parse(names);  /* parse used toconvert string back into an array*/
        var list='';
    for(var i=0; i< name.length ; i++)
    {
    list +='<li>' + names[i] + '</li>';
    }
var ul= document.getElementById('namelist');
ul.innerHTML = list;
}
}
};
var nameInput= document.getElementById('name');
var name = nameInput.value;
request.open('GET', 'http://padmarkp.imad.hasura-app.io/submit-name?name=' + name, true);
request.send(null);
};