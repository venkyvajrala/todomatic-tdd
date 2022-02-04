import React, { useState } from 'react';

import Todo from './components/Todo';

function App(props) {
	const [tasks, setTasks] = useState(props.todos);

	const deleteTask = (id) => {
		console.log(tasks);
		const remainingTasks = tasks.filter((task) => task.id !== id);
		setTasks(remainingTasks);
	};
	const taskList = tasks.map((task) => {
		return (
			<Todo
				name={task.name}
				completed={task.completed}
				id={task.id}
				key={task.id}
				deleteTask={deleteTask}></Todo>
		);
	});

	return (
		<div>
			<ul data-testid='tasks'>{taskList}</ul>
		</div>
	);
}

export default App;
