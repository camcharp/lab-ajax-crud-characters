const productAPI = axios.create({
	baseURL: 'http://localhost:8000'
});

const name = document.getElementById('name');
const occupation = document.getElementById('occupation');
const weapon = document.getElementById('weapon');
const checkbox = document.getElementById('checkbox');

const id = document.getElementById('editid');
const editname = document.getElementById('editname');
const editoccupation = document.getElementById('editoccupation');
const editweapon = document.getElementById('editweapon');
const editcheckbox = document.getElementById('editcheckbox');


class APIHandler {
	constructor(baseUrl) {
		this.BASE_URL = baseUrl;
	}

	getFullList() {
		productAPI
			.get('/characters')
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	getOneRegister(id) {
		productAPI
			.get(`/characters/${id}`)
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
	}
	createOneRegister() {
		productAPI
			.post('/characters', {
				name: name.value,
				occupation: occupation.value,
				weapon: weapon.value,
				checkbox: checkbox.value
			})
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	updateOneRegister(id) {
		productAPI
			.patch(`/characters/${id}`, {
				name: editname.value,
				occupation: editoccupation.value,
				weapon: editweapon.value,
				checkbox: editcheckbox.value
			})
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	deleteOneRegister(id) {
		productAPI
			.delete(`/characters/${id}`)
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
	}
}
