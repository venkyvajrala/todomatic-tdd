import React, { useState } from 'react';

import Todo from './components/Todo';

function App(props) {
	const [tasks, setTasks] = useState(props.todos);

	const deleteTask = (id) => {
		console.log(tasks);
		const remainingTasks = tasks.filter((task) => task.id !== id);
		setTasks(remainingTasks);
	};
	const editTask = (id, name) => {
		const updatedTasks = tasks.map((task) => {
			if (task.id === id) {
				return { ...task, name: name };
			}
			return task;
		});
		setTasks(updatedTasks);
	};
	const toggleTaskCompletion = (id, name) => {
		console.log('toggling');
		const updatedList = tasks.map((task) => {
			if (task.id === id) {
				return { ...task, completed: !task.completed };
			}
			return task;
		});
		setTasks(updatedList);
	};

	const taskList = tasks.map((task) => {
		return (
			<Todo
				name={task.name}
				completed={task.completed}
				id={task.id}
				key={task.id}
				deleteTask={deleteTask}
				editTask={editTask}
				toggleTaskCompletion={toggleTaskCompletion}></Todo>
		);
	});

	return (
		<div>
			<ul data-testid='tasks'>{taskList}</ul>
		</div>
	);
}

export default App;
