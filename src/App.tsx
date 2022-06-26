import { BACKGROUND_COLOR } from './constants';
import Box from '@mui/material/Box';
import { EXAMPLE_ADAPTERS } from './constants';
import HelpScreen from './help/HelpScreen';
import Navbar from './navbar/Navbar';
import type { NavbarOptionT } from './types';
import Objects from './object/Objects';
import { getExampleBatteries } from './utils';
import { useState } from 'react';

function App() {
	const [activeTab, setActiveTab] = useState<NavbarOptionT>('batteries');
	const exampleBatteries = getExampleBatteries();
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
			{activeTab === 'batteries' && <Objects objects={exampleBatteries} />}
			{activeTab === 'adapters' && <Objects objects={EXAMPLE_ADAPTERS} />}
			{activeTab === 'help' && <HelpScreen />}
		</Box>
	);
}

export default App;
