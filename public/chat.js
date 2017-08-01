window.onload = function () {
	var messages = [];
	var socket = io.connect('http://localhost:3000');
	var field = document.getElementById("field");
	var sendButton = document.getElementById('send');
	var content = document.getElementById('content');

	socket.on('message', function (data) {
		if (data.message) {
			console.log(data.message);
			messages.push(data.message);
			var html = "";
			for (var i = 0; i < messages.length; i++) {
				html += messages[i] + '<br/>';
			}
			content.innerHTML = html;

		}
		else {
			console.log("ther is prob");
		}
	});
	sendButton.onclick = function () {

		var text = field.value;
		console.log(text);
		socket.emit('send', { message: text });
	};
}