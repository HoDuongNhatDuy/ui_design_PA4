$('body').on('add_new_criteria', function(event, key, value) {
	var tr=
		`
                    <tr>
                        <td>${key}: ${value}</td>
                        <td width="4%"><i class="fas fa-times remove-feature"></i></td>
                    </tr>
                `;

	$('.list-feature-pet').append(tr);
});