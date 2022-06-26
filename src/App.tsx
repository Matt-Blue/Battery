import { EXAMPLE_ADAPTERS, EXAMPLE_BATTERIES } from './constants';

import { BACKGROUND_COLOR } from './style/colors';
import Box from '@mui/material/Box';
import HelpScreen from './help/HelpScreen';
import Navbar from './navbar/Navbar';
import type { NavbarOptionT } from './types';
import Objects from './object/Objects';
import { useState } from 'react';

function App() {
	const [activeTab, setActiveTab] = useState<NavbarOptionT>('batteries');
	return (
		<Box
			sx={{
				margin: -1,
				display: 'flex',
				flexDirection: 'column',
				background: BACKGROUND_COLOR,
				height: '100vh',
				overflowY: 'auto',
			}}>
			<Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
			{activeTab === 'batteries' && <Objects objects={EXAMPLE_BATTERIES} />}
			{activeTab === 'adapters' && <Objects objects={EXAMPLE_ADAPTERS} />}
			{activeTab === 'help' && <HelpScreen />}
		</Box>
	);
}

export default App;
