$( document ).ready(function() {
     $('#upload-file-pet').on('change',function ()
        {
            var filePath = $(this).val();
            alert(filePath);
        });
    $('.add-image-pet').on('click',function(){
    	$('#upload-file-pet').trigger('click');

     });
})