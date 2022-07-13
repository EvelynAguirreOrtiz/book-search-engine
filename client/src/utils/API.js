// marvel api
import MD5 from "crypto-js/md5";

const API_URL = process.env.REACT_APP_BASE_URL;

const getHash = (ts, secretKey, publicKey) => {
	return MD5(ts + secretKey + publicKey).toString();
};

const fetchHeroes = async (value) => {
	// get api from docs
	let baseUrl = `${API_URL}/v1/public/characters`;

	let ts = Date.now().toString();
	let apiKey = process.env.REACT_APP_API_KEY;
	let privateKey = process.env.REACT_APP_PRIVATE_KEY;
	let hash = getHash(ts, privateKey, apiKey);

	let url = `${baseUrl}?ts=${ts}&apiKey=${apiKey}&hash=${hash}&nameStartsWith=${value}`;

	try {
		let response = await fetch(url);
		let data = await response.json();
		console.log(data.data.results);
		return data.data.results;
	} catch (err) {
		console.error(err);
		return;
	}
};

const fetchHero = async (id) => {
	let baseUrl = `${API_URL}/v1/public/characters/${id}`;

	let ts = Date.now().toString();
	let apiKey = process.env.REACT_APP_API_KEY;
	let privateKey = process.env.REACT_APP_PRIVATE_KEY;
	let hash = getHash(ts, privateKey, apiKey);

	let url = `${baseUrl}?ts=${ts}&apiKey=${apiKey}&hash=${hash}`;

	try {
		let response = await fetch(url);
		let data = await response.json();
		console.log(data.data.results);
		return data.data.results;
	} catch (err) {
		console.error(err);
		return;
	}
};

// export { fetchHeroes, fetchHero };

// end of marvel code

// route to get logged in user's info (needs the token)
// export const getMe = (token) => {
// 	return fetch("/api/users/me", {
// 		headers: {
// 			"Content-Type": "application/json",
// 			authorization: `Bearer ${token}`,
// 		},
// 	});
// };

// export const createUser = (userData) => {
// 	return fetch("/api/users", {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(userData),
// 	});
// };

// export const loginUser = (userData) => {
// 	return fetch("/api/users/login", {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(userData),
// 	});
// };

// // save book data for a logged in user
// export const saveBook = (bookData, token) => {
// 	return fetch("/api/users", {
// 		method: "PUT",
// 		headers: {
// 			"Content-Type": "application/json",
// 			authorization: `Bearer ${token}`,
// 		},
// 		body: JSON.stringify(bookData),
// 	});
// };

// // remove saved book data for a logged in user
// export const deleteBook = (bookId, token) => {
// 	return fetch(`/api/users/books/${bookId}`, {
// 		method: "DELETE",
// 		headers: {
// 			authorization: `Bearer ${token}`,
// 		},
// 	});
// };

// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
// export const searchGoogleBooks = (query) => {
// 	return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
// };

export { fetchHeroes, fetchHero };
