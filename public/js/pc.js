function load() {

    var socket = io.connect()
    var image = document.getElementById("image");

    image.style.left = "0px";

    var current_pos = function() {
        return image.getBoundingClientRect();
    }

    socket.on('send_data',function(data) {

        data = JSON.parse(data);

        tiltLR = data.Gamma;
        tiltFB = data.beta;
        dir = data.dir;

        // moving
        Top = image.offsetTop;
        left = image.offsetLeft;

        increment = 10;

        if(tiltLR > 0) {
           image.style.left = (left + increment) +"px";
        }
        else if(tiltLR < 0) {
            image.style.left = (left - increment) +"px";
        }
        if(tiltFB > 0) {
            image.style.top = (Top + increment) + "px";
        }
        else if(tiltFB < 0) {
            image.style.top = (Top - increment) + "px";
        }

        // moving

    })

}