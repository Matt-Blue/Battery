import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import type { NavbarOptionT } from './types';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import { getNavbarOptionTitle } from './utils';

export default function Navbar(props: {
	activeTab: NavbarOptionT;
	setActiveTab: React.Dispatch<React.SetStateAction<NavbarOptionT>>;
}) {
	const { activeTab, setActiveTab } = props;
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position='static'
				style={{ background: '#5afc04', color: 'black', marginBottom: '1rem' }}>
				<Toolbar>
					<Stack direction='row' spacing={1}>
						<NavbarOption
							option='batteries'
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						/>
						<NavbarOption
							option='contribute'
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						/>
						<NavbarOption
							option='help'
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						/>
					</Stack>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

const NavbarOption = (props: {
	option: NavbarOptionT;
	activeTab: NavbarOptionT;
	setActiveTab: React.Dispatch<React.SetStateAction<NavbarOptionT>>;
}) => {
	const { option, activeTab, setActiveTab } = props;
	const buttonVariant = option === activeTab ? 'contained' : 'outlined';
	return (
		<Button
			variant={buttonVariant}
			color='inherit'
			style={{ paddingRight: '1rem' }}
			onClick={() => setActiveTab(option)}>
			{getNavbarOptionTitle(option)}
		</Button>
	);
};
