$( document ).ready(function() {
     $('#upload-file-pet').on('change',function ()
        {
            var filePath = $(this).val();
            alert(filePath);
        });
    $('.add-image-pet').on('click',function(){
    	$('#upload-file-pet').trigger('click');

     });

    $('.submit-add-feature').on('click',function(){
    	var tr=
    			`
					<tr>
	                    <td>Tuổi thú cưng: 8 tháng</td>
	                    <td width="4%"><i class="fas fa-times remove-feature"></i></td>
	                </tr>
    			`;
    	$('.list-feature-pet').append(tr);
    });

    $('a.submit-next-step').on('click',function(){

    	var check1 = checknamepost();
    	var check2 = checknamepet();

    	if(check1 !== '' && check2 !== '') window.location.href = 'find-owner-2.html';
    });

	$('.namepost #text-namepost').on('blur',function(){
		checknamepost();
	});
	$('.namepet #text-namepet').on('blur',function(){
		checknamepet();
	});


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

})