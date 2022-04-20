// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD2lAzZPfavYqkXR13m_EXWpaK86t4-iiQ",
    authDomain: "kwitter-project-52ba2.firebaseapp.com",
    databaseURL: "https://kwitter-project-52ba2-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-52ba2",
    storageBucket: "kwitter-project-52ba2.appspot.com",
    messagingSenderId: "784667629342",
    appId: "1:784667629342:web:5ec5457f9ed68a6bcd9b0f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

        console.log(firebase_message_id);
        console.log(message_data);

        name = message_data['name'];
        message = message_data['message'];
        like = message_data['like'];

        name_with_tag = "<h4>" + name + "<img class ='user_tick' src = 'tick.png'> </h4>";
        message_with_tag = "<h4 class ='message_h4'>" + message + "</h4>";

        like_with_button = "<button class='btn btn-warning' id = "+firebase_message_id+" value = "+like+" onclick ='updateLike(this.id)'>"; 
        span_with_tag = "<span class ='glyphicon glyphicon-thumbs-up'>LIKE : " + like + "</span> </button><hr>";

        row = name_with_tag + message_with_tag + like_with_button + span_with_tag;

        document.getElementById("output").innerHTML += row;

//End code
} });  }); }
getData();

function updateLike(message_id)
{
    console.log("Click on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like:updated_likes
  });
}

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message : msg,
        like:0
  });
  document.getElementById("msg").value = "";
}