// //We can use the jQuery as jQuery('STATEMENT)
// $(document).ready(function(){      //$(document).ready(callback)- help in determining wheather the document is ready to excecute the jquery
// $('h1').css('color','white');

// console.log($('h1').css('color'));
// console.log($("button").css('font-size',"5rem"));
// console.log($("button").css('font-size'));

// $('body').css('backgroundColor',"black")
// $('button').css('backgroundColor',"yellow")
// $('button').css('color',"blue")

//Adding of classes
// $('h1').addClass('big-title');
// $('h1').removeClass('big-title');
// $('h1').addClass('big-title margin-50'); //for adding multiple classes
// $('h1').hasClass('margin-50'); return true if it is present
// })

//How to add text in innerHTMl using jquery
// $('h1').text("Bye I'm Going"); 
// $('button').text("Don't Click Me");
// $('button').html("<em><b>innerHTML<b></em>") //using innerHTML property
$(document).addClass('container');//added different div to html body

console.log($('img').attr("src"));
//for applying more than one design 
$("img").css({
    'height': '250px',
    'width': '250px' // You can set the desired width value here
  });

// $('a').attr('href',"https://www.yahoo.com"); //here we are changing the value of href

// console.log($('h1').attr('class')); return all the classes of h1

//Adding event listener to our jQuery 

// $('h1').click(function(){
//     $('h1').css({
//         'color': 'purple',
//         'font-weight':'bold',
//         'font-family': 'cursive'
//     })
// })
// $("button").on("click", function() {
//     alert("Button clicked!");
//   });

// This is how we do it in js
// for(var i=0;i<5;i++){
//     document.querySelectorAll('button')[i].addEventListener('click',function(){
//         document.querySelector('h1').style.color="cyan";
//     })
// }

// This is how we will be doing in jquery
// $("button").click(function(){
//     $('h1').css('color','red');
// })

// $('input').keypress(function(event){
//     console.log(event.key);
// })

// $('input').keypress(function(event){ 
//     $('h1').text(event.key) //this how we can manipulate h1 using input
// })

// $('h1').before('<button>New</button>') //how to add extra element using jquery
// $('h1').after('<button>New</button>')  //<h1>Hello<h1><b>button</b>
// $('h1').prepend('<button>New</button>') //just contnt ke aage <h1><b>button</b>Hello<h1>
// $('h1').append('<button>New</button>')


// We can use hide,show.fadein,fadeout,fadetoggle ,sildup,slidedown and toggle functions

// $('button').on('click',function(){
//     // $('h1').toggle();
//     $('h1').fadeToggle();

// })

// $('button').on('click',function(){
//     $('h1').animate({          //with animate we can only use numeric values like margins,padding,height etc
//         opacity : 0.5
//     });

// })
