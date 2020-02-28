// $('li a').click(function(){
//     $('li a').removeClass("active");
//     $(this).addClass("active");
// });


 jQuery(function() {
    var pgurl = window.location.href.substr(window.location.href
      .lastIndexOf("/")+1);
    jQuery(" ul li a").each(function(){
      if(jQuery(this).attr("href") == pgurl || jQuery(this).attr("href") == '' )
        jQuery(this).addClass("active");
    })
  });
