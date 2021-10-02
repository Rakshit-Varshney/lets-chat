var firebaseConfig = {
      apiKey: "AIzaSyCo_HgpsZD_QPAxm1HjndzAnM4qPH52sQY",
      authDomain: "kwitter-64df7.firebaseapp.com",
      databaseURL: "https://kwitter-64df7-default-rtdb.firebaseio.com",
      projectId: "kwitter-64df7",
      storageBucket: "kwitter-64df7.appspot.com",
      messagingSenderId: "306628506541",
      appId: "1:306628506541:web:0dc1b14c976a76a7112724"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome-"+ user_name +"!";
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirect(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}