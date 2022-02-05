import React, { useState } from 'react';
import Form from './components/Form';
import { nanoid } from 'nanoid';
import Todo from './components/Todo';
import FilterButton from './components/FilterButton';

const FILTERS = {
	All: () => true,
	Active: (task) => task.completed === false,
	Completed: (task) => task.completed === true,
};

const FILTER_NAMES = Object.keys(FILTERS);
function App(props) {
	const [tasks, setTasks] = useState(props.todos);
	const [filter, setFilter] = useState('All');
	const deleteTask = (id) => {
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
	const toggleTaskCompletion = (id) => {
		const updatedList = tasks.map((task) => {
			if (task.id === id) {
				return { ...task, completed: !task.completed };
			}
			return task;
		});
		setTasks(updatedList);
	};

	const adTask = (name) => {
		const newTask = { name: name, completed: false, id: 'todo-' + nanoid() };
		const updatedTasks = [newTask, ...tasks];
		setTasks(updatedTasks);
	};

	const taskList = tasks.filter(FILTERS[filter]).map((task) => {
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

	const FilterButtons = FILTER_NAMES.map((filterName) => {
		return (
			<FilterButton
				name={filterName}
				key={filterName}
				setFilter={setFilter}
				globalFilter={filter}
			/>
		);
	});

	return (
		<div className='App'>
			<Form adTask={adTask} className='Card' />
			<div id='ad-form'>{FilterButtons}</div>

			<ul data-testid='tasks'>{taskList}</ul>
		</div>
	);
}

export default App;
