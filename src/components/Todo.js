import React, { useState } from 'react';

const Todo = (props) => {
	const [isEditing, setEditing] = useState(false);
	const [newName, setNewName] = useState(props.name);
	const handleChange = (e) => {
		setNewName(e.target.value || '');
	};
	const handleSave = () => {
		props.editTask(props.id, newName);
		setEditing(false);
	};
	const viewTemplate = (
		<div>
			<input
				type='checkbox'
				data-testid='complete-task'
				defaultChecked={props.completed}
				onClick={() => props.toggleTaskCompletion(props.id)}></input>
			<span
				data-testid='name'
				className={props.completed ? 'text-strike' : null}>
				{props.name}
			</span>
			<button data-testid='edit-task' onClick={() => setEditing(true)}>
				edit
			</button>
			<button
				data-testid='delete-task'
				onClick={() => props.deleteTask(props.id)}>
				delete
			</button>
		</div>
	);
	const editTemplate = (
		<div>
			<input
				type='text'
				data-testid='edit-name'
				value={newName}
				onChange={handleChange}></input>
			<button data-testid='cancel' onClick={() => setEditing(false)}>
				cancel
			</button>
			<button data-testid='save' onClick={handleSave}>
				save
			</button>
		</div>
	);
	return (
		<li data-testid={props.id}>{isEditing ? editTemplate : viewTemplate}</li>
	);
};

export default Todo;
