import React, { useState } from 'react';

const Todo = (props) => {
	const [isEditing, setEditing] = useState(false);
	const viewTemplate = (
		<div>
			<input type='checkbox' data-testid='complete-task'></input>
			<span data-testid='name'>{props.name}</span>
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
			<input type='text' data-testid='edit-name'></input>
			<button data-testid='cancel' onClick={() => setEditing(false)}>
				cancel
			</button>
			<button data-testid='save'>save</button>
		</div>
	);
	return (
		<li data-testid={props.id}>{isEditing ? editTemplate : viewTemplate}</li>
	);
};

export default Todo;
