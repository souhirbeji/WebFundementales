console.log("page loaded...");

var myVideo = document.querySelector("#myvideo");// we selected the video by its id its where we are going to appy the code 

myVideo.addEventListener("mouseover", function() { //event listener to the myVideo element. Event listeners are used to listen for specific events on an element and execute a function when the event occurs.
    myVideo.play();
    myVideo.muted = false; // Unmute the video
});

myVideo.addEventListener("mouseout", function() {
    myVideo.pause();
    myVideo.muted = true; // Mute the video
});
