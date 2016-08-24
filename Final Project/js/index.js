 $(".karya div").slice(10).hide();

 var mincount = 10;
 var maxcount = 20;


 $(window).scroll(function () {
     if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
         $(".karya div").slice(mincount, maxcount).slideDown(1500);

         mincount = mincount + 10;
         maxcount = maxcount + 10

     }
 });