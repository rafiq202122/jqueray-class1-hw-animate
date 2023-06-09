$(function (){


let hideBtn = $('.hide')
let showBtn = $('.show')
let toggleBtn = $('.toggle')
let animateBtn = $('.animate')

hideBtn.click( function (){
    //$('.box').hide (1000)
    //$('.box').fadeOut (1000)
     $('.box') .slideUp (1000)
})

showBtn.click( function (){
   // $('.box').show (1000)
    //$('.box').fadeIn (1000)
    $('.box').slideDown (1000)
})


toggleBtn.click(function (){
   // $('.box').Toggle(1000)
   // $('.box').fadeToggle(1000)
    $('.box') .delay (1000).slideToggle(1000)
})




animateBtn.click( function (){

    //$('.box').animate({
       
       // width:"500px",
     
   // },500);

   // $('.box').animate({
       
     //   height:"500px",
      //  width:"200px",
       

       
     
   // },500);

   // $('.box').animate({
       
      //  borderRadius: "50%",
     
   // },500);


   // $('.box').animate({
       
       
     //   marginLeft:"400px",
     
    //},500);


  //* another animate



  
    $('.box').animate({
       
     width:"800px",
     
    },500);

   $('.box').animate({
       
     height:"800px",
   
       

       
     
   },500);

    $('.box').animate({
       
    borderRadius: "50%",
     
    },500);


    $('.box').animate({
       
       
      height:"500px",
     
    },500);


    $('.box').animate({
       
       
        width:"500px",
       
      },500);






})





})


