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

  function change(){
    background_img = localStorage.getItem("background");

    if (background_img == "bg1.jpg") {
        document.getElementById("logout").style.backgroundImage = "url('bg1.jpg')";
        document.getElementById("msg").style.borderImage = "url('bg1.jpg') 30 stretch";
        document.getElementById("send").style.backgroundImage = "url('bg1.jpg')";
    }
    if (background_img == "bg2.jpg") {
        document.getElementById("logout").style.backgroundImage = "url('bg2.jpg')";
        document.getElementById("msg").style.borderImage = "url('bg2.jpg') 30 stretch";
        document.getElementById("send").style.backgroundImage = "url('bg2.jpg')";
    }
    if (background_img == "bg3.jpg") {
        document.getElementById("logout").style.backgroundImage = "url('bg3.jpg')";
        document.getElementById("msg").style.borderImage = "url('bg3.jpg') 30 stretch";
        document.getElementById("send").style.backgroundImage = "url('bg3.jpg')";
    }
    if (background_img == "bg4.jpg") {
        document.getElementById("logout").style.backgroundImage = "url('bg4.jpg')";
        document.getElementById("msg").style.borderImage = "url('bg4.jpg') 30 stretch";
        document.getElementById("send").style.backgroundImage = "url('bg4.jpg')";
    }
    if (background_img == "bg5.jpg") {
        document.getElementById("logout").style.backgroundImage = "url('bg5.jpg')";
        document.getElementById("msg").style.borderImage = "url('bg5.jpg') 30 stretch";
        document.getElementById("send").style.backgroundImage = "url('bg5.jpg')";
    }
    if (background_img == "bg6.jpg") {
        document.getElementById("logout").style.backgroundImage = "url('bg6.jpg')";
        document.getElementById("msg").style.borderImage = "url('bg6.jpg') 30 stretch";
        document.getElementById("send").style.backgroundImage = "url('bg6.jpg')";
    }
    if (background_img == "bg7.jpg") {
        document.getElementById("logout").style.backgroundImage = "url('bg7.jpg')";
        document.getElementById("msg").style.borderImage = "url('bg7.jpg') 30 stretch";
        document.getElementById("send").style.backgroundImage = "url('bg7.jpg')";
    }
    if (background_img == "bg8.jpg") {
        document.getElementById("logout").style.backgroundImage = "url('bg8.jpg')";
        document.getElementById("msg").style.borderImage = "url('bg8.jpg') 30 stretch";
        document.getElementById("send").style.backgroundImage = "url('bg8.jpg')";
    }
}
  user_name = localStorage.getItem("User name");
  room_name = localStorage.getItem("room name");
  
  function send() {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name: user_name,
              message: msg,
              like: 0
        });
        document.getElementById("msg").value = "";
  }
  
  function getData() {
        firebase.database().ref("/" + room_name).on('value', function (snapshot) {
              document.getElementById("output").innerHTML = "";
              snapshot.forEach(function (childSnapshot) {
                    childKey = childSnapshot.key;
                    childData = childSnapshot.val();
                    if (childKey != "purpose") {
                          firebase_message_id = childKey;
                          message_data = childData;
                          //Start code
                          console.log(firebase_message_id);
                          console.log(message_data);
  
                          name = message_data['name'];
                          message = message_data['message'];
                          like = message_data['like'];
  
                          name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'> </h4>";
                          message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                          like_button = "<button class='btn btn-warning' id='" + firebase_message_id + "' value='" + like + "' onclick='updateLike(this.id)'>";
                          span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:" + like + "</span> </button> <hr>";
  
                          row = name_with_tag + message_with_tag + like_button + span_with_tag;
                          document.getElementById("output").innerHTML += row;
                          //End code
                    }
              });
        });
  }
  getData();
  
  function updateLike(message_id) {
        console.log("Click on the like button" + message_id);
        button_id = message_id;
  
        likes = document.getElementById(button_id).value;
  
        updated_likes = Number(likes) + 1;
        console.log(updated_likes);
  
        firebase.database().ref(room_name).child(message_id).update({
              like: updated_likes
        });
  }
  
  function log_out() {
        localStorage.removeItem("User name");
        localStorage.removeItem("room name");
  
        window.location.replace("login.html");
  }