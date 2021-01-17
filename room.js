  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBDjzrB_F-aUKRdJbFbDqJ9USGd2z1z7jQ",
    authDomain: "confaber-2665d.firebaseapp.com",
    databaseURL: "https://confaber-2665d-default-rtdb.firebaseio.com",
    projectId: "confaber-2665d",
    storageBucket: "confaber-2665d.appspot.com",
    messagingSenderId: "377238426603",
    appId: "1:377238426603:web:9411160cb9080cbaf83fae"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function change() {
    background_img = localStorage.getItem("background");
    user_name = localStorage.getItem("User name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

    if (background_img == "bg1.jpg") {
        document.getElementById("logout").style.backgroundImage = "url('bg1.jpg')";
        document.getElementById("room_name").style.borderImage = "url('bg1.jpg') 30 stretch";
        document.getElementById("room").style.backgroundImage = "url('bg1.jpg')";
    }
    if (background_img == "bg2.jpg") {
        document.getElementById("logout").style.backgroundImage = "url('bg2.jpg')";
        document.getElementById("room_name").style.borderImage = "url('bg2.jpg') 30 stretch";
        document.getElementById("room").style.backgroundImage = "url('bg2.jpg')";
    }
    if (background_img == "bg3.jpg") {
        document.getElementById("logout").style.backgroundImage = "url('bg3.jpg')";
        document.getElementById("room_name").style.borderImage = "url('bg3.jpg') 30 stretch";
        document.getElementById("room").style.backgroundImage = "url('bg3.jpg')";
    }
    if (background_img == "bg4.jpg") {
        document.getElementById("logout").style.backgroundImage = "url('bg4.jpg')";
        document.getElementById("room_name").style.borderImage = "url('bg4.jpg') 30 stretch";
        document.getElementById("room").style.backgroundImage = "url('bg4.jpg')";
    }
    if (background_img == "bg5.jpg") {
        document.getElementById("logout").style.backgroundImage = "url('bg5.jpg')";
        document.getElementById("room_name").style.borderImage = "url('bg5.jpg') 30 stretch";
        document.getElementById("room").style.backgroundImage = "url('bg5.jpg')";
    }
    if (background_img == "bg6.jpg") {
        document.getElementById("logout").style.backgroundImage = "url('bg6.jpg')";
        document.getElementById("room_name").style.borderImage = "url('bg6.jpg') 30 stretch";
        document.getElementById("room").style.backgroundImage = "url('bg6.jpg')";
    }
    if (background_img == "bg7.jpg") {
        document.getElementById("logout").style.backgroundImage = "url('bg7.jpg')";
        document.getElementById("room_name").style.borderImage = "url('bg7.jpg') 30 stretch";
        document.getElementById("room").style.backgroundImage = "url('bg7.jpg')";
    }
    if (background_img == "bg8.jpg") {
        document.getElementById("logout").style.backgroundImage = "url('bg8.jpg')";
        document.getElementById("room_name").style.borderImage = "url('bg8.jpg') 30 stretch";
        document.getElementById("room").style.backgroundImage = "url('bg8.jpg')";
    }
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                
                console.log("Room Name: "+Room_names);

                row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
                document.getElementById("output").innerHTML += row;
                      });
    });
}
getData();


function add_room() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room name", room_name);

    window.location = "page.html";
}

function redirectToRoomName(name){
    console.log(name);

    localStorage.setItem("room name", name);
    window.location="page.html";
}

function logout(){
    localStorage.removeItem("User name");
    localStorage.removeItem("room name");

    window.location= "login.html";
}
