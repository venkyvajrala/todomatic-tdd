import React from 'react';

const FilterButton = (props) => {
	return (
		<button
			data-testid='filter-button'
			onClick={() => props.setFilter(props.name)}
			className={props.name === props.globalFilter ? 'active' : null}>
			{props.name}
		</button>
	);
};

export default FilterButton;
