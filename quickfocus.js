// function defer(method) {
//     if (window.qfjq && qfjq) {
//         setTimeout(function() { method() }, 250);
//     } else {
//         setTimeout(function() { defer(method) }, 50);
//     }
// }

// defer(function () {
    // qfjq(document).ready(function(){
        
        var sc1 = document.createElement("script");
        sc1.setAttribute("src", chrome.runtime.getURL('jqueryviewport.js'));
        sc1.setAttribute("type", "text/javascript");
        document.head.appendChild(sc1);


        // var sc1 = document.createElement("script");
        // sc1.setAttribute("src", chrome.runtime.getURL('withinviewport.js'));
        // sc1.setAttribute("type", "text/javascript");
        // document.head.appendChild(sc1);

        // var sc1 = document.createElement("script");
        // sc1.setAttribute("src", chrome.runtime.getURL('jquery.withinviewport.js'));
        // sc1.setAttribute("type", "text/javascript");
        // document.head.appendChild(sc1);


        var sc1 = document.createElement("script");
        sc1.setAttribute("src", chrome.runtime.getURL('embedded.js'));
        sc1.setAttribute("type", "text/javascript");
        document.head.appendChild(sc1);
 

    // });       
// });
