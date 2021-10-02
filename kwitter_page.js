//YOUR FIREBASE LINKS
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

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
} 


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}