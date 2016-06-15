$( document ).ready(function() {
	
	
	
	
	
	$('#cv_btn').click(function(){
	
	
	   /*  console.log(scopesl);
	     for( var p = 0; p < scopesl.length; p++){
			 var resarray = ("<li>" + scopesl[p] + "</li>");
			 console.log(resarray);
		}*/
	
	
			function rgb2hex(orig){
			 var rgb = orig.replace(/\s/g,'').match(/^rgba?\((\d+),(\d+),(\d+)/i);
			 return (rgb && rgb.length === 4) ? "#" +
			  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
			  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
			  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : orig;
			}
				
				
				
		   var p1bgcolor = ( rgb2hex($('#p1').css("background-color")) );
		   console.log(p1bgcolor);
           var p2bgcolor = ( rgb2hex($('#p2').css("background-color")) );
		   console.log(p2bgcolor);
		   var p3bgcolor = ( rgb2hex($('#p3').css("background-color")) );
		   var p4bgcolor = ( rgb2hex($('#p4').css("background-color")) );
				
				
		//box1
		    var con = $( "#ib1" ).contents().find( "div" );
			var hd1 = con.prevObject[1].innerText;
			var pr1 = con.prevObject[3].children[1].innerText;
			var tcon = con.prevObject[3].textContent;
			var in1 = con.prevObject[3].children[2].innerText;
			var dt1 = con.prevObject[5].innerText;
		//box2
		    var con2 = $( "#ib2" ).contents().find( "div" );
			var hd2 = con2.prevObject[1].innerText;
			var pr2 = con2.prevObject[3].children[1].innerText;
			var tcon2 = con2.prevObject[3].textContent;
			var in2 = con2.prevObject[3].children[2].innerText;
			var dt2 = con2.prevObject[5].innerText;
		//box3
		    var con3 = $( "#ib3" ).contents().find( "div" );
			var hd3 = con3.prevObject[1].innerText;
			var pr3 = con3.prevObject[3].children[1].innerText;
			var tcon3 = con3.prevObject[3].textContent;
			var in3 = con3.prevObject[3].children[2].innerText;
			var dt3 = con3.prevObject[5].innerText;
		//box4
		    var con4 = $( "#ib4" ).contents().find( "div" );
			var hd4 = con4.prevObject[1].innerText;
			var pr4 = con4.prevObject[3].children[1].innerText;
			var tcon4 = con4.prevObject[3].textContent;
			var in4 = con4.prevObject[3].children[2].innerText;
			var dt4 = con4.prevObject[5].innerText;
		
		
		
	 var $imgdl = $("<div class='price_tbl'><div  class='inner_box' id='ib1'><div class='heading' id='h1'><span>"+ hd1 +"</span></div><div class='pricing1' id='p1'><img class='crcl'  src='circ.png' /><p class='price'>"+ pr1 +"</p><div class='info1' id='i1'><span>"+ in1 +"</span></div></div><div class='boxes' id='x1'><ul><li> "+ dt1 +"</li></ul></div></div><div  class='inner_box' id='ib2'><div class='heading' id='h2'><span>"+ hd2 +"</span></div><div class='pricing1' id='p2'><img class='crcl'  src='circ.png' /><p class='price'>"+ pr2 +"</p><div class='info1' id='i2'><span>"+ in2 +"</span></div></div><div class='boxes' id='x2'><ul><li> "+ dt2 +"</li></ul></div></div><div  class='inner_box' id='ib3'><div class='heading' id='h3'><span>"+ hd3 +"</span></div><div class='pricing1' id='p3'><img class='crcl'  src='circ.png' /><p class='price'>"+ pr3 +"</p><div class='info1' id='i3'><span>"+ in3 +"</span></div></div><div class='boxes' id='x3'><ul><li> "+ dt3 +"</li></ul></div></div><div  class='inner_box' id='ib4'><div class='heading' id='h4'><span>"+ hd4 +"</span></div><div class='pricing1' id='p4'><img class='crcl'  src='circ.png' /><p class='price'>"+ pr4 +"</p><div class='info1' id='i4'><span>"+ in4 +"</span></div></div><div class='boxes' id='x4'><ul><li> "+ dt4 +"</li></ul></div></div>");
		   
		   
			
			
	
	   $("#offscrn").append($imgdl);
	
	
		/*$('#infoModal').show();
					 $(".info-modal-body").append($infomodal);
					  $("#infoModal").addClass("bdy-ground");
				});
					
				$('#clsebtn').click(function(){
					   $('#infoModal').hide();
					   $('.info-modal-body .info-modal').remove();
					    $("#infoModal").removeClass("bdy-ground");*/
	
	
var myOffscreenEl = document.getElementById("offscrn"),
    useWidth      = myOffscreenEl.style.width,
    useHeight     = myOffscreenEl.style.height;

// position it relatively, just below the fold..
myOffscreenEl.style.position = 'relative';
myOffscreenEl.style.top = window.innerHeight + 'px';
myOffscreenEl.style.left = 0;

html2canvas(myOffscreenEl, {
    width: useWidth,
    height: useHeight,
    onrendered: function(canvas) {
	
	 var image = new Image();
					  image.src = canvas.toDataURL("image/png");
					  //console.log(image.src);
					  var $newref = $('<a id="newcan" href=' + image.src + ' download /> ');
					   $('#imagedl').append($newref);

       // restore the old offscreen position
     // myOffscreenEl.style.position = 'absolute';
     // myOffscreenEl.style.top = 0;
      //myOffscreenEl.style.left = "-9999px"

    }

});
		
				
			});	
				
				
});