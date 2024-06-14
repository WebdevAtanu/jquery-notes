$(document).ready(function(){
console.log("Your document is ready");

// single click function----------
// $('p').click(function(){
// console.log("Paragraph clicked");
// $('p').hide(); //it will hide all paragraph items
// $(this).hide(); //only hide which is clicked
// $("#pid").hide();//only hide the id item 
// $(".pclass").hide();//only hide the class item
// });

//double click function-----------
// $('p').dblclick(function(){
// $("#pid").hide();
// });

//right click function-----------
// $('p').contextmenu(function(){
// $("#pid").hide();
// });

//mouse enter function-----------
// $('p').mouseenter(function(){
// $("#pid").hide();
// });

//mouse leave function-----------
// $('p').mouseleave(function(){
// $("#pid").hide();
// });

//multiple mouse handlers-----------
// $('p').on({
// click: function(){
// console.log("mouse clicked on ",this);
// },
// mouseenter: function(){
// console.log("mouse entered on paragraph");
// }})

// hide and show function-----------
// $('#btn').click(function(){
// $('#contain').hide(1500);
// }
// )
// $('#contain').hide(1000);
// $('#contain').show(1000);

// show and hide both works-----------
// $('#btn').click(function(){
// $('#contain').toggle(1000);
// }
// )

// fade function-----------
// $('#btn').click(function(){
// $('#contain').fadeOut(1000);
// }
// )
// $('#btn').click(function(){
// $('#contain').fadeToggle(500);
// }
// )
// $('#btn').click(function(){
// $('#contain').fadeTo(1000,0.5);
// }
// )

// slide function-----------
// $('#btn').click(function(){
// $('#contain').slideUp(500);
// }
// )
$('#btn').click(function(){
$('#contain').slideToggle(5000,function(){
console.log("Sliding complete");
});
})

// animation function-----------
// $('#contain').hover(function(){
// $('#contain').animate({opacity:0.5,width:'400px',fontSize:'20px'},500);
$("#stopbtn").click(()=>{
	$('#contain').stop(true);//stop function used to immediate stop the animation.
})

// }
// )
// $('#contain').mouseleave(function(){
// $('#contain').animate({opacity:1,width:'100%'},500);
// })

//multiple animate queue-----------
// $('#btn').click(function(){
// $('#contain').animate({opacity:0.2},200);
// $('#contain').animate({opacity:0.7},500);
// $('#contain').animate({width:'70%'},800);
// })

// to get and set the text from div-----------
// let txt=$('#contain').text();
// console.log(txt);
// $('#contain').text("this is set by set function");

//to set value in a field-----------
// $('#inp').val("this is set by jquery");
// $('#ta').val("this is set by jquery");
// $('#contain').empty();

//add or remove class-----------
// $('#btn').click(function(){
// $('#contain').addClass('mycls');
// })
$('#btn').click(function(){
$('#contain').toggleClass('mycls');
})

//ajax in jquery-----------
// $('#btn').click(function(){
// $.get('data.txt',function(data,status){alert(data);alert(status);})
// })

//changing css property-----------
// $("#list").css("border","2px solid blue");
$("#list li").css("border","2px solid blue");

// keypress function-----------
$("body").keypress(function(){
	$("#key").css("background","yellow");
})
$("body").keyup(function(){
	$("#key").css("background","skyblue");
})

// window events
$(window).scroll(function(){
	console.log("window is scrolling");
})
$(window).resize(function(){
	console.log("window is resizing");
})

// get methods
// let get=$("#list").html();//it will print the html.
// let get=$("#list").text();//only print the inner text.
let get=$("#list").attr('id');//it will print the id of the element.
console.log(get);

// getting value of textfield on submit.
$("#myform").submit(()=>{
	let name=$("#iname").val();
	alert("Hello "+name);
})

// append will add an item in the end and prepend will add a item in the beginning.
$("#append").click(()=>{
	$("ol").append("<li>append clicked</li>");
})
$("#prepend").click(()=>{
	$("ol").prepend("<li>prepend clicked</li>");
})

// after and before function.
$("#afterbtn").click(()=>{
	$("#ab").after("<p>This comes from after function</p>");
})
$("#beforebtn").click(()=>{
	$("#ab").before("<p>This comes from before function</p>");
})

// empty and remove function
$("#empty").click(()=>{
	$("#contain").empty();
})
$("#remove").click(()=>{
	$("#contain").remove();
})

// clone method
$("#clone").click(()=>{
	$("#box1 h3").clone().prependTo("#box2");//prependTo function works as prepend.
})
$("#clone").click(()=>{
	$("#box1 p").clone().appendTo("#box2");//appendTo function works as append.
})

// replace function
$("#replacebtn").click(()=>{
	$("#replace").replaceWith("<p>this is the replacement</p>");
})

// wrap and unwrap function
$("#wrapbtn").click(()=>{
	$("#wrap").wrap("<div id='wrapdiv'></div>");
})
$("#unwrapbtn").click(()=>{
	$("#wrap").unwrap();
})

// each function
$("#list li").each(()=>{
	console.log($(this).text());//it will get the all li element text in the console.
})

// mouse position function
$("body").mousemove((event)=>{
	$("#pagex").html("pageX: "+ event.pageX);
	$("#pagey").html("pageY: "+ event.pageY);
})

// mouse event type function
$("body").on("click dblclick mouseover mouseout",(event)=>{
	// console.log("event: "+ event.type);
	$("#event").html("event: "+ event.type);
})

// scroll function
$("#scrollbtn").click(()=>{
	$(window).scrollTop(0);
	// $(window).scrollLeft(50);
})

// has class or id function
$(document).has("#contain").css("background-color","orange");
})//end of ready
