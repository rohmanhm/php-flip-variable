/**
*!	Created by Muhammad Habib Rohman
*	mhrohman@live.com
*/

/**
 * Event handler when window is ready
 * @param  {Function}
 * @return {void}
 */
$(window).ready(function () {
	$('input[name=a]').focus();
})

/**
 * Event when form flip is submitted
 * @return {void}
 */
$('form[name=form-flip]').on('submit', function (event) {
	event.preventDefault();

	var a = $('input[name=a]').val(),
		b = $('input[name=b]').val();

	$.ajax({
		type: 'get',
		url: 'flipproccess.php',
		data: {
			'a':a,
			'b':b
		},
		//  What I do Before send
		beforeSend: function () {
			$('input[type=submit]').attr('disabled', true);
			$('input[type=submit]')[0].value = 'Wait ...';
		},
		// Handle success
		success: function (res) {
			setTimeout(function () {
				$('input[name=a]').val(res[0]);
				$('input[name=b]').val(res[1]);
				$('input[type=submit]').removeAttr('disabled');
				$('input[type=submit]')[0].value = 'flip variable';
			}, 500)
		},
		// Handle error
		error: function () {
			$('input[type=submit]')[0].value = 'error, reload please';
		}
	})
})