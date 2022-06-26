import { BACKGROUND_COLOR, TEXT_COLOR } from './common/colors';

import AdapterScreen from './adapter/AdapterScreen';
import BatteryScreen from './battery/BatteryScreen';
import Box from '@mui/material/Box';
import HelpScreen from './help/HelpScreen';
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
				background: BACKGROUND_COLOR,
				height: '100vh',
				overflowY: 'auto',
			}}>
			<Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
			{activeTab === 'batteries' && <BatteryScreen />}
			{activeTab === 'adapters' && <AdapterScreen />}
			{activeTab === 'help' && <HelpScreen />}
		</Box>
	);
}

export default App;
