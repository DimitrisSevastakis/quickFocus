function qfdefer(method) {
    if (window.qfjq && qfjq) {
        setTimeout(function() { method() }, 250);
    } else {
        setTimeout(function() { qfdefer(method) }, 50);
    }
}

var quickFocusListening = false;
var quickFocusDictionary = {};

qfdefer(function () {
    qfjq( "body" ).keydown(function( event ) {
        if(quickFocusListening){
            if(event.which == 13){
                var selected = Number(qfjq('#quickFocusInput').val());
                var selected_element = quickFocusDictionary[selected]; 
                selected_element.focus();
                qfjq('.quickFocusLabel').remove();
                qfjq('#quickFocusOverlay').remove();
                qfjq('#quickFocusInput').remove();
                quickFocusListening = false;
                console.log(event.ctrlKey);
                if(!event.ctrlKey){
                    event.preventDefault();       
                }
                else{
                    console.log('not entering');

                }
            }
            else if (event.which == 27 || (event.which == 219 && event.ctrlKey== true)) {
                qfjq('.quickFocusLabel').remove();
                qfjq('#quickFocusOverlay').remove();
                qfjq('#quickFocusInput').remove();
                quickFocusListening = false;
            }
            
        }
        else if (event.which == 219 && event.ctrlKey== true){
            showOverlay();
            quickFocusListening = true;
            event.preventDefault();       
        }            
    });

});       

function showOverlay(){
    var inputs = qfjq('input:enabled:visible').withinviewport();
    var buttons = qfjq('button:enabled:visible').withinviewport();
    var links = qfjq('a:visible').withinviewport();
    quickFocusDictionary = {};
    all_elements = buttons.add(links).add(inputs);

    // sorted_elements = all_elements.sort(function(a,b) {
    //     return qfjq(a).offset().top > qfjq(b).offset().top;
    // });

    qfjq('body').append('<div id="quickFocusOverlay"/>');
    qfjq('body').append('<input id="quickFocusInput"/>');

    all_elements.each(function(index){
        var offset = qfjq(this).offset();
        quickFocusDictionary[index] = qfjq(this);
        qfjq('body').append('<div class="quickFocusLabel" style="top:'+offset.top+'px; left:'+offset.left+'px">'+index+'</div>');
    });
    qfjq('#quickFocusInput').focus();
}
