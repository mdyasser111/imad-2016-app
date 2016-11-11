
//submit username/password to login
var submit = document.getElementById("submit_btm");
submit.Onclick = function () {
    
    //create a request object
    var request = new XMLHttpRequest();
    
    //create a response and store it in a variable
    request.Onreadystatechane = function () {
        if (request.readystate === XMLHttpRequest.Done) {
            //take some action
            if (request.status === 200) {
                alert('logged in successfuly');
            } else if (request. status === 423) {
                alert('username/password is incorrect');
            } else if  (request. status === 500) {
                alert('some thing want wrong gateway 504 ');
            }
        }
        //not done yet    
    };
    
    //make the request
    var username=document.getElementbyId("username").value;
    var password=document.getElementbyId("password").value;
    console.log(username); 
    console.log(password);
    request.open('post','http:// mdyasser111.imad.hasura-app.io/',true);
    request.setRequestHeader('content.Type','application/json');
    request.send(JSON.stringify({username: username,password: password}));

};
