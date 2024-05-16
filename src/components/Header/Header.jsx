import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchBar from '../SearchBar/components/SearchBar';

export default function Header() {
	return (
		<nav className=''>
			<div className='container'>
				<div className='left'>Feastfinder</div>
				<div className='center'>
					<span>
						<SearchIcon />
					</span>
					<SearchBar />
				</div>
				<div className='right'>
					<AccountCircleIcon />
				</div>
			</div>
		</nav>
	);
}
