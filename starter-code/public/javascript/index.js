const charactersAPI = new APIHandler('http://localhost:8000');

$(document).ready(() => {
	document.getElementById('fetch-all').onclick = function() {
		charactersAPI.getFullList();
	};

	const inputId = document.getElementById('input-id');
	document.getElementById('fetch-one').onclick = function() {
		charactersAPI.getOneRegister(inputId.value);
	};

	const deleteId = document.getElementById('delete-id');
	document.getElementById('delete-one').onclick = function() {
		charactersAPI.deleteOneRegister(deleteId.value);
	};

	const editId = document.getElementById('edit-character-form');
	document.getElementById('edit-character-form').onsubmit = function() {
		charactersAPI.updateOneRegister(editId.value);
	};

	document.getElementById('new-character-form').onsubmit = function() {
		charactersAPI.createOneRegister();
	};
});
