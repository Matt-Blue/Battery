import { BACKGROUND_COLOR, NEON_GREEN_COLOR } from '../constants';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import type { NavbarOptionT } from '../types';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import capitalize from '@mui/material/utils/capitalize';

export default function Navbar(props: {
	activeTab: NavbarOptionT;
	setActiveTab: React.Dispatch<React.SetStateAction<NavbarOptionT>>;
}) {
	const { activeTab, setActiveTab } = props;
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position='static'
				sx={{
					borderBottom: `1px solid ${NEON_GREEN_COLOR}`,
					background: BACKGROUND_COLOR,
					color: 'black',
					marginBottom: '1rem',
				}}>
				<Toolbar>
					<Stack direction='row' spacing={1}>
						<NavbarOption
							option='batteries'
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						/>
						<NavbarOption
							option='adapters'
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
	const optionIsActive = option === activeTab;
	const buttonVariant = optionIsActive ? 'contained' : 'outlined';
	const style = optionIsActive
		? {
				background: NEON_GREEN_COLOR,
				color: BACKGROUND_COLOR,
		  }
		: {
				color: NEON_GREEN_COLOR,
		  };
	return (
		<Button
			variant={buttonVariant}
			color='inherit'
			sx={{ ...style, paddingRight: '1rem', textTransform: 'capitalize' }}
			onClick={() => setActiveTab(option)}>
			{capitalize(option)}
		</Button>
	);
};
