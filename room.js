var firebaseConfig = {
    apiKey: "AIzaSyAXYoVRcz8OB9eryG9o9sxZhmdGr8_KHQM",
    authDomain: "confaber-c9c5a.firebaseapp.com",
    databaseURL: "https://confaber-c9c5a-default-rtdb.firebaseio.com",
    projectId: "confaber-c9c5a",
    storageBucket: "confaber-c9c5a.appspot.com",
    messagingSenderId: "767969638558",
    appId: "1:767969638558:web:a3ed031973349b3767e38f",
    measurementId: "G-XLTPW1C5B9"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function change(){
    background_img=localStorage.getItem("background");
    user_name= localStorage.getItem("User name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
    if (background_img == "bg1.jpg"){
        document.getElementById("logout").style.backgroundImage="url('bg1.jpg')";
        document.getElementById("room_name").style.borderImage="url('bg1.jpg') 30 stretch";
        document.getElementById("room").style.backgroundImage="url('bg1.jpg')";
    }    
    if (background_img == "bg2.jpg"){
        document.getElementById("logout").style.backgroundImage="url('bg2.jpg')";
        document.getElementById("room_name").style.borderImage="url('bg2.jpg') 30 stretch";
        document.getElementById("room").style.backgroundImage="url('bg2.jpg')";
    }    
    if (background_img == "bg3.jpg"){
        document.getElementById("logout").style.backgroundImage="url('bg3.jpg')";
        document.getElementById("room_name").style.borderImage="url('bg3.jpg') 30 stretch";
        document.getElementById("room").style.backgroundImage="url('bg3.jpg')";
    }   
    if (background_img == "bg4.jpg"){
        document.getElementById("logout").style.backgroundImage="url('bg4.jpg')";
        document.getElementById("room_name").style.borderImage="url('bg4.jpg') 30 stretch";
        document.getElementById("room").style.backgroundImage="url('bg4.jpg')";
    }   
    if (background_img == "bg5.jpg"){
        document.getElementById("logout").style.backgroundImage="url('bg5.jpg')";
        document.getElementById("room_name").style.borderImage="url('bg5.jpg') 30 stretch";
        document.getElementById("room").style.backgroundImage="url('bg5.jpg')";
    }   
    if (background_img == "bg6.jpg"){
        document.getElementById("logout").style.backgroundImage="url('bg6.jpg')";
        document.getElementById("room_name").style.borderImage="url('bg6.jpg') 30 stretch";
        document.getElementById("room").style.backgroundImage="url('bg6.jpg')";
    }   
    if (background_img == "bg7.jpg"){
        document.getElementById("logout").style.backgroundImage="url('bg7.jpg')";
        document.getElementById("room_name").style.borderImage="url('bg7.jpg') 30 stretch";
        document.getElementById("room").style.backgroundImage="url('bg7.jpg')";
    }   
    if (background_img == "bg8.jpg"){
        document.getElementById("logout").style.backgroundImage="url('bg8.jpg')";
        document.getElementById("room_name").style.borderImage="url('bg8.jpg') 30 stretch";
        document.getElementById("room").style.backgroundImage="url('bg8.jpg')";
    }  
}