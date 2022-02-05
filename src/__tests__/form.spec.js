import { render } from '@testing-library/react';
import Form from '../components/Form';
describe('ad form testing', () => {
	it('it should have input box and add button', () => {
		const { getByTestId } = render(<Form />);

		expect(getByTestId('task-input')).toBeDefined();
		expect(getByTestId('ad-task-button')).toBeDefined();
	});
});
