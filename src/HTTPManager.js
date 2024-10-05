const BASE_URL = "https://elingo.pythonanywhere.com/";


class HTTPManager {
	constructor() {
		this.baseUrl = BASE_URL;
	}
	async getProducts( endpoint) {
		const url = new URL(`${this.baseUrl}${endpoint}`);
		try {
			const response = await fetch(url);
			return this.handleResponse(response);
		} catch (err) {
			throw err;
		}
	}
	
	async handleResponse(response) {
		if (response.ok) {
			switch (response.status) {
				case 200:
					return await response.json();
			}
		} else {
			throw new Error(`Erreur HTTP : ${response.statusText}`);
		}
	}
}
export default HTTPManager;