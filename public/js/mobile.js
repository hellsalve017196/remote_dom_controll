function load() {

    var socket = io.connect();

    var res = document.getElementById("res");

    if(window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation',function(eventData) {

            var tiltGamma = Math.round(eventData.gamma);
            var tiltBeta = Math.round(eventData.beta);

            var dir = Math.round(eventData.alpha);

            var text = JSON.stringify({'Gamma' : tiltGamma,'beta':tiltBeta,'dir' :dir});;

            socket.emit('get_data',{mobile : text},function(data) {
            });

            res.innerHTML = text;
        },false)
    }
    else {
        alert("device doesn;t have Orientation Api");
    }





}