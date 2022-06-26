import Battery from './battery/Battery';
import Box from '@mui/material/Box';
import { EXAMPLE_BATTERIES } from './battery/constants';
import Navbar from './navbar/Navbar';
import type { NavbarOptionT } from './navbar/types';
import { useState } from 'react';

function App() {
	const [activeTab, setActiveTab] = useState<NavbarOptionT>('batteries');
	return (
		<Box
			sx={{
				margin: -1,
				display: 'flex',
				flexDirection: 'column',
				background: 'black',
				height: '100vh',
				overflowY: 'auto',
			}}>
			<Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
			{activeTab === 'batteries' && (
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						flexGrow: 1,
					}}>
					{EXAMPLE_BATTERIES.map((battery) => (
						<Battery {...battery} />
					))}
				</Box>
			)}
			{activeTab === 'contribute' && (
				<Box
					sx={{
						height: '5000px',
						background: 'green',
					}}>
					TODO Contribute Screen
				</Box>
			)}
			{activeTab === 'help' && (
				<Box
					sx={{
						height: '5000px',
						background: 'blue',
					}}>
					TODO Help Screen
				</Box>
			)}
		</Box>
	);
}

export default App;
