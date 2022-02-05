import { render } from '@testing-library/react';
import FilterButton from '../components/FilterButton';
describe('testing filter block of todo', () => {
	it('should render a filterbutton', () => {
		const { getByTestId } = render(<FilterButton />);
		const filterButton = getByTestId('filter-button');
		expect(filterButton).toBeInTheDocument();
	});
});
