
var tasks = [];

function idGenerator() {

	 var timestamp = new Date();

	 	 var id = 
	 	 			timestamp.getHours().toString() +
	 	 			timestamp.getMinutes().toString() +
	 	 			timestamp.getSeconds().toString() +
	 	 			timestamp.getMilliseconds().toString();

	 	 			return id;

}

function createTask(){

	var taskDescription = document.getElementById("newTask").value;

	var task = {
		id: idGenerator(),
		data: {
			description: taskDescription 
		}

	};

	tasks.push(task);

	updateScreen();
}

function updateScreen() {
	var list = "<ul>";

	tasks.forEach(task=>{

		list += 
		"<div id='form-group'><input id='checkbox' type='checkbox' checked/><label id-data ="+task.id+">"+task.data.description+"</label></div>"

		list += "<button onclick=deleteTask(this) id-data=" + task.id +">Apagar</button>"
	});
	

	list += "</ul>";

	document.getElementById("list").innerHTML = list;
	document.getElementById("newTask").Value = "";

}
//esquema para excluir a opção.
function deleteTask(element){
	console.log(element);

	tasks = tasks.filter(task =>task.id != element.getAttribute("id-data"));

	updateScreen();
}