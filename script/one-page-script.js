$(document).ready(function(){
    //console.log($("nav"));

    $("nav a").click(function(event){
        //console.log("fatto click");
        event.preventDefault();
        //console.log($(this));
        //console.log($(this.hash));
       var dist=$(this.hash).offset().top;

        //console.log(dist);

        //$("html,body").scrollTop(dist);
        $("html,body").animate({scrollTop:dist},1500);

    });//chiudo .click


    $("nav .chiudi").click(function(){
        //console.log("catturato!");
        $("nav").fadeOut(1500);
        $("nav ul").animate({top:"80%"},1500);
    });//chiudo .click


    $("nav a").click(function(){
            $("nav").fadeOut(1500);
            $("nav ul").animate({top:"80%"},1500);
    });//chiudo .click


    $("body .apri").click(function(){
        $("nav").fadeIn(1500);
        $("nav ul").css("top","80%");
        $("nav ul").animate({top:"50%"},1500);
    });//chiudo .click

    /*

    dare più istruzioni ad .animate e .css

    $("nav ul").css({"top":"70%","font-size":"1em"});
    $("nav ul").animate({top:"50%",fontSize:"2em"},3000);


    concatenare eventi con stesso selettore

    $("nav ul")
            .css({"top":"70%","font-size":"1em"})
            .animate({top:"50%",fontSize:"1.5em"},1500);


    IMPORTANTE!! una funzione la posso dichiarare e poi richiamare. posso metterla in qualsiasi punto del codice

    function chiudiilmenu()
    {
        $("nav").fadeOut(1500);
        $("nav ul").animate({top:"80%"},1500);
    }

    */



    var videoJQ=$("#bici")
    //var mio_video=$("#bici");

    var videoJS=document.getElementById("bici")
    //alert(videoJS);

    $("#servizi h3 span").mouseenter(function(){
        //console.log("enter")
        videoJS.pause();
    });//chiudo mouseenter


    $("#servizi h3 span").mouseout(function(){
        //console.log("out")
        videoJS.play();
    });//chiudo mouseout


    var posizioneVIDEO=parseInt($("#bici").offset().top);
        //console.log(posizioneVIDEO);



    $(document).scroll(function(){
        //console.log("sto scrollando")
    var posizioneUSER=$(document).scrollTop();
    var differenza= Math.abs(posizioneVIDEO-posizioneUSER);
        //console.log(differenza);
    //altezza della viewport: $(window).height();
    var playvideo=parseInt($(window).height()-100);
        //console.log(playvideo)

        if(differenza<playvideo)
        {
            videoJS.play();
        }

        else
        {
            videoJS.pause();
        }

    });// chiudo .scroll












});//fine .ready
