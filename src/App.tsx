import Battery from './battery/Battery';
import Box from '@mui/material/Box';
import { EXAMPLE_BATTERIES } from './battery/constants';
import Typography from '@mui/material/Typography';

function App() {
	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}>
			<Typography variant='h4'>Batteries</Typography>
			{EXAMPLE_BATTERIES.map((battery) => (
				<Battery {...battery} />
			))}
		</Box>
	);
}

export default App;
