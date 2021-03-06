import React, { useState } from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Search from './Search';

function Banner() {
	const history = useHistory();
	const [showSearch, setShowSearch] = useState(false);

	const searchHandler = () => {
		setShowSearch((prevState) => !prevState);
	};

	const exploreHandler = () => {
		history.push('/search');
	};

	return (
		<div className='banner'>
			<div className='banner__search'>
				{showSearch && <Search />}
				<Button
					onClick={searchHandler}
					className='banner__searchButton'
					variant='outlined'
				>
					{showSearch ? 'Hide' : 'Search Dates'}
				</Button>
			</div>
			<div className='banner__info'>
				<h1>Get out and stretch your imagination</h1>
				<h5>
					Plan a different kind of gateway to uncover the hidden gems near
					you.
				</h5>
				<Button onClick={exploreHandler} variant='outlined'>
					Explore Nearby
				</Button>
			</div>
		</div>
	);
}

export default Banner;
