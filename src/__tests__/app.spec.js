import {
	fireEvent,
	getAllByTestId,
	render,
	screen,
	within,
} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from '../App';
const todos = [
	{ name: 'eat', completed: true, id: 'todo-0' },
	{ name: 'sleep', completed: false, id: 'todo-1' },
];
describe('tests todo app', () => {
	it('should display intial todos with edit ,delete,check box buttons', () => {
		const { getAllByRole } = render(<App todos={todos} />);

		//getting all li elements data
		const todoList = getAllByRole('listitem');
		expect(todoList.length).toEqual(2);

		todoList.forEach((todo, index) => {
			//within todoElement checking its data with our intialized data
			const { getByText, getByTestId } = within(todo);
			const { name } = todos[index];
			expect(getByText(name)).toBeInTheDocument();
			expect(getByTestId('edit-task')).toBeInTheDocument();
			expect(getByTestId('delete-task')).toBeInTheDocument();
			expect(getByTestId('complete-task')).toBeInTheDocument();
		});
	});

	it('should delete task if delete button clicked', () => {
		const { getAllByRole } = render(<App todos={todos} />);

		const todoList = getAllByRole('listitem');
		todoList.forEach((todo, index) => {
			const { getByTestId } = within(todo);

			//deleting 2nd todo
			if (index === 1) {
				const todo1DeleteButton = getByTestId('delete-task');
				fireEvent.click(todo1DeleteButton);
			}
		});

		const { name } = todos[1];
		expect(screen.queryByText(name)).toBeNull();
	});
	it('should save after editing the name', () => {
		const { getAllByRole, getByText, getAllByTestId, getByTestId } = render(
			<App todos={todos} />
		);

		//clicking edit button
		const editButtons = getAllByTestId('edit-task');
		fireEvent.click(editButtons[1]);

		//sending data to input
		const editNameInput = getByTestId('edit-name');
		fireEvent.change(editNameInput, { target: { value: 'hi' } });

		//checking input box data
		expect(editNameInput).toHaveValue('hi');

		//clicking save button
		const saveButton = getByTestId('save');
		fireEvent.click(saveButton);

		//checking saved data in the dom
		const nameFields = getAllByTestId('name');
		expect(nameFields[1]).toHaveTextContent('hi');
	});
});
