

$( document ).ready(function() { 

	// var titlepost='';

	// var d = new Date();
	// var month = d.getMonth()+1;
	// var day = d.getDate();
	// var datepost = ((''+day).length<2 ? '0' : '') + day + '/' + ((''+month).length<2 ? '0' : '') + month + '/' + d.getFullYear();

	// var viewpost = 2;
	// var commentpost = 1;

	// var pricepost=0;

     $('#upload-file-pet').on('change',function (event)
        {
			if($('.add-image-pet').hasClass('none-image-choose'))
				$('.add-image-pet').removeClass('none-image-choose');
            //var filename = $('#upload-file-pet').val().split('\\').pop();
	        var file = document.getElementById('upload-file-pet').files[0];
	        var reader  = new FileReader();
	        // it's onload event and you forgot (parameters)
	        reader.onload = function(e)  {
		        var path = e.target.result;
		        var divimg = `
							<div class="image-pet">
		                        <img src="`+ path +`" alt="no image" class="set-image">
		                        <i class="fas fa-times remove-image-pet"></i>
		                    </div>
            			`;

		        $('.div-choose-image-pet').append(divimg);
		        checkimage();
	        }
	        // you have to declare the file loading
	        reader.readAsDataURL(file);

            //alert(count_img);
        });
    $('.add-image-pet').on('click',function(){
    	$('#upload-file-pet').trigger('click');

     });
	$('.add-criterion').click(function() {
		$('#criteria-modal').modal();
	});

    $('a.step-submit-1').on('click',function(){
    	var check1 = checknamepost();
    	var check2 = checknamepet();
    	console.log('aaaa');
    	if(check1 !== '' && check2 !== '') {
    		window.location.href = 'find-owner-2.html';
    	}
    });
	$('a.step-submit-2').on('click',function(){
		var checkimg = checkimage();
		if(checkimg !== 0) {
			window.location.href = 'find-owner-3.html';
		}		
    });
    $('a.step-submit-3').on('click',function(){

    	window.location.href = 'pets-detail.html';
    });

	$('.namepost #text-namepost').on('blur',function(){
		checknamepost();
	});
	$('.namepet #text-namepet').on('blur',function(){
		checknamepet();
	});
	function checkimage(){
		var countimg = $('.div-choose-image-pet .image-pet').length;
		if(countimg === 0){
			$('#mute-imagepet').text('Phải có ít nhất 1 hình ảnh');
		}
		else $('#mute-imagepet').text('');

		return countimg;
	}
	function checknamepost(){
		var thongbao='';
    	var tenpost = $('.namepost #text-namepost').val();
    	if(tenpost === '' ) thongbao = 'Tên bài đăng không được trống';
    	$('.namepost #mute-namepost').text(thongbao);
    	return tenpost;
	}
	function checknamepet(){
		var thongbao='';
    	var tenpet = $('.namepet #text-namepet').val();
    	if(tenpet === '' ) thongbao = 'Tên thú cưng không được trống';
    	$('.namepet #mute-namepet').text(thongbao);
    	return tenpet;
	}

	$('.list-feature-pet').on('click', '.remove-feature', function(){
		$(this).closest('tr').remove();
	});
	$('.div-choose-image-pet').on('click', '.remove-image-pet', function(){
		$(this).closest('div').remove();
		addclassnoneimage();
	});
	function addclassnoneimage(){
		if($('.div-choose-image-pet .image-pet').length === 0){
			if(!$('.add-image-pet').hasClass('none-image-choose'))
				$('.add-image-pet').addClass('none-image-choose');
		}else{
			if($('.add-image-pet').hasClass('none-image-choose'))
				$('.add-image-pet').removeClass('none-image-choose');
		}
	}
	$('#price-find-owner').on('keypress',function(e){
	    
	      if(e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57))
	      {
	        return false;
	      }
	 });

	$('#price-find-owner').on('keyup',function(){
		var price = $('#price-find-owner').val();
		if(price === '')return;
		price = price.toString();
		price = getMoney(price);

		var price_fm = formatMoney(price);
		$('#price-find-owner').val(price_fm);
	});
	$('#price-find-owner').on('blur',function(){
		var price = $('#price-find-owner').val();
		if(price === '')$('#price-find-owner').val('0');;
	});
	 function getMoney(fm_money){
	    var fm = fm_money.replace(/\,/g,"");
	    var money = parseInt(fm);
	    return money;
	 }
	function formatMoney(money){
	    var strmoney = money.toString();
	
	    var l = strmoney.length;
	    var sodayphay = Math.ceil(l/3) - 1;
	    for(var i = 1;i<= sodayphay; i++){
	      strmoney = insert(strmoney,l-i*3,',');
	    }
	    return strmoney;
	}
	function insert(str, index, value) {
	    return str.substr(0, index) + value + str.substr(index);
	}

	$('.find-owner-submit-new-post').on('click', function(){
		window.location.href='find-owner-1.html';
	});

	$('.re-step-submit-2,.re-step-submit-3').on('click', function(){
		window.history.back();
	});
	$('.pet-thumbnail').on('click',function(){

    	window.location.href = 'pets-detail.html';
    });
})