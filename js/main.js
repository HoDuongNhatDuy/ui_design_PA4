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
	                    <td width="4%"><i class="fas fa-times"></i></td>
	                </tr>
    			`;
    	$('.list-feature-pet').append(tr);
    });
})