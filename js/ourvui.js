var myObject = new Vue({
	el: '#app',
	data: {name: 'Rando', score:Math.floor(Math.random() * 100) + 1,
	students: [{name: 'Clinton', score:'98'}, 
				{name: 'Cole', score: '101'},
				{name: 'Michael', score:'6'},
				{name: 'Ben', score:'15'},
				{name: 'Jacob', score:'89'}
	]}
})

function addStudent() {
	myObject.students.push({name:myObject.name, score:myObject.score})
}