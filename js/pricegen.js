


	var listing = "";
	var scopesl = "";
	var nameApp = angular.module('nameApp',[]);
	
	
	nameApp.controller('firstController' , function ($scope){
	$scope.names=['Sample'];
		 scopes1 = $scope.names.slice(0);
	$scope.heading = 'Normal';
    $scope.price = '$199';
	$scope.info= 'Design on a Budget';
	$scope.addName = function() {
	  $scope.names.push($scope.enteredName);
	  $scope.enteredName = '';
	  };
	  
	  $scope.removeName = function(name) {
	  var i = $scope.names.indexOf(name);
      $scope.names.splice(i, 1);
	  };
	  });
	  
	  nameApp.controller('secondController' , function ($scope){
	$scope.names=['Sample','Sample two'];
		scopes2 = $scope.names.slice(0);
	$scope.heading = 'Advanced';
    $scope.price = '$299';
	$scope.info= 'Best Value';
	$scope.addName = function() {
	  $scope.names.push($scope.enteredName);
	  $scope.enteredName = 'Sample';
	  };
	  
	  $scope.removeName = function(name) {
	  var i = $scope.names.indexOf(name);
      $scope.names.splice(i, 1);
	  };
	  });
	  
	  nameApp.controller('thirdController' , function ($scope){
	$scope.names=['Sample','Sample two','Sample three'];
		 scopes3 = $scope.names.slice(0);
	$scope.heading = 'Super';
    $scope.price = '$399';
	$scope.info= 'Free Packages';
	$scope.addName = function() {
	  $scope.names.push($scope.enteredName);
	  $scope.enteredName = 'Sample';
	  };
	  
	  $scope.removeName = function(name) {
	  var i = $scope.names.indexOf(name);
      $scope.names.splice(i, 1);
	  };
	  });
	  
	  nameApp.controller('fourthController' , function ($scope){
	$scope.names=['Sample','Sample two','Sample three','Sample four','Sample five'];
	 scopes4 = $scope.names.slice(0);
	$scope.heading = 'Executive';
    $scope.price = '$599';
	$scope.info= 'Includes Everything';
	$scope.addName = function() {
	  $scope.names.push($scope.enteredName);
	  $scope.enteredName = 'Sample';
	  };
	  
	  $scope.removeName = function(name) {
	  var i = $scope.names.indexOf(name);
      $scope.names.splice(i, 1);
	 
	  };
	  });
	
	

$( document ).ready(function() {

  
	$( "#chosen-value" ).change(function() {
	var choice = $('#chosen-value').val();
		 console.log(choice);
		 var newColor = "#" + choice;
		 console.log(newColor);
		 $("#p1").css( "background-color", newColor );
		});
		
	$( "#colorval_2" ).change(function() {
	var choice = $('#colorval_2').val();
		 console.log(choice);
		 var newColor = "#" + choice;
		 console.log(newColor);
		 $("#p2").css( "background-color", newColor );
		});
	$( "#colorval_3" ).change(function() {
	var choice = $('#colorval_3').val();
		 console.log(choice);
		 var newColor = "#" + choice;
		 console.log(newColor);
		 $("#p3").css( "background-color", newColor );
		});
		
	$( "#colorval_4" ).change(function() {
	var choice = $('#colorval_4').val();
		 console.log(choice);
		 var newColor = "#" + choice;
		 console.log(newColor);
		 $("#p4").css( "background-color", newColor );
		});	

		
	$(function() {
	  $('#box_select').change(function(){
		$('.legend_mn').hide();
		$('#' + $(this).val()).show();
	  });
	});
	
	
$(function() {

		var styles = {
			  boxShadow: "0 0 5px rgba(81, 203, 238, 1)",
			
			  border: "1px solid rgba(81, 203, 238, 1)"
			};
			
			
	  $('.btn').click(function(){
		$('.legend_box').hide();
		$('.box').removeAttr('style');
		var element = $('#' + $(this).val());
		console.log(element);
		$('#' + $(this).val()).show();
		
		
		if ( $('#mn1').is(':visible')){
		$('#b1').css( styles );
		}
		if ( $('#mn2').is(':visible')){
		$('#b2').css( styles );
		}
		if ( $('#mn3').is(':visible')){
		$('#b3').css( styles );
		}
		if ( $('#mn4').is(':visible')){
		$('#b4').css( styles );
		}
		
		
	  });
	});
	
	
	$('#resbtn').click(function(){
	
	
	        var codeList = $("<ul></ul>");
				$.each(scopes1, function(i)
				{
					var li = $('<li/>')
						.text(scopes1[i])
						.appendTo(codeList);
				});
				
			var codelstonend =  codeList.html();
			var codelstone = codelstonend.replace(/</g,"&lt;").replace(/>/g,"&gt;");
			

			var codeList2 = $("<ul></ul>");
				$.each(scopes2, function(i)
				{
					var li = $('<li/>')
						.text(scopes2[i])
						.appendTo(codeList2);
				});
			var codelsttwond =  codeList2.html();
			var codelsttwo = codelsttwond.replace(/</g,"&lt;").replace(/>/g,"&gt;");

			
			var codeList3 = $("<ul></ul>");
				$.each(scopes3, function(i)
				{
					var li = $('<li/>')
						.text(scopes3[i])
						.appendTo(codeList3);
				});
			var codelstthreend =  codeList3.html();
			var codelstthree = codelstthreend.replace(/</g,"&lt;").replace(/>/g,"&gt;");

			
			var codeList4 = $("<ul></ul>");
				$.each(scopes4, function(i)
				{
					var li = $('<li/>')
						.text(scopes4[i])
						.appendTo(codeList4);
				});
			var codelstfournd =  codeList4.html();
			var codelstfour = codelstfournd.replace(/</g,"&lt;").replace(/>/g,"&gt;");

			
	
	
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
		
		
		
     var $bgcss = $("<pre><code>#p1{background-color:"+ p1bgcolor +";}#p2{background-color:"+ p2bgcolor +";}#p3{background-color:"+ p3bgcolor +";}#p4{background-color:"+ p4bgcolor +";}</code></pre>");
		
		
	 var $info1 = $("<pre><code>&lt;div  class='inner_box' id='ib1'&gt;</code><br/><code>&nbsp;&lt;div class='heading' id='h1'&gt;</code><br/><code>&nbsp;&nbsp;&lt;span&gt;"+ hd1 +"&lt;/span&gt;</code><br/><code>&nbsp;&lt;/div&gt;</code><br/><code>&nbsp;&lt;div class='pricing1' id='p1'&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&lt;img class='crcl'  src='circ.png' /&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&lt;p class='price'&gt;"+ pr1 +"&lt;/p&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class='info1' id='i1'&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt;"+ in1 +"&lt;/span&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</code><br/><code>&nbsp;&lt;/div&gt;</code><br/><code>&nbsp;&lt;div class='boxes' id='x1'&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ codelstone +"</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;</code><br/><code>&nbsp;&lt;/div&gt;</code><br/><code>&lt;/div&gt;</code><br/><code>&lt;div  class='inner_box' id='ib2'&gt;</code><br/><code>&nbsp;&lt;div class='heading' id='h2'&gt;</code><br/><code>&nbsp;&nbsp;&lt;span&gt;"+ hd2 +"&lt;/span&gt;</code><br/><code>&nbsp;&lt;/div&gt;</code><br/><code>&nbsp;&lt;div class='pricing1' id='p2'&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&lt;img class='crcl'  src='circ.png' /&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&lt;p class='price'&gt;"+ pr2 +"&lt;/p&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class='info1' id='i2'&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt;"+ in2 +"&lt;/span&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</code><br/><code>&nbsp;&lt;/div&gt;</code><br/><code>&nbsp;&lt;div class='boxes' id='x2'&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ codelsttwo +"</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;</code><br/><code>&nbsp;&lt;/div&gt;</code><br/><code>&lt;/div&gt;</code><br/><code>&lt;div  class='inner_box' id='ib3'&gt;</code><br/><code>&nbsp;&lt;div class='heading' id='h3'&gt;</code><br/><code>&nbsp;&nbsp;&lt;span&gt;"+ hd3 +"&lt;/span&gt;</code><br/><code>&nbsp;&lt;/div&gt;</code><br/><code>&nbsp;&lt;div class='pricing1' id='p3'&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&lt;img class='crcl'  src='circ.png' /&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&lt;p class='price'&gt;"+ pr3 +"&lt;/p&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class='info1' id='i3'&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt;"+ in3 +"&lt;/span&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</code><br/><code>&nbsp;&lt;/div&gt;</code><br/><code>&nbsp;&lt;div class='boxes' id='x3'&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ codelstthree +"</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;</code><br/><code>&nbsp;&lt;/div&gt;</code><br/><code>&lt;/div&gt;</code><br/><code>&lt;div  class='inner_box' id='ib4'&gt;</code><br/><code>&nbsp;&lt;div class='heading' id='h4'&gt;</code><br/><code>&nbsp;&nbsp;&lt;span&gt;"+ hd4 +"&lt;/span&gt;</code><br/><code>&nbsp;&lt;/div&gt;</code><br/><code>&nbsp;&lt;div class='pricing1' id='p4'&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&lt;img class='crcl'  src='circ.png' /&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&lt;p class='price'&gt;"+ pr4 +"&lt;/p&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class='info1' id='i4'&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt;"+ in4 +"&lt;/span&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;</code><br/><code>&nbsp;&lt;/div&gt;</code><br/><code>&nbsp;&lt;div class='boxes' id='x4'&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ codelstfour +"</code><br/><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;</code><br/><code>&nbsp;&lt;/div&gt;</code><br/><code>&lt;/div&gt;</code></pre>");
		   
	
	$("#results6").append($bgcss);
	
	
	$("#results7").append($info1);

	
	});
	
	
		$('#cpybtn').click(function(){
				
				var clipboard = new Clipboard('#cpybtn');
				clipboard.on('success', function(e) {
					console.log(e);
				});
				clipboard.on('error', function(e) {
					console.log(e);
				});
			});
		
				/*$('.dl_img').each(function(){
					var $this = $(this);
					$this.wrap('<a href="' + $this.attr('src') + '" download />')
				});*/
				
				
				/*$('.cv_btn').each(function(){
					var $this = $(this);
					html2canvas($('.price_tbl')).then(function(canvas) {
					var image = new Image();
					image.src = canvas.toDataURL("image/png");
							
					$this.wrap('<a href=' + image.src + ' download />')
					
					});
				});*/
				
			
	$('#sample_btn').click(function(){
	
	
			
			var cList = $("<ul></ul>");
				$.each(scopes1, function(i)
				{
					var li = $('<li/>')
						.addClass('ui-menu-item')
						.text(scopes1[i])
						.appendTo(cList);
				});
			var lstone =  cList.html();
			
			var cList2 = $("<ul></ul>");
				$.each(scopes2, function(i)
				{
					var li = $('<li/>')
						.addClass('ui-menu-item')
						.text(scopes2[i])
						.appendTo(cList2);
				});
			var lsttwo =  cList2.html();
			
			var cList3 = $("<ul></ul>");
				$.each(scopes3, function(i)
				{
					var li = $('<li/>')
						.addClass('ui-menu-item')
						.text(scopes3[i])
						.appendTo(cList3);
				});
			var lstthree =  cList3.html();
			
			var cList4 = $("<ul></ul>");
				$.each(scopes4, function(i)
				{
					var li = $('<li/>')
						.addClass('ui-menu-item')
						.text(scopes4[i])
						.appendTo(cList4);
				});
			var lstfour =  cList4.html();
			
			
			
	
		/*	function rgb2hex(orig){
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
		   var p4bgcolor = ( rgb2hex($('#p4').css("background-color")) );*/
				
				
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
		
		
		
	 var $imgdl = $("<div class='new_price_tbl'><div  class='new_inner_box' id='ib1'><div class='heading' id='h1'><span>"+ hd1 +"</span></div><div class='pricing1' id='p1'><img class='crcl'  src='circ.png' /><p class='price'>"+ pr1 +"</p><div class='info1' id='i1'><span>"+ in1 +"</span></div></div><div class='boxes' id='x1'><ul>"+ lstone +"</ul></div></div><div  class='new_inner_box' id='ib2'><div class='heading' id='h2'><span>"+ hd2 +"</span></div><div class='pricing1' id='p2'><img class='crcl'  src='circ.png' /><p class='price'>"+ pr2 +"</p><div class='info1' id='i2'><span>"+ in2 +"</span></div></div><div class='boxes' id='x2'><ul>"+ lsttwo +"</ul></div></div><div  class='new_inner_box' id='ib3'><div class='heading' id='h3'><span>"+ hd3 +"</span></div><div class='pricing1' id='p3'><img class='crcl'  src='circ.png' /><p class='price'>"+ pr3 +"</p><div class='info1' id='i3'><span>"+ in3 +"</span></div></div><div class='boxes' id='x3'><ul> "+ lstthree +"</ul></div></div><div  class='new_inner_box' id='ib4'><div class='heading' id='h4'><span>"+ hd4 +"</span></div><div class='pricing1' id='p4'><img class='crcl'  src='circ.png' /><p class='price'>"+ pr4 +"</p><div class='info1' id='i4'><span>"+ in4 +"</span></div></div><div class='boxes' id='x4'><ul>"+ lstfour  +"</ul></div></div>");
		   
		   
			
	
		$('#infoModal').show();
					 $(".info-modal-body").append($imgdl);
					  $("#infoModal").addClass("bdy-ground");
				
			
				
			});	
			$('#clsebtn').click(function(){
					   $('#infoModal').hide();
					   $('.info-modal-body .info-modal').remove();
					    $("#infoModal").removeClass("bdy-ground");
						});	
			
				$('#cv_btn').click(function(){
					html2canvas($('.new_price_tbl')).then(function(canvas) {
									  var image = new Image();
									  image.src = canvas.toDataURL("image/png");
									  //console.log(image.src);
									  var $newref = $('<a id="newcan" href=' + image.src + ' download /> ');
									   $('#imagedl').append($newref);
			});	
			
			});
	
});