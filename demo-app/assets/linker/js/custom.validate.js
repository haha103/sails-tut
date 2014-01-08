$(document).ready(function () {
	$('.haha-form-signin').validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			password: {
				minLength: 6,
				required: true
			},
			confirmation: {
				equalTo: "#password"
			}
		},
		highlight: function(element) {
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element) {
			$(element).closest('.form-group').removeClass('has-error');
		},
		success: function(element) {
			$(element).closest('.form-group').addClass('has-success');
		},
		errorElement: 'span',
		errorClass: 'help-block',
		errorPlacement: function(error, element) {
			error.insertAfter(element);
		}
	});
});