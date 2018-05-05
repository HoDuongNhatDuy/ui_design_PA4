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

})