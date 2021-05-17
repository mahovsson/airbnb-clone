import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { Button } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import { useHistory } from 'react-router-dom';
import './Search.css';

function Search() {
	const history = useHistory();
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: 'selection',
		color: '#ff7779',
	};

	const handleSelection = (ranges) => {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};

	const handleSearch = () => {
		history.push('./search');
	};

	return (
		<div className='search'>
			<DateRangePicker
				ranges={[selectionRange]}
				onChange={handleSelection}
			/>
			<h2>
				Number of guests <PeopleIcon />
			</h2>
			<input min={0} defaultView={2} type='number' />
			<Button onClick={handleSearch}>Search Airbnb</Button>
		</div>
	);
}

export default Search;
