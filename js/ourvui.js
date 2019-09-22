var myObject = new Vue({
			el: '#app',
			data: {name: 'Clinton', score:"98",
			students: [{name: 'Clinton', score:'98'}, 
						{name: 'Cole', score: '101'}
			]}
		})

		function addStudent() {
			myObject.students.push({name:myObject.name, score:myObject.score})
		}