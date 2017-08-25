var button=document.getElementById("counter");
button.onclick = function()
{
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() 
    {
          if (request.readyState === XMLHttpRequest.DONE) 
          {
              //Take Some Action
              if (request.status === 200) 
                { 
                    var counter = request.responseText; 
                    var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
                } 
          } 
    }; 
    request.open("GET", "http://padmarkp.imad.hasura-app.io/counter", true);
    request.send(null);

};

var
 Submit= document.getElementById('Submit_btn1');
Submit.onClick= function()
{
  var request = new XMLHttpRequest();
    request.onreadystatechange =  function()
    {
        if (request.readystate === XMLHttpRequest.DONE);
        {
        if (request.status === 200){
        alert("Logged in successfully");}
        else if (request.status === 403){
        alert("username/password is incorrect");}
        else if (request.status === 500){
        alert("Something went wrong on the server");
        }
    }
};
var username= document.getElementById('username').value;
var password= document.getElementById('password').value;
console.log(username);
console.log(password);
request.open('POST', "http://padmarkp.imad.hasura-app.io/login",true);
request.setRequestHeader('Content-Type', 'application/json');
request.send(JSON.stringify({username: username, password: password}));
};


