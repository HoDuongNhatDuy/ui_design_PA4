$('#add-criteria-btn').click(function () {
	$('#criteria-modal').modal();
});

$('body').on('add_new_criteria', function (event, key, value) {
	var html = `
		<span class="selected-criteria-item">
            <button class="filter-pill ">
                ${key}: ${value}
                <i class="fa fa-times text-danger remove-criteria-btn"></i>
            </button>
        </span>
	`;
	$('#criteria-block').append(html);
});

$('body').on('click', '.remove-criteria-btn', function () {
	$(this).closest('.selected-criteria-item').remove();
});