const endpoint = "https://jsonplaceholder.typicode.com/users"

fetch(endpoint,{
	method:'GET'
}).then((res) => {
	return res.json();
}).then((data) => {
	console.log(data)
})