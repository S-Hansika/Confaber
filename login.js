function change(){
    array_bg= ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg", "bg6.jpg", "bg7.jpg", "bg8.jpg"];
    random_num= Math.floor(Math.random()* 8);
    background_img= array_bg[random_num];

    document.getElementById("bg_img").src=background_img;

    if (background_img == "bg1.jpg"){
        document.getElementById("login").style.backgroundImage="url('bg1.jpg')";
        document.getElementById("user_name").style.borderImage="url('bg1.jpg') 30 stretch";
    }    
    if (background_img == "bg2.jpg"){
        document.getElementById("login").style.backgroundImage="url('bg2.jpg')";
        document.getElementById("user_name").style.borderImage="url('bg2.jpg') 30 stretch";
    }    
    if (background_img == "bg3.jpg"){
        document.getElementById("login").style.backgroundImage="url('bg3.jpg')";
        document.getElementById("user_name").style.borderImage="url('bg3.jpg') 30 stretch";
    }   
    if (background_img == "bg4.jpg"){
        document.getElementById("login").style.backgroundImage="url('bg4.jpg')";
        document.getElementById("user_name").style.borderImage="url('bg4.jpg') 30 stretch";
    }   
    if (background_img == "bg5.jpg"){
        document.getElementById("login").style.backgroundImage="url('bg5.jpg')";
        document.getElementById("user_name").style.borderImage="url('bg5.jpg') 30 stretch";
    }   
    if (background_img == "bg6.jpg"){
        document.getElementById("login").style.backgroundImage="url('bg6.jpg')";
        document.getElementById("user_name").style.borderImage="url('bg6.jpg') 30 stretch";
    }   
    if (background_img == "bg7.jpg"){
        document.getElementById("login").style.backgroundImage="url('bg7.jpg')";
        document.getElementById("user_name").style.borderImage="url('bg7.jpg') 30 stretch";
    }   
    if (background_img == "bg8.jpg"){
        document.getElementById("login").style.backgroundImage="url('bg8.jpg')";
        document.getElementById("user_name").style.borderImage="url('bg8.jpg') 30 stretch";
    }  
}

function add_user(){
    user_name= document.getElementById("user_name").value ;
    localStorage.setItem("User Name", user_name);
    localStorage.setItem("background", background_img); 
    
    window.location="room.html";
}