/*но данные в Google Analytics не доходят?*/
/*
причина по которой данные не приходят 
в том что в этом коде нет функцыонала для этого

код для передачи параметров в Google Analytics (по прмеру Client ID) см. exempl 2 

*/

/*код в задачи*/

function(){
        return 
        function(tracker){

            if("undefined"===typeof tracker.get("BigQueryStreaming")){
                var f=tracker.get("sendHitTask"),

                    h=function(){function d(c)

                {
                var a=!1;
                try{document.createElement("img").src=e(!0)+"?"+c,a=!0}catch(k){}return a}

        function e(c){
            var a="https://test.optimozg.com/bq/bq-test.php";
            c||(a+="?tid="+encodeURIComponent(tracker.get("trackingId")));
            return a
        }

        return{
            send:function(c){
                var a;if(!(a=2036>=c.length&&d(c))){a=!1;
                    try{a=navigator.sendBeacon&&navigator.sendBeacon(e(),c)}catch(g){}}

        if(!a){a=!1;
            var b;
            try{window.XMLHttpRequest&&"withCredentials" in(b=new XMLHttpRequest)&&(b.open("POST",e(),!0),b.setRequestHeader("Content-Type","text/plain"),b.send(c),a=!0)}catch(g){}}

        return a||d(c)}}}();

        tracker.set("sendHitTask",function(d){h.send(d.get("hitPayload"));

        tracker.set("BigQueryStreaming",!0)})}}
}
   /*__exempl__*/

function() {
return function(tracker){

if("undefined"===typeof tracker.get("OWOXBIStreaming")){
    tracker.set("dimension2",tracker.get("clientId")); 
    
    var f=tracker.get("sendHitTask"),
    
    h=function(){function d(c){
        
        vara=!1;
        
        try{document.createElement("img").src=e(!0)+"?"+c,a=!0}catch(k){}return a}function e(c)
{
    var a="https://google-analytics.bi.owox.com/"+encodeURIComponent(tracker.get("trackingId"));
    c||(a+="?tid="+encodeURIComponent(tracker.get("trackingId")));
    return a}
    return{send:function(c){vara;
        if(!(a=2036>=c.length&&d(c))){a=!1;
            try{a=navigator.sendBeacon&&navigator.sendBeacon(e(),
    c)}catch(g){}}
    if(!a){a=!1;var b;

    try{window.XMLHttpRequest&&"withCredentials"in(b=new
    XMLHttpRequest)&&(b.open("POST",e(),!0),b.setRequestHeader("Content-
    Type","text/plain"),b.send(c),a=!0)}catch(g){}}return a||d(c)}}}          
    ();tracker.set("sendHitTask",function(d)
    {f(d);h.send(d.get("hitPayload"));tracker.set("OWOXBIStreaming",!0)})}}
}