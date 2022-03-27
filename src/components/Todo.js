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
		<div className='Card'>
			<input
				type='checkbox'
				data-testid='complete-task'
				defaultChecked={props.completed}
				onClick={() => props.toggleTaskCompletion(props.id)}
			></input>
			<span
				data-testid='name'
				className={props.completed ? 'text-strike' : null}
			>
				{props.name}
			</span>
			<button
				data-testid='delete-task'
				onClick={() => props.deleteTask(props.id)}
				className='btn-danger'
			>
				delete
			</button>
			<button
				data-testid='edit-task'
				onClick={() => setEditing(true)}
				className='btn-edit'
			>
				edit
			</button>
		</div>
	);
	const editTemplate = (
		<div className='Card'>
			<input
				type='text'
				data-testid='edit-name'
				value={newName}
				onChange={handleChange}
				className='input-primary'
				key='edit-name'
			></input>
			<button data-testid='save' onClick={handleSave} className='btn-success'>
				save
			</button>
			<button
				data-testid='cancel'
				onClick={() => setEditing(false)}
				className='btn-cancel'
			>
				cancel
			</button>
		</div>
	);
	return (
		<li data-testid={props.id}>{isEditing ? editTemplate : viewTemplate}</li>
	);
};

export default Todo;
