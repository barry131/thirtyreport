// JavaScript Document
$(function(){
	/*健康分析数据*/
	setInterval(function(){
		var datad,datah,datam,datas;
		var dataDn = $('.date-d').html();
		var dataHn = $('.date-h').html();
		var dataMn = $('.date-m').html();
		var dataSn = $('.date-s').html();
		datas = parseInt(dataSn)+1;
		if(datas == 60){
			datam = parseInt(dataMn)+1;
			if(datam == 60){
				datam = '00';
				datah = parseInt(dataHn)+1;
				if(datah == 24){
					datah = '00';
					datad = parseInt(dataDn)+1;
					$('.date-d').html(datad)
				}else if(datah <10){
					datah = '0'+datah;
				}
				$('.date-h').html(datah)
			}else if(datam <10){
				datam = '0'+datam;
			}
			$('.date-m').html(datam)
			
			datas = '00';
		}else if(datas <10){
			datas = '0'+datas;
		}
		$('.date-s').html(datas);
	},1000);
	/*var dataDn = $('.date-d').attr('data-num');
	var dataHn = $('.date-h').attr('data-num');
	var dataMn = $('.date-m').attr('data-num');
	var dataSn = $('.date-s').attr('data-num');
	var addnum = setInterval(function(){
		var d = true,
			h = true,
			m = true,
			s = true;
		var numD = $('.date-d').html();
		var numH = $('.date-h').html();
		var numM = $('.date-m').html();
		var numS = $('.date-s').html();
		if(parseInt(numD) < parseInt(dataDn)){
			$('.date-d').html(parseInt(numD)+1);
		}else{
			var d = false;
		}
		if(parseInt(numH) < parseInt(dataHn)){
			$('.date-h').html(parseInt(numH)+1)
		}else{
			var h = false;
		}
		if(parseInt(numM) < parseInt(dataMn)){
			$('.date-m').html(parseInt(numM)+1)
		}else{
			var m = false;
		}
		if(parseInt(numS) < parseInt(dataSn)){
			$('.date-s').html(parseInt(numS)+1)
		}else{
			var s = false;
		}
		if(!d & !h & !m & !s){
			clearInterval(addnum);
		}
	},10);*/
	
	
	/*健康分析数据*/
	
	
	
	window.isFans = "0";
	window.isBind = "0";
	$('.myreport').click(function(){
		if(isFans == 1){
			if(isBind == 1){
				window.location.href = $(this).attr('data-url');
			}else{
				$('.poputinfo').show();
				$('.poput-con').css('top',($(window).height() - $('.popinfo').height())/2-20);
			}
		}else{
			$('.ewminfo').show();
			$('.poput-con').css('top',($(window).height() - $('.ewmimg').height())/2-20);
		}
	});
	
	$('.poput').click(function(){
		$(this).hide();
	});
	
	$('.poput-close').click(function(){
		$(this).parents('.poput').hide();
	});
	
	$('.sharebtn').click(function(){
		$('.shareinfo').show();
	});
	$('.shareinfo').click(function(){
		$(this).hide();
	});
	$('#tel').keyup(function(){
		var reg = /^1[3|4|5|7|8]\d{9}$/;
		var tel = $('#tel').val();
		if(reg.test(tel)){
			$('.tel-info span').show();
		}
	});
	$('.myreportbtn').click(function(){
		var reg = /^1[3|4|5|7|8]\d{9}$/;
		var tel = $('#tel').val();
		if(!reg.test(tel)){
			return false;
		}
		$.ajax({
			url:'',
			type:'post',
			dataType:'json',
			beforeSubmit:function(){
				
			},
			success:function(data){
				alert(data.msg);
				$modal.modal('hide');
				window.location.reload();
			}
		});
	});
})
$(document).ready(function(e) {
	window.onload = function(){
		$('.loading').hide();
	}
});