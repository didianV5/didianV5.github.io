$(function(){
	
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?e422443978851cab4a6061bd00774795";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
	
	$('#logoLeft').mouseenter(function(){
		$('#logoLeftFe').animate({'top':'0px'},0)
		$('#logoLeftFe').animate({'top':'-750px'},1000)
	})

	$('#logoLeft').click(function(){
		$('#bigBox').hide()
		$('#recoPage').show()
		$('#recoPage').animate({'margin-top':'-90px','opacity':'1'},500)
	})

	$('.recoBtn').click(function(){
		$('#bigBox').show()
		$('#recoPage').hide()
		$('#recoPage').animate({'margin-top':'-150px','opacity':'0'},0)
	})

	$('.navBg').hide()

	$('.buy').mouseenter(function(){
		$('.navBg').hide()
		$('.navBg01').show()
		$('.navBg01 a').animate({'top':'0','bottom':'0','opacity':'1'},300)
	})

	$('.news').mouseenter(function(){
		$('.navBg').hide()
		$('.navBg02').show()
		$('.navBg02 a').animate({'top':'0','bottom':'0','opacity':'1'},300)
	})

	$('.forum').mouseenter(function(){
		$('.navBg').hide()
		$('.navBg03').show()
		$('.navBg03 a').animate({'top':'0','bottom':'0','opacity':'1'},300)
	})

	$('.tool').mouseenter(function(){
		$('.navBg').hide()
		$('.navBg04').show()
		$('.navBg04 a').animate({'top':'0','bottom':'0','opacity':'1'},300)
	})

	$('.favorites').mouseenter(function(){
		$('.navBg').hide()
		$('.navBg05').show()
		$('.navBg05 a').animate({'top':'0','bottom':'0','opacity':'1'},300)
	})

$.fn.hoverDelay = function(options){ 
var defaults = { 
hoverDuring: 200, 
outDuring: 200, 
hoverEvent: function(){ 
$.noop(); 
}, 
outEvent: function(){ 
$.noop(); 
} 
}; 
var sets = $.extend(defaults,options || {}); 
var hoverTimer, outTimer; 
return $(this).each(function(){ 
$(this).hover(function(){ 
clearTimeout(outTimer); 
hoverTimer = setTimeout(sets.hoverEvent, sets.hoverDuring); 
},function(){ 
clearTimeout(hoverTimer); 
outTimer = setTimeout(sets.outEvent, sets.outDuring); 
}); 
}); 
} 



$('.hZongheBtn').hoverDelay({ 
hoverEvent: function(){ 
		$('.first_four_one').hide()
		$('.hZonghe').show()
		$('.hZonghe').css({"display":"flex","flex-wrap": "wrap"})				
		$(".first_three_one").removeClass("currentHNav")
		$(".hZongheBtn").addClass("currentHNav")

} 
}); 

$('.hGouwuBtn').hoverDelay({ 
hoverEvent: function(){ 
		$('.first_four_one').hide()
		$('.hGouwu').show()
		$('.hGouwu').css({"display":"flex","flex-wrap": "wrap"})
		$(".first_three_one").removeClass("currentHNav")
		$(".hGouwuBtn").addClass("currentHNav")	
} 
}); 

$('.hZixunBtn').hoverDelay({ 
hoverEvent: function(){ 
		$('.first_four_one').hide()
		$('.hZixun').show()
		$('.hZixun').css({"display":"flex","flex-wrap": "wrap"})
		$(".first_three_one").removeClass("currentHNav")
		$(".hZixunBtn").addClass("currentHNav")	
} 
}); 

$('.hShejiaoBtn').hoverDelay({ 
hoverEvent: function(){ 
		$('.first_four_one').hide()
		$('.hShejiao').show()
		$('.hShejiao').css({"display":"flex","flex-wrap": "wrap"})
		$(".first_three_one").removeClass("currentHNav")
		$(".hShejiaoBtn").addClass("currentHNav")	
} 
}); 

$('.hYingyinBtn').hoverDelay({ 
hoverEvent: function(){ 
		$('.first_four_one').hide()
		$('.hYingyin').show()
		$('.hYingyin').css({"display":"flex","flex-wrap": "wrap"})
		$(".first_three_one").removeClass("currentHNav")
		$(".hYingyinBtn").addClass("currentHNav")	
} 
}); 

$('.hShenghuoBtn').hoverDelay({ 
hoverEvent: function(){ 
		$('.first_four_one').hide()
		$('.hShenghuo').show()
		$('.hShenghuo').css({"display":"flex","flex-wrap": "wrap"})
		$(".first_three_one").removeClass("currentHNav")
		$(".hShenghuoBtn").addClass("currentHNav")		
} 
}); 

$('.hGongjuBtn').hoverDelay({ 
hoverEvent: function(){ 
		$('.first_four_one').hide()
		$('.hGongju').show()
		$('.hGongju').css({"display":"flex","flex-wrap": "wrap"})
		$(".first_three_one").removeClass("currentHNav")
		$(".hGongjuBtn").addClass("currentHNav")	
} 
}); 

$('.hItsiteBtn').hoverDelay({ 
hoverEvent: function(){ 
		$('.first_four_one').hide()
		$('.hItsite').show()
		$('.hItsite').css({"display":"flex","flex-wrap": "wrap"})
		$(".first_three_one").removeClass("currentHNav")
		$(".hItsiteBtn").addClass("currentHNav")
} 
}); 

$('.hQuzhanBtn').hoverDelay({ 
hoverEvent: function(){ 
		$('.first_four_one').hide()
		$('.hQuzhan').show()
		$('.hQuzhan').css({"display":"flex","flex-wrap": "wrap"})
		$(".first_three_one").removeClass("currentHNav")
		$(".hQuzhanBtn").addClass("currentHNav")	
} 
}); 


$('.promptBtn').hoverDelay({ 
hoverEvent: function(){ 
		$('.promptText').show()
} 
}); 

$('.promptBtn').mouseout(function(){
		$(".promptText").hide()
	})

$('.mSiteBtn').hoverDelay({ 
hoverEvent: function(){ 
		$('.mSiteQrcode').show()
} 
}); 

$('.mSiteBtn').mouseout(function(){
		$(".mSiteQrcode").hide()
	})



	/*$('.sChoiceBtn').click(function(){
		$(".scBigBox").show()
	})

	$('.scSmallBox').click(function(){
		$(".scBigBox").hide()
	})*/


	$(document).ready(function() {
		$.fn.fullpage({
			
			anchors: ['pa1', 'pa2', 'pa3', 'pa4']
		});
	});

})
