import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Todo from '../components/Todo';
describe('todo-list-item-testing', () => {
	it('should have name as specified', () => {
		const taskName = 'eat';
		const component = render(<Todo name={taskName} />);
		const taskNameValue = component.getByTestId('name');
		expect(taskNameValue).toHaveTextContent('eat');
	});

	it('should have edit button', () => {
		const { getByTestId } = render(<Todo name='hello' />);
		expect(getByTestId('edit-task')).toBeDefined();
	});

	it('should have delete button', () => {
		const { getByTestId } = render(<Todo name='hello' />);
		expect(getByTestId('delete-task')).toBeDefined();
	});

	it('should have a checkbox', () => {
		const { getByTestId } = render(<Todo name='hello' />);
		expect(getByTestId('complete-task')).toBeDefined();
	});

	it('should disaply edit template(input box,cancel and save buttons) when edit button clicked', () => {
		const { getByTestId } = render(<Todo name='hello' />);
		const editButton = getByTestId('edit-task');
		fireEvent.click(editButton);
		expect(getByTestId('edit-name')).toBeInTheDocument();
		expect(getByTestId('cancel')).toBeInTheDocument();
		expect(getByTestId('save')).toBeInTheDocument();
	});
	it('should disaply view template(name,edit and delete buttons) when cancel button clicked', () => {
		const { getByTestId } = render(<Todo name='hello' />);
		const editButton = getByTestId('edit-task');
		fireEvent.click(editButton);

		const CancelButton = getByTestId('cancel');
		fireEvent.click(CancelButton);

		expect(getByTestId('name')).toBeInTheDocument();
		expect(getByTestId('edit-task')).toBeInTheDocument();
		expect(getByTestId('delete-task')).toBeInTheDocument();
	});
});
