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

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

firebase.database().ref("/").child(Room_Name).update({
  purpose : "Adding Room Name"
});

function addRoom()
{
  new_room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(new_room_name).update({
    purpose : "Adding Room Name"
});

  localStorage.setItem("Your Room Name", new_room_name);

  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

room_names = "<div id = 'background'>" + localStorage.getItem("room_name") + "</div>";

console.log(room_names);
//End code
});});}
getData();

function redirectToRoomName()
{
  localStorage.setItem("Your Room Name", new_room_name);
  window.location = "kwitter_page.html";

}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location = "index.html";
}