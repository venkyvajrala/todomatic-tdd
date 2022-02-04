import { fireEvent, render, screen, within } from '@testing-library/react';
import App from '../App';

describe('tests todo app', () => {
	it('should display intial todos with edit ,delete,check box buttons', () => {
		const intialTodos = [
			{ name: 'eat', completed: true, id: 'todo-0' },
			{ name: 'sleep', completed: false, id: 'todo-1' },
		];
		const { getAllByRole } = render(<App todos={intialTodos} />);
		const todoList = getAllByRole('listitem');
		expect(todoList.length).toEqual(2);
		todoList.forEach((todo, index) => {
			const { getByText, getByTestId } = within(todo);
			const { name } = intialTodos[index];
			expect(getByText(name)).toBeInTheDocument();
			expect(getByTestId('edit-task')).toBeInTheDocument();
			expect(getByTestId('delete-task')).toBeInTheDocument();
			expect(getByTestId('complete-task')).toBeInTheDocument();
		});
	});

	it('should delete task if delete button clicked', () => {
		const todos = [
			{ name: 'eat', completed: true, id: 'todo-0' },
			{ name: 'sleep', completed: false, id: 'todo-1' },
		];
		const { getAllByRole, getByText } = render(<App todos={todos} />);
		const todoList = getAllByRole('listitem');
		todoList.forEach((todo, index) => {
			const { getByTestId } = within(todo);
			if (index === 1) {
				const todo1DeleteButton = getByTestId('delete-task');

				fireEvent.click(todo1DeleteButton);
			}
		});

		const { name } = todos[1];
		expect(screen.queryByText(name)).toBeNull();
	});
});
