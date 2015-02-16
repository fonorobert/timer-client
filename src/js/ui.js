var t = new Timer();
var d = new Display();
t.build();
d.build();

$('#fullscreen').click(function(){
    if (screenfull.enabled) {
        screenfull.request();
    }
    $('#fullscreen').hide();
});