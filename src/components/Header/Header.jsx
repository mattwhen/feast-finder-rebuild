import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header() {
	return (
		<nav className=''>
			<div className='container'>
				<div className='left'>Feastfinder</div>
				<div className='center'>
                    <span><SearchIcon /></span>
                    <div className="search-container">
                    <input type="text" placeholder='Search all foods...' />
                    </div>
                </div>
				<div className='right'><AccountCircleIcon /></div>
			</div>
		</nav>
	);
}
