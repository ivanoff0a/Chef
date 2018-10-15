$(document).ready(function() {
	let result = prompt('Choose and write one of these to discover more information about them: lasagna, pasta, pizza');

	if (result == 'lasagna') {
		chef.cook(result);
	}
});