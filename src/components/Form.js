import React, { useState } from 'react';

const Form = (props) => {
	const [taskName, setTaskName] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		props.adTask(taskName);
		setTaskName('');
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				data-testid='task-input'
				value={taskName}
				onChange={(e) => setTaskName(e.target.value)}
			/>
			<button type='submit' data-testid='ad-task-button'>
				ad task
			</button>
		</form>
	);
};

export default Form;
