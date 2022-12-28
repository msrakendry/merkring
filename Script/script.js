

  /////------------------------------------start-dark-mode---------------------------------------------//////

  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  const currentTheme = localStorage.getItem('theme');
  
  if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
    
      if (currentTheme === 'dark') {
          toggleSwitch.checked = true;
      }
  }
  
  function switchTheme(e) {
      if (e.target.checked) {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
      }
      else {        document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
      }    
  }
  
  toggleSwitch.addEventListener('change', switchTheme, false);


  
 


  $(document).ready(function(){
    $("#checkbox").click(function(){

      $(".module.container.heading h1").toggleClass("whitero");
      $(".testrk1, .frSLIart1  ").toggleClass("backcolor");
      $(".product-grid span, .frSLIh2SET, .nutext1, .poH1 h1, h1, .frSLIdonBUTin, .FRSLIDtotalRAT,.FIslid, a, .excerpt  ").toggleClass("witeCOLOR");
      $(".fiSLIDp2  ").toggleClass("GREENCOLOR");
      $(".fiSLIDp1, .fiSLIDp3  ").toggleClass("priceCOLOR");
      $(".nextPORDUCarrT, .nextPORDUCarrv").toggleClass("ARRW ");
      $("a").toggleClass("witeCOLOR ");

      

    });
  });
  


  //

  //.nextPORDUCarrv   l-gridcol2


  
    /////------------------------------------end-dark-mode---------------------------------------------//////

$(document).ready(function(){
  $(".help_click_icon, .l-gridcol2").click(function(){
    $("#whole-wrapper-no-bg").css("display", "block");
    $("#frbigSHOW1sec, #module_10015246912950495049, .productSLIDE4, #prod-head-slider, #contSECBESINE, #widgetTOILET  ").css("display", "none");


  });
});



$(document).ready(function(){
  $(".frsliLI1").click(function(){
    $(".wrapper").css("display", "block");


    $("#frbigSHOW1sec, #module_10015246912950495049, .productSLIDE4, #prod-head-slider, #contSECBESINE, #widgetTOILET  ").css("display", "none");

  });
});
$(document).ready(function(){
  $(".contaTOW").click(function(){
    $(".ARTICLEseon").css("display", "block");

    $(".productSLIDE4, #module_10015246912950495049, #contSECk,  #frbigSHOW1sec,  #prod-head-slider  ").css("display", "none");

  });
});

$(document).ready(function(){
  $("#module_10015117829496828110").click(function(){
    $(".wrapperCHAIR").css("display", "block");

    $(".productSLIDE4, #module_10015246912950495049, #frbigSHOW1sec").css("display", "none");

  });
});





$(document).ready(function(){
  $("#module_10014590785155272420").click(function(){
    $(".wrapperCOLLECT").css("display", "block");

    $(".productSLIDE4, #module_10015246912950495049, #frbigSHOW1sec").css("display", "none");

  });
});

$(document).ready(function(){
  $("#module_10016089815038229573").click(function(){
    $(".wrapperCOLLECT").css("display", "block");

    $(".productSLIDE4, #module_10015246912950495049, #frbigSHOW1sec").css("display", "none");

  });
});



$(document).ready(function(){
  $(".slider-item").click(function(){
    $(".setCARholder").css("display", "block");

 
  });
});

$(document).ready(function(){
  $("#t0901country_dropd").click(function(){
    $(".eqAts").css("display", "block");
  });
});
////////////////////////////////////////////////////////////////////////////////////////////////

  

  
  













    /////-----------------------------start-search---------------------------------------//////

    $(document).ready(function(){
      /////------------start-search-------------//////
      var submitIcon = $('.searchbox-icon');
      var inputBox = $('.searchbox-input');
      var searchBox = $('.searchbox');
      var submitButton = $('.searchbox-submit');
      var isOpen = false;
      submitIcon.click(function(){
       if(isOpen == false){
        searchBox.addClass('searchbox-open');
        submitButton.css('visibility', 'visible')
        inputBox.focus();
        isOpen = true;
       } else {
        searchBox.removeClass('searchbox-open');
        inputBox.focusout();
        isOpen = false;
       }
      });
      
      function buttonUp(){
     var inputVal = $('.searchbox-input').val();
     inputVal = $.trim(inputVal).length;
     if( inputVal !== 0){
       //customize this line of code to show X
      //$('.searchbox-icon').css('display','none');
     } else {
      $('.searchbox-input').val('');
      $('.searchbox-icon').css('display','block');
     }
    }
      inputBox.keyup(buttonUp);
    
    });
          /////------------start-search-------------//////
    




  ///////////////////////////////////////////////////////start frbigSHOW1-////////////////////////////////////////////////////////

  let w = 0;
  function wrappfun() {
    const wbigslide = document.getElementsByClassName("joapiter");
    const bigshobut = document.getElementsByClassName("bigSHOWbut");
  
    for (let i = 0; i < wbigslide.length; i++) {
        wbigslide[i].style = "display:none";
    }
    for (let i = 0; i < bigshobut.length; i++) {
        bigshobut[i].className = bigshobut[i].className.replace(" activeBIG", "");
    }
  
    w++;
    if (w > wbigslide.length) {

      w = 1;
    }
  
    wbigslide[w - 1].style = "display:flex";
    bigshobut[w - 1].className += " activeBIG";
  
    setTimeout(wrappfun, 3000);
  }
  
  wrappfun();
  
  ///////////////////////////////////////////////////////end frist frbigSHOW1////////////////////////////////////////////////////////
  
  
  ///////////////////////////////////////////////////////start  bigger////////////////////////////////////////////////////////


let h = 0;

function poymer() {
  const frgmagj = document.getElementsByClassName("gallery-cell");
  const frsldebtu = document.getElementsByClassName("dotgo");

  for (let a = 0; a < frgmagj.length; a++) {
    frgmagj[a].style = "display:none";
  }
  for (let a = 0; a < frsldebtu.length; a++) {
    frsldebtu[a].className = frsldebtu[a].className.replace(" activeo", "");
  }

  h++;
  if (h > frgmagj.length) {
    h = 1;
  }

  frgmagj[h - 1].style = "display: block;   ";
  frsldebtu[h - 1].className += " activeo";

  setTimeout(poymer, 3000);
}

poymer();

  ///////////////////////////////////////////////////////end BIGGER////////////////////////////////////////////////////////
  


  ///////////////////////////////////////////////////////end BIGGER////////////////////////////////////////////////////////
  

  let sglideIng = 1;
  guwSlides(sglideIng);
  
  // Next/previous controls
  function plugoi(U) {
    guwSlides(sglideIng += U);
  }
  
  // Thumbnail image controls
  function currbikl(U) {
    guwSlides(sglideIng = U);
  }
  
  function guwSlides(U) {
    let d;
    let snmcdes = document.getElementsByClassName("gallery-cell");
    let djits = document.getElementsByClassName("dotgo");
    if (U > snmcdes.length) {sglideIng = 1}
    if (U < 1) {sglideIng = snmcdes.length}
    for (d = 0; d < snmcdes.length; d++) {
      snmcdes[d].style.display = "none";
    }
    for (d = 0; d < djits.length; d++) {
      djits[d].className = djits[d].className.replace(" activeo", "");
    }
    snmcdes[sglideIng-1].style.display = "block";
    djits[sglideIng-1].className += " activeo";
  }
  
  
  ///////////////////////////////////////////////////////end BIGGER////////////////////////////////////////////////////////

























  ///////////////////////////////////////////////////////start class="prodSh"///////////////////////////////////////////////////////

  let porshjsl = 1;
  showproj(porshjsl);
  // Next/previous controls
  function pluspro(e) {
    showproj(porshjsl += e);
  }
  // Thumbnail image controls
  function prodSlide(e) {
    showproj(porshjsl = e);
  }
  function showproj(e) {
    let k;
    let slidesp = document.getElementsByClassName("prFRsli1p");
    let dotsp = document.getElementsByClassName("dotFR1");
    if (e > slidesp.length) {porshjsl = 1}
    if (e < 1) {porshjsl = slidesp.length}
    for (k = 0; k < slidesp.length; k++) {
      slidesp[k].style.display = "none";
    }
    for (k = 0; k < dotsp.length; k++) {
      dotsp[k].className = dotsp[k].className.replace(" active", "");
    }
    slidesp[porshjsl-1].style.display = "block";
    dotsp[porshjsl-1].className += " active";
  }
  
  ///////////////////////////////////////////////////////end  class="prodSh"///////////////////////////////////////////////////////


 ///////////////////////444444//////start frist slide--images--/////444444///////////////////////////

 





























































  ///////////////////////////Start-scroll-the-button///////////////////////////
  // Get the button:
  let myScroll = document.getElementById("myBs");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40 ) {
      myScroll.style.display = "block";
    } else {
      myScroll.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
    // ---------------------------------End-the-scroll-button------------------------------//
    


////////////////////// start faq_content.slideToggle();///////////////////////////

  const faq_title = $(".faq-item_title");
  const faq_content = $(".faq-item_content");
  
  faq_title.click(function(){
    const this_title = $(this);
    const this_content = $(this).parent().find(faq_content);
    this_content.slideToggle("fast");
    
    faq_content.not(this_content).slideUp("fast");
  });
  
   ////////////////////// end faq_content.slideToggle();///////////////////////////


 //9999999999999999999999999999999999999999999999999999999999999999999999999//

 let slideIndext = 1;
 showSlidest(slideIndext);
 
 // Next/previous controls
 function plusSlidest(n) {
   showSlidest(slideIndext += n);
 }
 
 // Thumbnail image controls
 function currentSlidet(n) {
   showSlidest(slideIndext = n);
 }
 
 function showSlidest(n) {
   let i;
   let slidest = document.getElementsByClassName(" fixSHOW");
   let dots = document.getElementsByClassName("buttwrt");
   if (n > slidest.length) {slideIndext = 1}
   if (n < 1) {slideIndext = slidest.length}
   for (i = 0; i < slidest.length; i++) {
   slidest[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
   dots[i].className = dots[i].className.replace(" active", "");
   }
   slidest[slideIndext-1].style = "display: block; width:1350px;   ";
   dots[slideIndext-1].className += " active";
 }
 /////////////
 
 let t = 0;

 function frSHOW() {
   const SHOWjt = document.getElementsByClassName("fixSHOW");
   const fr_slide_btut = document.getElementsByClassName("buttwrt");
 
   for (let i = 0; i < SHOWjt.length; i++) {
     SHOWjt[i].style = "display:none";
   }
   for (let i = 0; i < fr_slide_btut.length; i++) {
     fr_slide_btut[i].className = fr_slide_btut[i].className.replace(" active", "");
   }
 
   t++;
   if (t > SHOWjt.length) {
     t = 1;
   }
 
   SHOWjt[t - 1].style = "display: block; width:1350px;   ";
   fr_slide_btut[t - 1].className += " active";
 
   setTimeout(frSHOW, 3000);
 }
 
 frSHOW();
  //9999999999999999999999999999999999999999999999999999999999999999999999999//
 
  




  /////////////////////////////start /newest//////////////////////////////////////

  let proShnew = 1;
  showarr(proShnew);
  
  // Next/previous controls
  function plusNEWARR(q) {
    showarr(proShnew += q);
  }
  
  // Thumbnail image controls
  function currentNEW(q) {
    showarr(proShnew = q);
  }
  
  function showarr(q) {
    let i;
    let slidene = document.getElementsByClassName("NEWjs");
    let newarrivai = document.getElementsByClassName("dot");
    if (q > slidene.length) {proShnew = 1}
    if (q < 1) {proShnew = slidene.length}
    for (i = 0; i < slidene.length; i++) {
        slidene[i].style.display = "none";
    }
    for (i = 0; i < newarrivai.length; i++) {
        newarrivai[i].className = newarrivai[i].className.replace(" active", "");
    }
    slidene[proShnew-1].style.display = "block";
    newarrivai[proShnew-1].className += " active";
  }
  
   
    /////////////////////////////end /newest//////////////////////////////////////
   












 
  ///////////////////////////////////////////////////////start class="wrapper"///////////////////////////////////////////////////////

  let n = 0;

  function fr_slide_j() {
    const fr_imag_j = document.getElementsByClassName("slickACTIV");
    const fr_slide_btu = document.getElementsByClassName("buttwr");
  
    for (let i = 0; i < fr_imag_j.length; i++) {
      fr_imag_j[i].style = "display:none";
    }
    for (let i = 0; i < fr_slide_btu.length; i++) {
      fr_slide_btu[i].className = fr_slide_btu[i].className.replace(" active", "");
    }
  
    n++;
    if (n > fr_imag_j.length) {
      n = 1;
    }
  
    fr_imag_j[n - 1].style = "display: block; width:1350px;   ";
    fr_slide_btu[n - 1].className += " active";
  
    setTimeout(fr_slide_j, 3000);
  }
  
  fr_slide_j();

  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName(" slider-item");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style = "display: block; width:1350px;   ";
    dots[slideIndex-1].className += " active";
  }
  //////////////////////////////////////
  
 
   ///////////////////////////////////////////////////////end class="wrapper"///////////////////////////////////////////////////////
 



   


      /////-----------------------------end-search---------------------------------------//////
    

  
  /* common////////////////////////////cookies///////////////////////////// fuctions */
  function el(selector) { return document.querySelector(selector) }
  function els(selector) { return document.querySelectorAll(selector) }
  function on(selector, event, action) { els(selector).forEach(e => e.addEventListener(event, action)) }
  function cookie(name) { 
    let c = document.cookie.split('; ').find(cookie => cookie && cookie.startsWith(name+'='))
    return c ? c.split('=')[1] : false; 
  }
  
  
  /* popup button hanler */
  on('.cookie-popup', 'click', () => {
    el('.cookie-popup').classList.add('cookie-popup--accepted');
    document.cookie = `cookie-accepted=true`
  });
  
  /* popup init hanler */
  if (cookie('cookie-accepted') !== "true") {
    el('.cookie-popup').classList.add('cookie-popup--not-accepted');
  }
  
  
  
  /* page buttons handlers */
  
  function _reset() {
    document.cookie = 'cookie-accepted=false'; 
    document.location.reload();
  }
  
  function _switchMode(cssClass) {
    el('.cookie-popup').classList.toggle(cssClass);
  }
  /* common///////////////////////////end/cookies///////////////////////////// fuctions */
  












  
 //9999999999999999999999999999999999999999999999999999999999999999999999999//

 



 