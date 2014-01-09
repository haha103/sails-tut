$(document).ready(function () {
	$('div#edit-btn-container').on('click', 'a#edit', function () {
		$('input[name="name"]').removeAttr('disabled');
		$('input[name="title"]').removeAttr('disabled');
		$('input[name="email"]').removeAttr('disabled');
		$('input[name="password"]').closest('div').removeClass('hidden');
		$('input[name="confirmation"]').closest('div').removeClass('hidden');
		$('button#update').closest('div').removeClass('hidden');
		$(this).text('Cancel Edit');
		$(this).attr('id', 'cancel-edit');
	});

	$('div#edit-btn-container').on('click', 'a#cancel-edit', function () {
		$('input[name="name"]').attr('disabled', '');
		$('input[name="title"]').attr('disabled', '');
		$('input[name="email"]').attr('disabled', '');
		$('input[name="password"]').closest('div').addClass('hidden');
		$('input[name="confirmation"]').closest('div').addClass('hidden');
		$('button#update').closest('div').addClass('hidden');
		$(this).text('Edit');
		$(this).attr('id', 'edit');
	});
});