import type { NavbarOptionT } from './types';

export const getNavbarOptionTitle = (option: NavbarOptionT) => {
	switch (option) {
		case 'batteries':
			return 'Batteries';
		case 'adapters':
			return 'Adapters';
		case 'help':
			return 'Help';
		default:
			return 'Navbar option title is not yet supported';
	}
};