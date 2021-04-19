
const data=axios.get(

	"https://crudcrud.com/api/a071b85353444fca8e9764cd0c2f5bcf"
)
.then(data=>console.log(data))

const pt=axios.post(
	"https://crudcrud.com/api/071b85353444fca8e9764cd0c2f5bcf"
	{name:"raj"}
	).then(res => showOutput(res))
    .catch(err => console.error(err));


function delete() {
  axios
    .delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}
